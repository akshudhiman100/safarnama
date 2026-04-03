import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useUser } from '../context/UserContext';

export function EditProfileScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { name, setName, photoUrl, setPhotoUrl } = useUser();
  
  const [localName, setLocalName] = useState(name);
  const [localPhotoUrl, setLocalPhotoUrl] = useState<string | null>(photoUrl);

  const handleSave = () => {
    setName(localName);
    setPhotoUrl(localPhotoUrl || '');
    navigation.goBack();
  };

  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      includeExtra: false,
    });

    if (result.didCancel || result.errorCode) {
      return;
    }

    if (result.assets && result.assets.length > 0) {
      setLocalPhotoUrl(result.assets[0].uri || null);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={[styles.container, { backgroundColor: '#FFFFFF' }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 20, paddingBottom: insets.bottom + 40 }}>
        
        {/* Navigation Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
             <Text style={styles.backText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Profile</Text>
          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
             <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>

        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <TouchableOpacity onPress={pickImage} activeOpacity={0.8} style={styles.avatarContainer}>
            {localPhotoUrl ? (
              <Image source={{ uri: localPhotoUrl }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder} />
            )}
          </TouchableOpacity>
          
          <TouchableOpacity onPress={pickImage} style={styles.changePhotoBtn}>
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.formSection}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={localName}
            onChangeText={setLocalName}
            placeholder="Enter your name"
            placeholderTextColor="#9CA3AF"
          />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  backButton: {
    paddingVertical: 8,
  },
  backText: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  saveButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#111827',
    borderRadius: 20,
  },
  saveText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#CBF5D2',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
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
  changePhotoBtn: {
    marginTop: 12,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
  },
  changePhotoText: {
    color: '#111827',
    fontWeight: '600',
    fontSize: 13,
  },
  formSection: {
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111827',
    marginBottom: 24,
  },
});
