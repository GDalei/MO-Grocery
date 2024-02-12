import {legacy_createStore as createStore} from 'redux';
import rootReducer from './reducer';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";


const perConfig = {
    Key: "root",
    storage
}


const store = createStore(
    rootReducer
)

//export const persist_store = persistStore(store)

export default store;