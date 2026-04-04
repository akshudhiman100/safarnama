import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { DESTINATIONS } from '../data/destinations';
import { COLORS } from '../theme/colors';

type DestinationDetailRouteProp = RouteProp<RootStackParamList, 'DestinationDetail'>;

const { width } = Dimensions.get('window');

export function DestinationDetailScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute<DestinationDetailRouteProp>();
  const { destinationId } = route.params;

  const destination = DESTINATIONS.find(d => d.id === destinationId);

  if (!destination) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Destination not found</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image source={destination.imageUrl} style={styles.heroImage} />
          <View style={styles.heroOverlay} />
          
          <TouchableOpacity
            style={[styles.backButton, { top: insets.top + 10 }]}
            onPress={() => navigation.goBack()}
          >
            <View style={styles.backIconBg}>
              <Text style={styles.backIcon}>‹</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.heroContent}>
            <View style={styles.tagContainer}>
              {destination.tags.map(tag => (
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.title}>{destination.name}</Text>
            <Text style={styles.subtitle}>{destination.title}</Text>
          </View>
        </View>

        {/* Content Section */}
        <View style={styles.contentSection}>
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>About the Place</Text>
            <Text style={styles.description}>{destination.description}</Text>
          </View>

          <View style={styles.infoGrid}>
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>🕉️</Text>
              <Text style={styles.infoLabel}>Religion</Text>
              <Text style={styles.infoValue}>{destination.religion}</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>🤝</Text>
              <Text style={styles.infoLabel}>People</Text>
              <Text style={styles.infoValue}>{destination.people}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Must Visit Places</Text>
            {destination.placesToVisit.map((place, index) => (
              <View key={index} style={styles.placeCard}>
                <View style={styles.placeNumberContainer}>
                  <Text style={styles.placeNumber}>{index + 1}</Text>
                </View>
                <View style={styles.placeContent}>
                  <Text style={styles.placeName}>{place.name}</Text>
                  <Text style={styles.placeDesc}>{place.description}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={{ height: insets.bottom + 40 }} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: COLORS.textMain,
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: COLORS.accent,
    fontWeight: '600',
  },
  heroContainer: {
    height: 500,
    width: width,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    zIndex: 10,
  },
  backIconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    color: '#FFF',
    fontSize: 32,
    marginTop: -4,
  },
  heroContent: {
    position: 'absolute',
    bottom: 40,
    left: 24,
    right: 24,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  tag: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  tagText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 48,
    fontWeight: '800',
    color: '#FFF',
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
  },
  contentSection: {
    flex: 1,
    backgroundColor: COLORS.background,
    marginTop: -30,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  section: {
    marginBottom: 32,
  },
  sectionLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textMain,
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textSecondary,
    fontWeight: '400',
  },
  infoGrid: {
    marginBottom: 32,
    gap: 16,
  },
  infoCard: {
    backgroundColor: COLORS.surface,
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  infoIcon: {
    fontSize: 24,
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 15,
    color: COLORS.textMain,
    lineHeight: 22,
    fontWeight: '500',
  },
  placeCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: COLORS.surface,
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  placeNumberContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.textMain,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  placeNumber: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 14,
  },
  placeContent: {
    flex: 1,
  },
  placeName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textMain,
    marginBottom: 2,
  },
  placeDesc: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
});
