import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import listings from './reducers/listingsReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    listings 
})

export default createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),

  ));