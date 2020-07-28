import React from 'react';
import Btneq from './filters/buttons/btneq';
import Products from '../context/Products'
import './app.css';

function App() {

  return (
    <Products>
      <div className="App">
        Hi React here
        <Btneq/>
      </div>
    </Products>
  );
}

export default App;