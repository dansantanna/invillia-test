import React from 'react';
import styled from 'styled-components';

import { Title, Text } from '@Uikit';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1050;
  display: flex;
  align-items: baseline;
`;

const ModalBoxSetup = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: ${props => props.width || '32%'};
  height: ${props => props.height || null};
  z-index: 1;
  overflow: hidden;
  margin: 50px auto;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  min-height: 321px;

  clip-path: circle(100%);
  transition: all 0.9s;
`;

const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const ButtonText = styled.span`
  position: absolute;
  top: 0;
  cursor: pointer;
  right: 0;
  font-weight: 700;
  color: #555;
  padding: 10px 20px;
`;

const ModalSetup = ({ show, width, children, onClose, title, height }) => {
  if (!show) return null;
  const handleClickClose = evt => {
    evt.stopPropagation();
    onClose(evt);
  };

  return (
    <ModalWrapper>
      <ModalBoxSetup width={width} height={height}>
        <Text onClick={handleClickClose}>
          <ButtonText>x </ButtonText>
        </Text>
        <Title>{title}</Title>
        {children}
      </ModalBoxSetup>
      <ModalBg onClick={handleClickClose} />
    </ModalWrapper>
  );
};

export default ModalSetup;
