import React from 'react';
import Btneq from '../components/filters/buttons/btneq';
import Products from '../context/Products'
import './Home.css';

import ItemsList from './ItemsList'

function Home() {

  return (
    <Products>
      <div className="App">
        Home
        <Btneq/>
        <ItemsList/>
      </div>
    </Products>
  );
}

export default Home;