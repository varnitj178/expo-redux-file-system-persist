import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import rootReducer from "./ConfigureStore";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);

export { store, persistor };
