import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { SplashScreen } from '../screens/SplashScreen';
import { AuthScreen } from '../screens/AuthScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { EditProfileScreen } from '../screens/EditProfileScreen';
import { MyStoriesScreen } from '../screens/MyStoriesScreen';
import { DestinationDetailScreen } from '../screens/DestinationDetailScreen';
import { ExploreScreen } from '../screens/ExploreScreen';

export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Home: undefined;
  Profile: undefined;
  EditProfile: undefined;
  MyStories: { location?: string; title?: string };
  DestinationDetail: { destinationId: string };
  Explore: { initialType?: 'state' | 'tag'; initialValue?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Splash" 
      screenOptions={{ headerShown: false, animation: 'fade' }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="MyStories" component={MyStoriesScreen} />
      <Stack.Screen name="DestinationDetail" component={DestinationDetailScreen} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
  );
}
