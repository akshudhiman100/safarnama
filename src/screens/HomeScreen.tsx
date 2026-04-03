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
import { COLORS } from '../theme/colors';
import { JourneyCard, Journey } from '../components/JourneyCard';
import { InspirationCard, Inspiration } from '../components/InspirationCard';
import { MomentCard, Moment } from '../components/MomentCard';

const { width } = Dimensions.get('window');

const JOURNEYS: Journey[] = [
  {
    id: '1',
    title: 'Kyoto Echoes',
    date: 'Oct 12 - Oct 20',
    location: 'Japan',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop',
    tags: ['Culture', 'Serene'],
  },
  {
    id: '2',
    title: 'Alpine Whispers',
    date: 'Dec 05 - Dec 14',
    location: 'Switzerland',
    imageUrl: 'https://images.unsplash.com/photo-1531366936010-27c57f9273f4?q=80&w=1000&auto=format&fit=crop',
    tags: ['Nature', 'Cold'],
  },
  {
    id: '3',
    title: 'Golden Sands',
    date: 'Feb 10 - Feb 18',
    location: 'Morocco',
    imageUrl: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1000&auto=format&fit=crop',
    tags: ['Desert', 'Warm'],
  },
];

const INSPIRATION: Inspiration[] = [
  { id: '1', imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop', title: 'Hidden Trails' },
  { id: '2', imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop', title: 'Ocean Views' },
  { id: '3', imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop', title: 'City Lights' },
];

const MOMENTS: Moment[] = [
  {
    id: '1',
    photoUrl: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
    title: 'Morning in the Medina',
    description: 'Waking up early to catch the first light hitting the ancient walls. The city was quiet, save for the distant sound of merchants setting up their stalls.',
    date: 'Feb 12, 2026',
    location: 'Marrakech, Morocco'
  },
  {
    id: '2',
    photoUrl: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop', 
    title: 'The Unending Valleys',
    description: 'A difficult hike but the views from the summit at dawn made every step worth it. The mist was settling deep into the valley, creating an ocean of clouds.',
    date: 'Jan 04, 2026',
    location: 'Swiss Alps'
  },
  {
    id: '3',
    photoUrl: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1000&auto=format&fit=crop', 
    title: 'Café Culture',
    description: 'Spent the whole afternoon watching people pass by. Black coffee, a worn out paperback, and the faint hum of Parisian streets. Perfect stillness.',
    date: 'Nov 22, 2025',
    location: 'Paris, France'
  }
];

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('Journeys');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 40 }]}>
        
        {/* Header Section */}
        <View style={[styles.header, { marginTop: insets.top + 20 }]}>
          <View>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.appName}>Safarnama</Text>
          </View>
          <TouchableOpacity style={styles.profileAvatar}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' }} 
              style={styles.avatarImage} 
            />
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <TouchableOpacity activeOpacity={0.9} style={styles.heroContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop' }} 
            style={styles.heroImage} 
          />
          <View style={styles.heroOverlay}>
            <View style={styles.heroBadge}>
              <Text style={styles.heroBadgeText}>Next Adventure</Text>
            </View>
            <Text style={styles.heroTitle}>Valley of Flowers</Text>
            <Text style={styles.heroSubtitle}>Starting in 12 days • Uttarakhand, India</Text>
          </View>
        </TouchableOpacity>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {['Journeys', 'Drafts', 'Moments'].map((tab) => (
            <TouchableOpacity 
              key={tab} 
              onPress={() => setActiveTab(tab)}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content */}
        {activeTab === 'Journeys' && (
          <View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Travelers</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={JOURNEYS}
              renderItem={({ item }) => <JourneyCard item={item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.journeysList}
              snapToInterval={width * 0.7 + 20}
              decelerationRate="fast"
            />

            {/* Inspiration Section */}
            <View style={[styles.sectionHeader, { marginTop: 32 }]}>
              <Text style={styles.sectionTitle}>Travel Inspiration</Text>
            </View>
            
            <View style={styles.inspirationContainer}>
              {INSPIRATION.map(item => (
                <View key={item.id} style={{ marginBottom: 16 }}>
                  <InspirationCard item={item} />
                </View>
              ))}
            </View>
          </View>
        )}

        {activeTab === 'Moments' && (
          <View style={styles.momentsContainer}>
            {MOMENTS.map(moment => (
              <MomentCard key={moment.id} moment={moment} />
            ))}
          </View>
        )}
        
      </ScrollView>
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
  momentsContainer: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
});
