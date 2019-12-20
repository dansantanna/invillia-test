import React from 'react';
import ContainerJedis from '@/components/ContainerJedis';
import { CardLoader } from '@Uikit';

const Loading = () => (
  <ContainerJedis style={{ width: '100%', height: 400, overflow: 'hidden' }}>
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
  </ContainerJedis>
);

export default Loading;
