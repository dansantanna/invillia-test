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

describe('[Component] Jedi', () => {
  it('Component Jedi without property show', () => {
    const wrapper = mount(<Starships />);
    expect(wrapper.find(Starships));
  });

  it('Component Jedi without links', () => {
    const wrapper = mount(<Starships show />);
    expect(wrapper.find(Starships));
  });

  it('Component Jedi with links', () => {
    const wrapper = mount(<Starships show links={links} />);
    expect(wrapper.find(Starships));
  });
});
