import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './reducers'
import ReduxThunk from 'redux-thunk'

export const middlewares =[ReduxThunk]
// second arg initial state, apply in individual func
export default createStore(rootReducer, {}, applyMiddleware(...middlewares))
