import { createStore } from "redux";
import studentsReducer from "./reducer";

const store = createStore(studentsReducer);

export default store;
