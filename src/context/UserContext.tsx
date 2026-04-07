import React, { createContext, useState, useContext, useEffect } from 'react';
import { storage, STORAGE_KEYS } from '../utils/storage';

type UserContextType = {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  photoUrl: string;
  setPhotoUrl: (url: string) => void;
  isLoggedIn: boolean;
  login: (userData: { name: string, email: string }) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [name, setInternalName] = useState('Alex Traveler');
  const [email, setInternalEmail] = useState('alex.traveler@icloud.com');
  const [photoUrl, setInternalPhotoUrl] = useState('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load data on mount
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const savedData = await storage.getObject<{name: string, email: string, photoUrl: string}>(STORAGE_KEYS.USER_DATA);
        if (savedData) {
          if (savedData.name) setInternalName(savedData.name);
          if (savedData.email) setInternalEmail(savedData.email);
          if (savedData.photoUrl) setInternalPhotoUrl(savedData.photoUrl);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Failed to load user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  const login = async (userData: { name: string, email: string }) => {
    setInternalName(userData.name);
    setInternalEmail(userData.email);
    setIsLoggedIn(true);
    await storage.saveObject(STORAGE_KEYS.USER_DATA, { 
      name: userData.name, 
      email: userData.email, 
      photoUrl 
    });
  };

  const logout = async () => {
    setIsLoggedIn(false);
    await storage.removeItem(STORAGE_KEYS.USER_DATA);
    // Optionally reset to defaults
    setInternalName('Alex Traveler');
    setInternalEmail('alex.traveler@icloud.com');
  };

  const setName = (newName: string) => {
    setInternalName(newName);
    storage.saveObject(STORAGE_KEYS.USER_DATA, { name: newName, email, photoUrl });
  };

  const setEmail = (newEmail: string) => {
    setInternalEmail(newEmail);
    storage.saveObject(STORAGE_KEYS.USER_DATA, { name, email: newEmail, photoUrl });
  };

  const setPhotoUrl = (newPhotoUrl: string) => {
    setInternalPhotoUrl(newPhotoUrl);
    storage.saveObject(STORAGE_KEYS.USER_DATA, { name, email, photoUrl: newPhotoUrl });
  };

  return (
    <UserContext.Provider value={{ 
      name, 
      setName, 
      email, 
      setEmail, 
      photoUrl, 
      setPhotoUrl, 
      isLoggedIn, 
      login, 
      logout,
      isLoading 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
