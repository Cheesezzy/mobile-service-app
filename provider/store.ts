import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import userSlice from "./userSlice";
import categoriesSlice from "./categoriesSlice";

const rootReducer = combineReducers({
  user: userSlice,
  categories: categoriesSlice,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage: AsyncStorage,
    version: 0,
    whitelist: ["user"],
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
export default store;
