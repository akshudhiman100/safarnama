import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export interface Inspiration {
  id: string;
  imageUrl: any; // String for URL, number for local require
  title: string;
  location: string;
}

interface InspirationCardProps {
  item: Inspiration;
  onPress?: () => void;
}

export function InspirationCard({ item, onPress }: InspirationCardProps) {
  // Handle local images (required) vs remote URIs
  const imageSource = typeof item.imageUrl === 'string' ? { uri: item.imageUrl } : item.imageUrl;

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.cardContainer} onPress={onPress}>
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 120,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});
