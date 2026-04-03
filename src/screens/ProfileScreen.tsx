import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../theme/colors';
import { useUser } from '../context/UserContext';

import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ProfileNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

const IconWrapper = ({ iconName, color = '#374151', bgColor = '#FFFFFF' }: any) => (
  <View style={[styles.iconWrapper, { backgroundColor: bgColor }]}>
    <Feather name={iconName} size={18} color={color} />
  </View>
);

const RowItem = ({ iconName, title, isLast, rightElement, onRowPress, titleColor, iconColor, iconBgColor }: any) => (
  <TouchableOpacity 
    style={[styles.rowContainer, !isLast && styles.rowBorder]} 
    onPress={onRowPress}
    disabled={!onRowPress}
    activeOpacity={0.7}
  >
    <View style={styles.rowLeft}>
      <IconWrapper iconName={iconName} color={iconColor} bgColor={iconBgColor} />
      <Text style={[styles.rowTitle, titleColor && { color: titleColor }]}>{title}</Text>
    </View>
    <View style={styles.rowRight}>
      {rightElement !== undefined ? rightElement : <Feather name="chevron-right" size={20} color="#9CA3AF" />}
    </View>
  </TouchableOpacity>
);

export function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<ProfileNavigationProp>();
  const { name, photoUrl } = useUser();

  // Generate a mock email based on user's name
  const email = `${name.split(' ')[0].toLowerCase()}.${name.split(' ')[1]?.toLowerCase() || 'user'}@icloud.com`;

  return (
    <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 20, paddingBottom: insets.bottom + 40 }}>
        
        {/* Navigation Back */}
        <TouchableOpacity style={styles.backButtonTop} onPress={() => navigation.goBack()}>
          <Text style={styles.backChevron}>‹</Text>
        </TouchableOpacity>

        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
             {photoUrl ? (
               <Image source={{ uri: photoUrl }} style={styles.avatar} />
             ) : (
               <View style={styles.avatarPlaceholder} />
             )}
          </View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
          
          <TouchableOpacity 
            style={styles.editProfileBtn}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Text style={styles.editProfileText}>Edit profile</Text>
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Content</Text>
          <View style={styles.card}>
            <RowItem 
              iconName="grid" 
              title="My stories" 
              rightElement={
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>2</Text>
                </View>
              }
              onRowPress={() => navigation.navigate('MyStories')}
            />
            <RowItem 
              iconName="message-square" 
              title="Support" 
              isLast 
            />
          </View>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.card}>
            <RowItem 
              iconName="log-out" 
              title="Logout" 
              iconColor="#EF4444"
              iconBgColor="#FEF2F2"
              titleColor="#EF4444"
              rightElement={<View/>}
              isLast 
              onRowPress={() => {
                navigation.reset({ index: 0, routes: [{ name: 'Auth' }] });
              }}
            />
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButtonTop: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  backChevron: {
    fontSize: 36,
    color: '#000',
    fontWeight: '300',
    marginTop: -10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#CBF5D2', // light green like the figma background
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 16,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#CBF5D2',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  email: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 20,
    fontWeight: '500',
  },
  editProfileBtn: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  editProfileText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9CA3AF',
    textTransform: 'capitalize',
    marginBottom: 12,
    paddingLeft: 4,
  },
  card: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    overflow: 'hidden',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.04)',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  iconText: {
    fontSize: 16,
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 40,
    justifyContent: 'flex-end',
  },
  chevron: {
    fontSize: 22,
    color: '#9CA3AF',
    fontWeight: '400',
    marginTop: -2,
  },
  badge: {
    backgroundColor: '#10B981',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
