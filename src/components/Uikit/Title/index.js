import styled from 'styled-components';

import tokens from '../Tokens';

const TextTitle = styled.h1`
  font-family: ${tokens.get('type.regularFontFamily')};

  font-size: ${tokens.fontSize('base')};
  line-height: 22px;
  color: ${props => props.color || '#444'};

  font-size: 24px;
  line-height: 30px;
  text-align: center;
`;

export default TextTitle;
