import React from 'react';
import NukaCarousel from 'nuka-carousel';

import { ImgIcon } from '@Uikit';
import LeftSrc from '@/assets/icons/left-chevron.svg';
import RightSrc from '@/assets/icons/right-chevron.svg';

const ImageControl = props => (
  <ImgIcon style={{ cursor: 'pointer', marginBottom: '15vh' }} {...props} />
);
const LeftControl = ({ previousSlide, ...others }) => (
  <ImageControl src={LeftSrc} onClick={previousSlide} {...others} />
);

const RightControl = ({ nextSlide, ...others }) => (
  <ImageControl src={RightSrc} onClick={nextSlide} {...others} />
);

const Carousel = props => (
  <NukaCarousel
    renderCenterLeftControls={LeftControl}
    renderCenterRightControls={RightControl}
    wrapAround
    {...props}
  />
);

export default Carousel;
