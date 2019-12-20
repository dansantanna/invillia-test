import React from 'react';
import styled from 'styled-components';

import { Modal, Text, Button } from '@Uikit';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-around;
`;

const ErrorMessage = ({ message, onClose, show }) => (
  <Modal width="300px" height="250px" show={show} onClose={onClose} title="Oooops">
    <Container>
      <Text>{message}</Text>
      <Button
        style={{ margin: '30px 0' }}
        onClick={evt => {
          evt.stopPropagation();
          onClose();
        }}>
        Tudo bem
      </Button>
    </Container>
  </Modal>
);

ErrorMessage.defaultProps = { show: true };

export default ErrorMessage;
