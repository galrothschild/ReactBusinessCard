// @ts-ignore
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cards/cardsSlice";
import userReducer from "./user/userSlice";
import formDataReducer from "./forms/formDataSlice";
import persistStore from "redux-persist/es/persistStore";
import themeReducer from "./theme/themeSlice";
import SnackbarReducer from "./snackbar/SnackbarSlice";

const userPersistConfig = {
	key: "user",
	storage,
	blacklist: ["cards", "formData"],
};

const persistUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
	reducer: {
		cards: cardsReducer,
		user: persistUserReducer,
		formData: formDataReducer,
		theme: themeReducer,
		snack: SnackbarReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
