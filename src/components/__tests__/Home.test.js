import React from 'react'
import { shallow } from 'enzyme'
import Home from '../Home'

it('Check Home', () => {
  const wrapper = shallow(<Home />)

  expect(wrapper.find('.home')).toHaveLength(1)
})
