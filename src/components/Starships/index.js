import React from 'react';

import { Modal, Carousel } from '@Uikit';
import Starship from './Starship';

const Starships = ({ show, onClose, links }) => {
  if (!show || !links.length) return null;

  return (
    <Modal show={show} width="650px" height="400px" title="Starships" onClose={onClose}>
      <Carousel withoutControls={links.length < 2}>
        {links.map(el => (
          <Starship key={el} link={el} />
        ))}
      </Carousel>
    </Modal>
  );
};

Starships.defaultProps = {
  setShow: () => {},
  links: [],
};

export default Starships;
