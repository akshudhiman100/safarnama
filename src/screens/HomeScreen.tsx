import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useUser } from '../context/UserContext';
import { COLORS } from '../theme/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Feather from 'react-native-vector-icons/Feather';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
import { JourneyCard, Journey } from '../components/JourneyCard';
import { InspirationCard, Inspiration } from '../components/InspirationCard';
import { MomentCard, Moment } from '../components/MomentCard';

const { width } = Dimensions.get('window');

const JOURNEYS: Journey[] = [
  {
    id: '1',
    title: 'Himalayan Echoes',
    date: 'Oct 12 - Oct 20',
    location: 'Himachal, India',
    imageUrl: require('../assets/images/Himachal.png'),
    tags: ['Culture', 'Serene'],
  },
  {
    id: '2',
    title: 'The Divine Rishikesh',
    date: 'Dec 05 - Dec 14',
    location: 'Uttarakhand, India',
    imageUrl: require('../assets/images/uttarakhand.png'),
    tags: ['Nature', 'Cold'],
  },
  {
    id: '3',
    title: 'Golden Sands',
    date: 'Feb 10 - Feb 18',
    location: 'Rajasthan, India',
    imageUrl: require('../assets/images/rajastan.png'),
    tags: ['Desert', 'Warm'],
  },
];

const INSPIRATION: Inspiration[] = [
  {
    id: '9',
    imageUrl: require('../assets/images/spiti.png'),
    title: 'Spiti: Little Tibet',
    location: 'Spiti Valley',
  },
  {
    id: '11',
    imageUrl: require('../assets/images/Ladakh.png'),
    title: 'Ladakh',
    location: 'Ladakh',
  },
  {
    id: '6',
    imageUrl: require('../assets/images/valley of flowes.png'),
    title: 'Valley of Flowers',
    location: 'Uttarakhand',
  },
  {
    id: '5',
    imageUrl: require('../assets/images/uttarakhand.png'),
    title: 'Yoga in Rishikesh',
    location: 'Uttarakhand',
  },
];

const REGIONS = [
  { name: 'Himachal', icon: '🏔️', color: '#E0F2FE' },
  { name: 'Uttarakhand', icon: '🌊', color: '#F0FDF4' },
  { name: 'All Places', icon: '🌍', color: '#FFF7ED' },
];

