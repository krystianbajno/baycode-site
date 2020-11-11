import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store
} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";

import ModalReducer from "./reducers/ModalReducer";
import SettingsReducer from "./reducers/SettingsReducer";
import ArticleReducer from "./reducers/ArticleReducer";
import EstimateReducer from "./reducers/EstimateReducer";
import ExperienceReducer from "./reducers/ExperienceReducer"

import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  modal: ModalReducer,
  estimate: EstimateReducer,
  article: ArticleReducer,
  experience: ExperienceReducer,
  settings: SettingsReducer
});

const enhancer = (extraArguments) => composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(extraArguments))
);

export const createAppStore = (extraArguments): Store => createStore(
  rootReducer,
  enhancer(extraArguments)
);
