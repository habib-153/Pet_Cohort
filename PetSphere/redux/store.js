import AsyncStorage from "@react-native-async-storage/async-storage";
import authReducer from "./features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whiteList: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, REGISTER, PERSIST, REHYDRATE, PURGE],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);