
import React from 'react';

import SwiftSlider from 'react-swift-slider'

import image1 from './Images/image1.jpeg';
import image2 from './Images/image2.jpeg';
import image3 from './Images/image3.jpeg';
import image4 from './Images/image4.jpeg';


const urlArray =  [
  {
    'id':'1',
    'src':image1
  },
  {
    'id':'2',
    'src':image2
  },
  {
    'id':'3',
    'src':image3
  },
  {
    'id':'4',
    'src':image4
  }
]

class Carousel extends React.Component {



  render() {
  return (
    <SwiftSlider
      data={urlArray}
      enableNextAndPrev
      activeDotColor="rgba(25, 181, 254, 0.7)"
      />
  );
}

}

export default Carousel;
