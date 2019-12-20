import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Text, ImgIcon, ErrorMessage } from '@Uikit';
import starshipSrc from '@/assets/img/starship.png';
import hashSrc from '@/assets/icons/hash.svg';
import { fetchStarship } from '@/redux/modules/starships';
import StarshipLoader from './StarshipLoader';

const ImageStarship = styled.img`
  width: 155px;
`;

const ContainerStarship = styled.div`
  display: flex;
  padding: 50px;
`;

const PropertiesStarship = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
`;

const ContainerAttribute = styled.div`
  display: flex;
  align-items: center;
`;

const Attribute = ({ value, title }) => (
  <ContainerAttribute>
    <ImgIcon size={20} title={title} src={hashSrc} />
    <Text>{value}</Text>
  </ContainerAttribute>
);

const Starship = ({ link }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const starship = useSelector(state => state.starships[link]);

  React.useEffect(() => {
    const getStarship = async () => {
      setLoading(true);
      await dispatch(fetchStarship(link));
      setLoading(false);
    };
    if (!starship) getStarship();
  }, [link, dispatch, starship]);

  if (loading) return <StarshipLoader />;
  if (!starship) return null;

  return (
    <ContainerStarship>
      <ImageStarship src={starshipSrc} />
      <PropertiesStarship>
        <Attribute title="Name" value={starship.name} />
        <Attribute title="Model" value={starship.model} />
        <Attribute title="Class" value={starship.starship_class} />
        <Attribute title="Manufacturer" value={starship.manufacturer} />
      </PropertiesStarship>
    </ContainerStarship>
  );
};

export default Starship;
