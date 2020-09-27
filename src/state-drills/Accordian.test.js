import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordian from './Accordian';

const sectionsProp = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

describe(`Accordian Component`, () => {

      it('renders empty Accordian without errors', () => {
        const wrapper = shallow(<Accordian />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders empty Accordian by default', () => {
        const wrapper = shallow(<Accordian sections={sectionsProp}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders one Accordian section when clicked', () => {
        const wrapper = shallow(<Accordian sections={sectionsProp} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders only last section after multiple section clicks', () => {
        const wrapper = shallow(<Accordian sections={sectionsProp} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})


