import React from 'react';
import NukaCarousel from 'nuka-carousel';

import { ImgIcon } from '@Uikit';
import LeftSrc from '@/assets/icons/leftChevron.svg';
import RightSrc from '@/assets/icons/rightChevron.svg';

const ImageControl = props => <ImgIcon style={{ cursor: 'pointer' }} {...props} />;
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
