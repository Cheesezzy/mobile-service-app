import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import userSlice from "./userSlice";
import allUsersSlice from "./allUsersSlice";
import categoriesSlice from "./categoriesSlice";
import themeSlice from "./themeSlice";
import pushNotificationSlice from "./pushNotificationSlice";
import onBoardingSlice from "./onBoardingSlice";

const rootReducer = combineReducers({
  user: userSlice,
  users: allUsersSlice,
  categories: categoriesSlice,
  theme: themeSlice,
  pushNotification: pushNotificationSlice,
  onboarding: onBoardingSlice,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage: AsyncStorage,
    version: 0,
    whitelist: [
      "user",
      "users",
      "categories",
      "theme",
      "pushNotification",
      "onboarding",
    ],
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
export default store;
