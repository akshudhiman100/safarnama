import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { JourneyCard } from '../components/JourneyCard';

export function MyStoriesScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  // Reusing the mock data from Home as "My Stories" for demonstration
  const MOCK_STORIES = [
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
  ];

  return (
    <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 20, paddingBottom: insets.bottom + 40 }}>
        
        {/* Navigation Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
             <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>My Stories</Text>

        <View style={styles.list}>
          {MOCK_STORIES.map(story => (
            <View key={story.id} style={styles.cardWrapper}>
              <JourneyCard item={story} />
            </View>
          ))}
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
});
