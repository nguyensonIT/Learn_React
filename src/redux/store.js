import { createStore } from "redux";
import rootReducer from "./reducer";
// const composedEnhancer = composeWithDevTools();

const store = createStore(rootReducer);

export default store;
