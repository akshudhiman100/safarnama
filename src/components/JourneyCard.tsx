import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../theme/colors';

const { width } = Dimensions.get('window');

export interface Journey {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: any; // String for URL, number for local require
  tags: string[];
}

interface JourneyCardProps {
  item: Journey;
  onPress?: () => void;
}

export function JourneyCard({ item, onPress }: JourneyCardProps) {
  // Handle local images (required) vs remote URIs
  const imageSource = typeof item.imageUrl === 'string' ? { uri: item.imageUrl } : item.imageUrl;

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.cardContainer} onPress={onPress}>
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.cardOverlay}>
        <View style={styles.tagContainer}>
          <Text style={styles.tagText}>{item.location}</Text>
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.7,
    marginRight: 20,
    borderRadius: 24,
    backgroundColor: COLORS.surface,
    padding: 12,
    shadowColor: COLORS.textMain,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 240,
    borderRadius: 16,
    backgroundColor: '#EEE',
  },
  cardOverlay: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  tagContainer: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textMain,
    textTransform: 'uppercase',
  },
  cardContent: {
    paddingTop: 16,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textMain,
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
});
