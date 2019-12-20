import React from 'react';
import styled from 'styled-components';

import ContentLoader from 'react-content-loader';
import starshipSrc from '@/assets/img/starship.png';

const ImageStarship = styled.img`
  width: 155px;
`;

const ContainerStarship = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
`;

const StarshipLoader = () => (
  <ContainerStarship>
    <ImageStarship src={starshipSrc} />
    <ContentLoader
      height={160}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      style={{ width: '100%' }}>
      <circle cx="10" cy="20" r="8" />
      <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="50" r="8" />
      <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="80" r="8" />
      <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="110" r="8" />
      <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  </ContainerStarship>
);

export default StarshipLoader;
