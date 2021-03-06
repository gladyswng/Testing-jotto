import React from 'react'
import { shallow } from 'enzyme'
import Congrats from './Congrats'
import { findByTestAttr } from '../test/testUtils'


// factory function 
const setup = (props={}) => {
  // take whatever in props and make it to key value pairs prop
  // { success: true} => <Congrats success=true />
  return shallow(<Congrats {...props}/>)
}



test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

test('reders no text when success prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
})

test('renders non-empty congrats message when success prop is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttr(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)

})
