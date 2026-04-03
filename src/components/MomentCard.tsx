import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { COLORS } from '../theme/colors';

const { width } = Dimensions.get('window');

export interface Moment {
  id: string;
  photoUrl: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

interface MomentCardProps {
  moment: Moment;
}

export function MomentCard({ moment }: MomentCardProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: moment.photoUrl }} 
          style={styles.image} 
          resizeMode="cover"
        />
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>{moment.date}</Text>
          <View style={styles.metaDot} />
          <Text style={styles.metaText}>{moment.location}</Text>
        </View>

        <Text style={styles.title}>{moment.title}</Text>
        <Text style={styles.description} numberOfLines={4}>
          {moment.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 40,
    backgroundColor: COLORS.background, // Blend with background
  },
  imageContainer: {
    width: width - 48,
    height: (width - 48) * 1.25, // 4:5 aspect ratio, very classic and realistic
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: COLORS.surface,
    elevation: 4,
    shadowColor: COLORS.textMain,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    paddingTop: 20,
    paddingHorizontal: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  metaText: {
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: COLORS.accent,
    fontWeight: '700',
  },
  metaDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.accent,
    marginHorizontal: 8,
    opacity: 0.5,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.textMain,
    letterSpacing: -0.5,
    marginBottom: 12,
    lineHeight: 32,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textSecondary,
    fontWeight: '400',
  },
});
