import { combineReducers, createStore } from "redux";
import headerReducer from "./reducers/header-reducer";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    header: headerReducer,
    form: formReducer
});


const store = createStore(reducers);


export default store;