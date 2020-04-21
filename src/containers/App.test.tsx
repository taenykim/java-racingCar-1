import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { mount, shallow } from 'enzyme'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

describe('렌더링', () => {
  it('성공적으로 렌더링되어야 합니다.', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toBe(1)
  })
})

// 여기는 UI(엘리먼트들) 테스트 용
