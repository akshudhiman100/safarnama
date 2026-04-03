import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const { width, height } = Dimensions.get('window');

type SplashNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;

export function SplashScreen() {
  const navigation = useNavigation<SplashNavigationProp>();

  useEffect(() => {
    // Navigate to Auth screen after 2.5 seconds
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      });
    }, 2500);

    return () => clearTimeout(timer);
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
