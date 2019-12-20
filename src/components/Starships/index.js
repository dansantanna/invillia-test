import React from 'react';

import { Modal, Carousel, ErrorMessage } from '@Uikit';
import Starship from './Starship';

const Starships = ({ show, onClose, links }) => {
  if (!show) return null;
  if (!links.length)
    return <ErrorMessage onClose={onClose} message="This character does not have a starship :(" />;

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
