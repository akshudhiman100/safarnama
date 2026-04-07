import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { storage, STORAGE_KEYS } from '../utils/storage';

const { width, height } = Dimensions.get('window');

type SplashNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;

export function SplashScreen() {
  const navigation = useNavigation<SplashNavigationProp>();

  useEffect(() => {
    const checkUserAndNavigate = async () => {
      try {
        const userData = await storage.getObject(STORAGE_KEYS.USER_DATA);
        
        // Wait at least 2 seconds for visual effect
        setTimeout(() => {
          if (userData) {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          } else {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Auth' }],
            });
          }
        }, 800);
      } catch (error) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Auth' }],
        });
      }
    };

    checkUserAndNavigate();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Splash.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});
