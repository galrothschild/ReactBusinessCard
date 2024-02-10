import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cards/cardsSlice";
import userReducer from "./user/userSlice";
import formDataReducer from "./forms/formDataSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    user: userReducer,
    formData: formDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
