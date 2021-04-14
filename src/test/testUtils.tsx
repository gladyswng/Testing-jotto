import { ShallowWrapper, ReactWrapper }  from 'enzyme'
import { applyMiddleware, createStore } from 'redux'
import { middlewares } from '../configureStore'
import { rootReducer, RootState } from '../reducers'

export const storeFactory = (initialState?:RootState| {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}



// return nodes with the given data-test attribute
export const findByTestAttr = (wrapper:ShallowWrapper|ReactWrapper, val:string) => {
  return wrapper.find(`[data-test="${val}"]`)
} 