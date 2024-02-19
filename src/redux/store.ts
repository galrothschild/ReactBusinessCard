// @ts-ignore
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cards/cardsSlice";
import userReducer from "./user/userSlice";
import formDataReducer from "./forms/formDataSlice";
import persistStore from 'redux-persist/es/persistStore';


const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['cards', 'formData']
}

const persistUserReducer = persistReducer(userPersistConfig, userReducer);


export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    user: persistUserReducer,
    formData: formDataReducer,
  },
});

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
