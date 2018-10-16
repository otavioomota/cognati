
import React from 'react';
import SlideShow from 'react-image-show';


import image1 from './Images/image1.jpeg';
import image2 from './Images/image2.jpeg';
import image3 from './Images/image3.jpeg';
import image4 from './Images/image4.jpeg';

const urlArray = [
 image1,
 image2,
 image3,
 image4
]

class Carousel extends React.Component {


  render() {
    return (
      <div style={{margin:0}}>
        <SlideShow
          images={urlArray}
          width="750px"
          imagesWidth="700px"
          imagesHeight="450px"
          imagesHeightMobile="450px"
          thumbnailsWidth="920px"
          thumbnailsHeight="12vw"
          indicators
          // thumbnails
          fixedImagesHeight
          infinite
          arrows="false"
        />
      </div>
    );
  }

}

export default Carousel;
