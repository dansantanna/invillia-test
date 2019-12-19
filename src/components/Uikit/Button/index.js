import styled from 'styled-components';

import Link from './Link';
import tokens from '../Tokens';

const Button = styled.button`
  font-family: ${tokens.get('type.regularFontFamily')};

  font-size: ${tokens.fontSize('base')};
  line-height: 22px;
  color: ${props => props.color || null};

  ${props => props.link && Link}
  ${props => props.fullWidth && 'width: 100%;'}
`;

export default Button;
