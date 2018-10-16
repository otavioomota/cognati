import React, {Component} from 'react';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker/react';

class Localizacao extends Component {
  render(){
    return(
      <Map
        center={[-7.121, -34.843]}
        zoom={14}
        width={600}
        height={360}
        animate
        >
        <Marker anchor={[-7.121, -34.843]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      </Map>
    )
  }
}

export default Localizacao;
