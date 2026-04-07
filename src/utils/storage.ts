import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Storage utility to handle data persistence using AsyncStorage.
 */
export const storage = {
  /**
   * Saves a string value to storage.
   */
  saveString: async (key: string, value: string): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.error('Storage Error (saveString):', error);
      return false;
    }
  },

  /**
   * Retrieves a string value from storage.
   */
  getString: async (key: string): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error('Storage Error (getString):', error);
      return null;
    }
  },

  /**
   * Saves an object/array to storage.
   */
  saveObject: async (key: string, value: any): Promise<boolean> => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      return true;
    } catch (error) {
      console.error('Storage Error (saveObject):', error);
      return false;
    }
  },

  /**
   * Retrieves an object/array from storage.
   */
  getObject: async <T>(key: string): Promise<T | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Storage Error (getObject):', error);
      return null;
    }
  },

  /**
   * Removes a specific item from storage.
   */
  removeItem: async (key: string): Promise<boolean> => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Storage Error (removeItem):', error);
      return false;
    }
  },

  /**
   * Clears all items from storage.
   */
  clearAll: async (): Promise<boolean> => {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      console.error('Storage Error (clearAll):', error);
      return false;
    }
  },
};

export const STORAGE_KEYS = {
  USER_DATA: '@user_data',
  AUTH_TOKEN: '@auth_token',
  APP_THEME: '@app_theme',
  ONBOARDING_COMPLETE: '@onboarding_complete',
};
