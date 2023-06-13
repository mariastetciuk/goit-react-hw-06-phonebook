import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';
// import { persistStore, persistReducer } from 'redux-persist';
// import { phonebookSlice } from './counterSlise';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, phonebookReducer);

// export const store = configureStore({
//   reducer: { phonebook: phonebookSlice.reducer },
// });

// export const persistor = persistStore(store);
// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
