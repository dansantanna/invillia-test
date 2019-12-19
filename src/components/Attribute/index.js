import React from 'react';
import styled from 'styled-components';
import { Text } from '@Uikit';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 70px;
  max-height: 70px;

  margin: 10px;
`;

const IconAttribute = styled.img`
  width: 40px;
`;

const Attribute = ({ title, value, src }) => (
  <Container>
    <IconAttribute title={title} src={src} alt="attribute icon" />
    <Text reduced>{value}</Text>
  </Container>
);

export default Attribute;
