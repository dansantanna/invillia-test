import styled from 'styled-components';

import tokens from '../Tokens';
import TextBold from './Bold';
import TextDetail from './Detail';
import TextReduced from './Reduced';
import TextMedium from './Medium';

const Text = styled.span`
  font-family: ${tokens.get('type.regularFontFamily')};

  font-size: ${tokens.fontSize('base')};
  line-height: 22px;
  color: ${props => props.color || null};
  ${props => props.underlined && 'text-decoration: underline;'};

  ${props => props.medium && TextMedium}
  ${props => props.bold && TextBold}
  ${props => props.detail && TextDetail}
  ${props => props.reduced && TextReduced}
`;

export default Text;
