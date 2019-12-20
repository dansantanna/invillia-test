import styled from 'styled-components';

const ImgIcon = styled.img`
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
  margin: 0 5px;
`;

export default ImgIcon;
