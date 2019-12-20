import React from 'react';
import ContainerJedis from '@/components/ContainerJedis';
import { CardLoader } from '@Uikit';

const Loading = () => {
    return (<ContainerJedis >
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
    </ContainerJedis>)
}

export default Loading