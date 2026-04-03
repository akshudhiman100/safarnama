import React, { createContext, useState, useContext } from 'react';

type UserContextType = {
  name: string;
  setName: (name: string) => void;
  photoUrl: string;
  setPhotoUrl: (url: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [name, setName] = useState('Alex Traveler');
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop');

  return (
    <UserContext.Provider value={{ name, setName, photoUrl, setPhotoUrl }}>
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
