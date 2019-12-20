/* eslint-disable no-unused-vars */
import * as REACT from 'react';
import { shallow } from 'enzyme';
import Jedi from '@/components/Jedi';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(state => state),
  useDispatch: jest.fn(() => {}),
}));

const React = REACT.default;

describe('[Component] Jedi', () => {
  it('Component Jedi without properties', () => {
    shallow(<Jedi />);
  });
  it('Component Jedi without properties', () => {
    shallow(<Jedi />);
  });
});
