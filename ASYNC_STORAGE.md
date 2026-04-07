# AsyncStorage Integration Walkthrough

This walkthrough outlines how `@react-native-async-storage/async-storage` has been integrated into the Safarnama app to provide persistent user sessions.

## 1. Installation
The package was installed using:
```bash
yarn add @react-native-async-storage/async-storage
```

## 2. Storage Utility
A utility file was created at `src/utils/storage.ts` to provide a clean, typed API for storage operations. This avoids repetitive `JSON.stringify` and `JSON.parse` calls.

```typescript
// Example usage:
await storage.saveObject(STORAGE_KEYS.USER_DATA, { name: 'John' });
const user = await storage.getObject(STORAGE_KEYS.USER_DATA);
```

## 3. Persistent User Context
The `UserContext.tsx` was updated to:
- **Load** saved user data from storage when the app starts.
- **Save** updates automatically whenever `setName`, `setEmail`, or `setPhotoUrl` are called.
- Provide an `isLoading` flag to provide a better user experience while data is being fetched.

## 4. Auto-Login Flow
The `SplashScreen.tsx` now checks for existing user data. If found, it skips the Auth screens and takes the user directly to the Home screen, creating a seamless "logged-in" experience.

---
### Next Steps
- You can now use the `storage` utility in any component to persist data like app settings, bookmarks, or search history.
- Ensure to add any new storage keys to the `STORAGE_KEYS` object in `src/utils/storage.ts` for consistency.
