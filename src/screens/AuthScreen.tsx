import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Dimensions, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { COLORS } from '../theme/colors';

const { width } = Dimensions.get('window');

type AuthNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;

export function AuthScreen() {
  const navigation = useNavigation<AuthNavigationProp>();
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthenticate = () => {
    // In a real app, perform Firebase/API auth here.
    // For now, we simulate a successful login and navigate to Home.
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1542314831-c6a4d142104d?q=80&w=1200&auto=format&fit=crop' }} 
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.logo}>Safarnama</Text>
          <Text style={styles.subtitle}>Your journey begins here.</Text>
        </View>

        <View style={styles.formContainer}>
          {!isLogin && (
            <TextInput 
              placeholder="Full Name"
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={styles.input}
            />
          )}
          <TextInput 
            placeholder="Email Address"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput 
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleAuthenticate}>
            <Text style={styles.buttonText}>{isLogin ? 'Log In' : 'Sign Up'}</Text>
          </TouchableOpacity>

          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
            </Text>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.switchAction}>{isLogin ? 'Create one' : 'Log in'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.45)', // Darken background to make text readable
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 32,
    paddingBottom: 60,
  },
  headerContainer: {
    marginBottom: 40,
  },
  logo: {
    fontSize: 48,
    fontWeight: '800',
    color: '#FFF',
    letterSpacing: -1,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 18,
    fontSize: 16,
    color: '#FFF',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  button: {
    backgroundColor: COLORS.accent,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  switchText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 15,
  },
  switchAction: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
