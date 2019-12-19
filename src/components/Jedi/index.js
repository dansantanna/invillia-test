import React from 'react';

import styled from 'styled-components';

import { Card, CardHeader, CardBody, Avatar, Title, Button, CardFooter, Text } from '@Uikit';
import ImageAvatar from '@/assets/img/avatar.svg';
import Attribute from '../Attribute';
import genderSrc from '@/assets/icons/gender.png';
import massSrc from '@/assets/icons/mass.png';
import heightSrc from '@/assets/icons/height.svg';

const ContainerAttributes = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Jedi = ({ name, gender, mass, height }) => (
  <Card>
    <CardHeader>
      <Avatar src={ImageAvatar} />
    </CardHeader>
    <CardBody>
      <Title>{name}</Title>
      <ContainerAttributes>
        <Attribute title="Gender" value={gender} src={genderSrc} />
        <Attribute title="Mass" value={`${mass}kg`} src={massSrc} />
        <Attribute title="Height" value={`${height}cm`} src={heightSrc} />
      </ContainerAttributes>
    </CardBody>
    <CardFooter>
      <Button link fullWidth>
        <Text>See Starships</Text>
      </Button>
    </CardFooter>
  </Card>
);

export default Jedi;
