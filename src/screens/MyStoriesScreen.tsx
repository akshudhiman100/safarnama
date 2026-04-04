import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { JourneyCard, Journey } from '../components/JourneyCard';
import { RootStackParamList } from '../navigation/AppNavigator';

type MyStoriesRouteProp = RouteProp<RootStackParamList, 'MyStories'>;

const ALL_STORIES: Journey[] = [
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
    title: 'Hidden Trails of Ladakh',
    date: 'Jun 10 - Jun 18',
    location: 'Ladakh, India',
    imageUrl: require('../assets/images/Ladakh.png'),
    tags: ['Adventure', 'High Altitude'],
  },
  {
    id: '4',
    title: 'Varanasi Evening Prayers',
    date: 'Nov 02 - Nov 08',
    location: 'Varanasi, India',
    imageUrl: require('../assets/images/varanasi.png'),
    tags: ['Spirituality', 'Ancient'],
  },
  {
    id: '5',
    title: 'Kerala Backwaters Diary',
    date: 'Jan 15 - Jan 22',
    location: 'Kerala, India',
    imageUrl: require('../assets/images/kerala.png'),
    tags: ['Lush', 'Relaxation'],
  },
  {
    id: '6',
    title: 'Escape to Kasol',
    date: 'Apr 05 - Apr 12',
    location: 'Himachal, India',
    imageUrl: require('../assets/images/Kasol-valley.png'),
    tags: ['Parvati Valley', 'Magic'],
  },
];

export function MyStoriesScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute<MyStoriesRouteProp>();
  const { location, title: customTitle } = route.params || {};

  // Filter stories based on passed location or show all
  const filteredStories = location
    ? ALL_STORIES.filter(s =>
        s.location.toLowerCase().includes(location.toLowerCase()),
      )
    : ALL_STORIES;

  const displayTitle =
    customTitle || (location ? `${location} Memories` : 'My Stories');

  return (
    <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + 20,
          paddingBottom: insets.bottom + 40,
        }}
      >
        {/* Navigation Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>{displayTitle}</Text>

        <View style={styles.list}>
          {filteredStories.length > 0 ? (
            filteredStories.map(story => (
              <View key={story.id} style={styles.cardWrapper}>
                <JourneyCard item={story} />
              </View>
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                No memories found for this location yet.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  backButton: {
    paddingVertical: 8,
  },
  backText: {
    fontSize: 18,
    color: '#111827',
    fontWeight: '500',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    paddingHorizontal: 24,
    marginBottom: 24,
    letterSpacing: -1,
  },
  list: {
    paddingHorizontal: 24,
  },
  cardWrapper: {
    marginBottom: 24,
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
});
