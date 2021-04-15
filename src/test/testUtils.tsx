import { ShallowWrapper, ReactWrapper }  from 'enzyme'
import { applyMiddleware, createStore } from 'redux'
import { middlewares } from '../configureStore'
import { rootReducer, RootState } from '../reducers'
import ReduxThunk from 'redux-thunk'

export const storeFactory = (initialState?:RootState | any ) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}



// return nodes with the given data-test attribute
export const findByTestAttr = (wrapper:ShallowWrapper|ReactWrapper, val:string) => {
  return wrapper.find(`[data-test="${val}"]`)
} 