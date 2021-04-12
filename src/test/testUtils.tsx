import * as Enzyme from 'enzyme'
// return nodes with the given data-test attribute
export const findByTestAttr = (wrapper:Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>, val:string) => {
  return wrapper.find(`[data-test="${val}"]`)
} 