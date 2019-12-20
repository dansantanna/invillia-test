/* eslint-disable no-unused-vars */
import * as REACT from 'react';
import { mount } from 'enzyme';
import Starships from '@/components/Starships';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(state => state),
  useDispatch: jest.fn(() => {}),
}));

const React = REACT.default;

const links = [
  'https://swapi.co/api/starships/12/',
  'https://swapi.co/api/starships/13/',
  'https://swapi.co/api/starships/14/',
  'https://swapi.co/api/starships/15/',
  'https://swapi.co/api/starships/16/',
  'https://swapi.co/api/starships/17/',
];

describe('[Component] Starships', () => {
  it("Should don't render component when show property is false", () => {
    const defaultProps = {
      links: [],
      show: false,
    };
    const wrapper = mount(<Starships {...defaultProps} />);
    expect(wrapper.html()).toBeNull();
  });

  it("Should return ErrorMessage when don't have links", () => {
    const defaultProps = {
      links: [],
      show: true,
    };
    const wrapper = mount(<Starships {...defaultProps} />);
    expect(wrapper.find('ErrorMessage')).toHaveLength(1);
  });

  it('Should render Modal when component has links', () => {
    const defaultProps = {
      links,
      show: true,
    };
    const wrapper = mount(<Starships {...defaultProps} />);
    expect(wrapper.find('Modal')).toHaveLength(1);
  });
});
