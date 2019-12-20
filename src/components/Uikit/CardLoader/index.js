import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={1}
    primaryColor="#fff"
    secondaryColor="#dedddd"
    style={{
      width: 262,
      height: 321,
      borderRadius: 8,
      margin: 50,
    }}
  />
);

export default MyLoader;
