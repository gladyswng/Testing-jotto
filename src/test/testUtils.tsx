import {ShallowWrapper, ReactWrapper}  from 'enzyme'
// return nodes with the given data-test attribute
export const findByTestAttr = (wrapper:ShallowWrapper|ReactWrapper, val:string) => {
  return wrapper.find(`[data-test="${val}"]`)
} 