import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 262px;
  height: 321px;
  margin: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
Card.displayName = 'Card';

export default Card;