const MOMENTS: Moment[] = [
  {
    id: '1',
    photoUrl: require('../assets/images/kinnaur.png'), // Corrected to existing file
    title: 'Morning in Kinnaur',
    description:
      'Waking up early to catch the first light hitting the majestic Kinner Kailash. The silence was soul-stirringly beautiful.',
    date: 'Feb 12, 2026',
    location: 'Kalpa, Himachal',
  },
  {
    id: '2',
    photoUrl: require('../assets/images/rishikesh.png'), // Corrected to existing file
    title: 'The Divine Rishikesh',
    description:
      'Walking across the suspension bridge as the sun began to set over the Ganges. The sound of evening Aarti was starting to drift across the water.',
    date: 'Jan 04, 2026',
    location: 'Rishikesh, Uttarakhand',
  },
  {
    id: '3',
    photoUrl: require('../assets/images/Jaipur.png'), // Corrected to existing file (rajastan.png)
    title: 'Jaipur Wanderlust',
    description:
      'Spent the whole afternoon exploring the Pink City. The intricate architecture and vibrant colors tell a story at every turn.',
    date: 'Nov 22, 2025',
    location: 'Jaipur, Rajasthan',
  },
];

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeNavigationProp>();
  const { name, photoUrl } = useUser();
  const [activeTab, setActiveTab] = useState('Journeys');
  
  // Get journeys from Redux
  const journeys = useSelector((state: RootState) => state.stories.journeys);

  const avatarSource =
    typeof photoUrl === 'string' ? { uri: photoUrl } : photoUrl;

  const renderHeader = () => (
    <View>
      {/* Header Section */}
      <View style={[styles.header, { marginTop: insets.top + 20 }]}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.appName}>
            {name ? name.split(' ')[0] : 'Traveler'}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.profileAvatar}
          onPress={() => navigation.navigate('Profile')}
        >
          {photoUrl ? (
            <Image source={avatarSource} style={styles.avatarImage} />
          ) : (
            <View
              style={[styles.avatarImage, { backgroundColor: COLORS.surface }]}
            />
          )}
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.heroContainer}
        onPress={() =>
          navigation.navigate('MyStories', { location: 'Uttarakhand' })
        }
      >
        <Image
          source={require('../assets/images/valley of flowes.png')}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>Next Adventure</Text>
          </View>
          <Text style={styles.heroTitle}>Valley of Flowers</Text>
          <Text style={styles.heroSubtitle}>
            Starting in 12 days • Uttarakhand, India
          </Text>
        </View>
      </TouchableOpacity>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {['Journeys', 'Drafts', 'Moments'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Header Content (if Tab is Journeys) */}
      {activeTab === 'Journeys' && (
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Travelers</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={journeys}
            renderItem={({ item }) => (
              <JourneyCard
                item={item}
                onPress={() =>
                  navigation.navigate('MyStories', {
                    location: item.location,
                  })
                }
              />
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.journeysList}
            snapToInterval={width * 0.7 + 20}
            decelerationRate="fast"
          />

          {/* Explore Regions Section */}
          <View style={[styles.sectionHeader, { marginTop: 32 }]}>
            <Text style={styles.sectionTitle}>Explore Regions</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.regionsList}
          >
            {REGIONS.map(region => (
              <TouchableOpacity
                key={region.name}
                style={[styles.regionButton, { backgroundColor: region.color }]}
                onPress={() => {
                  if (region.name === 'All Places') {
                    navigation.navigate('Explore', {
                      initialType: 'state',
                      initialValue: 'All',
                    });
                  } else {
                    navigation.navigate('Explore', {
                      initialType: 'state',
                      initialValue: region.name,
                    });
                  }
                }}
              >
                <Text style={styles.regionIcon}>{region.icon}</Text>
                <Text style={styles.regionName}>{region.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Travel by Interest Section */}
          <View style={[styles.sectionHeader, { marginTop: 32 }]}>
            <Text style={styles.sectionTitle}>What's your plan?</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.regionsList}
          >
            {[
              { name: 'Family', icon: '👨‍👩‍👧‍👦', color: '#FDF2F8' },
              { name: 'Friends', icon: '🍻', color: '#F5F3FF' },
              { name: 'Hiking', icon: '🥾', color: '#ECFDF5' },
              { name: 'Adventure', icon: '🧗', color: '#FFF7ED' },
            ].map(item => (
              <TouchableOpacity
                key={item.name}
                style={[styles.interestButton, { backgroundColor: item.color }]}
                onPress={() =>
                  navigation.navigate('Explore', {
                    initialType: 'tag',
                    initialValue: item.name,
                  })
                }
              >
                <Text style={styles.interestIcon}>{item.icon}</Text>
                <Text style={styles.interestName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Inspiration Section Title */}
          <View style={[styles.sectionHeader, { marginTop: 32 }]}>
            <Text style={styles.sectionTitle}>Travel Inspiration</Text>
          </View>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {activeTab === 'Moments' ? (
        <FlatList
          data={MOMENTS}
          ListHeaderComponent={renderHeader()}
          renderItem={({ item }) => (
            <View style={{ paddingHorizontal: 24 }}>
              <MomentCard
                moment={item}
                onPress={() =>
                  navigation.navigate('MyStories', {
                    location: item.location,
                  })
                }
              />
            </View>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: insets.bottom + 40 }}
        />
      ) : (
        <FlatList
          data={activeTab === 'Journeys' ? INSPIRATION : []}
          ListHeaderComponent={renderHeader()}
          renderItem={({ item }) =>
            activeTab === 'Journeys' ? (
              <View style={{ paddingHorizontal: 24, marginBottom: 16 }}>
                <InspirationCard
                  item={item}
                  onPress={() =>
                    navigation.navigate('DestinationDetail', {
                      destinationId: item.id,
                    })
                  }
                />
              </View>
            ) : null
          }
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: insets.bottom + 40 }}
        />
      )}
      
      {/* Floating Action Button for Add Story */}
      <TouchableOpacity 
        style={[styles.fab, { bottom: insets.bottom + 20 }]}
        onPress={() => navigation.navigate('AddStory')}
        activeOpacity={0.8}
      >
        <Feather name="plus" size={32} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    // padding handled via insets dynamically inline
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  greeting: {
    fontSize: 14,
    color: COLORS.textSecondary,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 4,
    fontWeight: '600',
  },
  appName: {
    fontSize: 28,
    color: COLORS.textMain,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  profileAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.surface,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  heroContainer: {
    marginHorizontal: 24,
    height: 400,
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: COLORS.surface,
    elevation: 8,
    shadowColor: COLORS.textMain,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    marginBottom: 32,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 24,
    justifyContent: 'flex-end',
  },
  heroBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  heroBadgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  heroSubtitle: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 15,
    fontWeight: '500',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: COLORS.textMain,
  },
  tabText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#FFF',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textMain,
    letterSpacing: -0.5,
  },
  seeAllText: {
    fontSize: 15,
    color: COLORS.accent,
    fontWeight: '600',
  },
  journeysList: {
    paddingLeft: 24,
    paddingRight: 4,
  },
  inspirationContainer: {
    paddingHorizontal: 24,
  },
  regionsList: {
    paddingLeft: 24,
    paddingRight: 8,
  },
  regionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  regionIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  regionName: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textMain,
  },
  interestButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 24,
    marginRight: 12,
    width: 100,
  },
  interestIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  interestName: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textMain,
  },
  momentsContainer: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  fab: {
    position: 'absolute',
    right: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 4,
    borderColor: '#FFF',
  },
});
