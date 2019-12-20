import React from 'react';
import NukaCarousel from 'nuka-carousel';

import { ImgIcon } from '@Uikit';
import leftSrc from '@/assets/icons/left-chevron.svg';
import rightSrc from '@/assets/icons/right-chevron.svg';

const ImageControl = props => <ImgIcon style={{ cursor: 'pointer' }} {...props} />;

const LeftControl = ({ previousSlide, ...others }) => (
  <ImageControl src={leftSrc} onClick={previousSlide} {...others} />
);

const RightControl = ({ nextSlide, ...others }) => (
  <ImageControl src={rightSrc} onClick={nextSlide} {...others} />
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
