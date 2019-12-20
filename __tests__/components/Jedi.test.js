/* eslint-disable no-unused-vars */
import * as REACT from 'react';
import { mount } from 'enzyme';
import Jedi from '@/components/Jedi';
import Starships from '@/components/Starships';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(state => state),
  useDispatch: jest.fn(() => {}),
}));

const React = REACT.default;

const luke = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.co/api/planets/1/',
  films: [
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/',
    'https://swapi.co/api/films/7/',
  ],
  species: ['https://swapi.co/api/species/1/'],
  vehicles: ['https://swapi.co/api/vehicles/14/', 'https://swapi.co/api/vehicles/30/'],
  starships: ['https://swapi.co/api/starships/12/', 'https://swapi.co/api/starships/22/'],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.co/api/people/1/',
};

describe('[Component] Jedi', () => {
  it('Should  render component without send properties', () => {
    const defaultProps = {};
    const wrapper = mount(<Jedi {...defaultProps} />);
    expect(wrapper.find('Card')).toHaveLength(1);
  });

  it('Component Jedi with properties', () => {
    const defaultProps = { ...luke };
    const wrapper = mount(<Jedi {...defaultProps} />);
    expect(wrapper.find('Card')).toHaveLength(1);
  });
});
