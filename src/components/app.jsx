import React, { Component } from 'react';

import SimpleMap from './simple_map';
import FlatList from './flat_list';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
        </div>
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;
