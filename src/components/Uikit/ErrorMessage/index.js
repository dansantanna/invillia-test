import React from 'react';
import styled from 'styled-components';

import { Modal, Text, Button } from '@Uikit';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-around;
`;

const ErrorMessage = ({ message, onClose }) => {
  const [show] = React.useState(true);
  return (
    <Modal width="300px" height="100px" show={show} onClose={onClose} title="Oooops">
      <Container>
        <Text>{message}</Text>
        <Button onClick={() => onClose()}>Ok</Button>
      </Container>
    </Modal>
  );
};

export default ErrorMessage;
