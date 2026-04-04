import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { DESTINATIONS, Destination } from '../data/destinations';
import { COLORS } from '../theme/colors';

const { width } = Dimensions.get('window');

type ExploreRouteProp = RouteProp<RootStackParamList, 'Explore'>;

const STATES = [
  'All',
  'Himachal',
  'Uttarakhand',
  'Ladakh',
  'Kerala',
  'Uttar Pradesh',
];
const REQUIREMENTS = [
  'All',
  'Family',
  'Friends',
  'Hiking',
  'Adventure',
  'Spirituality',
  'Leisure',
];

export function ExploreScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const route = useRoute<ExploreRouteProp>();
  const { initialType, initialValue } = route.params || {};

  const [activeState, setActiveState] = useState(
    initialType === 'state' ? initialValue || 'All' : 'All',
  );
  const [activeRequirement, setActiveRequirement] = useState(
    initialType === 'tag' ? initialValue || 'All' : 'All',
  );
  const [filteredDestinations, setFilteredDestinations] =
    useState<Destination[]>(DESTINATIONS);

  useEffect(() => {
    let filtered = DESTINATIONS;

    if (activeState !== 'All') {
      filtered = filtered.filter(d => d.state === activeState);
    }

    if (activeRequirement !== 'All') {
      filtered = filtered.filter(d => d.tags.includes(activeRequirement));
    }

    setFilteredDestinations(filtered);
  }, [activeState, activeRequirement]);

  const renderDestinationCard = ({ item }: { item: Destination }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() =>
        navigation.navigate('DestinationDetail', { destinationId: item.id })
      }
    >
      <Image source={item.imageUrl} style={styles.cardImage} />
      <View style={styles.cardOverlay}>
        <View style={styles.tagRow}>
          {item.tags.slice(0, 2).map(tag => (
            <View key={tag} style={styles.cardTag}>
              <Text style={styles.cardTagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardLocation}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Discover Places</Text>
      </View>

      <View style={styles.filterSection}>
        <Text style={styles.filterLabel}>Explore by State</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          {STATES.map(state => (
            <TouchableOpacity
              key={state}
              onPress={() => setActiveState(state)}
              style={[
                styles.filterChip,
                activeState === state && styles.activeChip,
              ]}
            >
              <Text
                style={[
                  styles.filterChipText,
                  activeState === state && styles.activeChipText,
                ]}
              >
                {state}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={[styles.filterLabel, { marginTop: 16 }]}>
          What are you looking for?
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          {REQUIREMENTS.map(req => (
            <TouchableOpacity
              key={req}
              onPress={() => setActiveRequirement(req)}
              style={[
                styles.filterChip,
                activeRequirement === req && styles.activeChip,
              ]}
            >
              <Text
                style={[
                  styles.filterChipText,
                  activeRequirement === req && styles.activeChipText,
                ]}
              >
                {req}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredDestinations}
        renderItem={renderDestinationCard}
        keyExtractor={item => item.id}
        contentContainerStyle={[
          styles.listContent,
          { paddingBottom: insets.bottom + 20 },
        ]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateEmoji}>🏖️</Text>
            <Text style={styles.emptyStateText}>
              No destinations match your filters.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setActiveState('All');
                setActiveRequirement('All');
              }}
              style={styles.resetButton}
            >
              <Text style={styles.resetButtonText}>Reset Filters</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 20,
    backgroundColor: '#FFF',
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 24,
    color: COLORS.textMain,
    fontWeight: '300',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.textMain,
    // letterSpacing: -0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterSection: {
    paddingVertical: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  filterScroll: {
    paddingHorizontal: 18,
    paddingBottom: 4,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  activeChip: {
    backgroundColor: COLORS.textMain,
    borderColor: COLORS.textMain,
  },
  filterChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  activeChipText: {
    color: '#FFF',
  },
  listContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  card: {
    height: 240,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: COLORS.surface,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
    padding: 20,
    justifyContent: 'flex-end',
  },
  tagRow: {
    flexDirection: 'row',
    position: 'absolute',
    top: 16,
    left: 16,
  },
  cardTag: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 6,
  },
  cardTagText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  cardLocation: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    fontWeight: '500',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  emptyStateEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyStateText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  resetButton: {
    backgroundColor: COLORS.textMain,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  resetButtonText: {
    color: '#FFF',
    fontWeight: '700',
  },
});
