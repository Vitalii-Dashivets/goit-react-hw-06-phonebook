import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { filterReducer } from './filterSlice';
import { persistedContactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
