import styled from 'styled-components';

import Link from './Link';
import tokens from '../Tokens';

const Button = styled.button`
  font-family: ${tokens.get('type.regularFontFamily')};

  font-size: ${tokens.fontSize('base')};
  line-height: 22px;
  color: ${props => props.color || null};

  color: #fff;
  background-color: #007bff;
  border-color: #007bff;

  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;

  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s;

  ${props => props.link && Link}
  ${props => props.fullWidth && 'width: 100%;'}
`;

export default Button;
