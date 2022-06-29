import { legacy_createStore as createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  timeout: null,
};

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
