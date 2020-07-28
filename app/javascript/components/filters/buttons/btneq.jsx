import React, {useContext} from 'react';
import {StoreContext} from '../../../context/Products'

function Btneq() {
  const [state, dispatch] = useContext(StoreContext);

  let dispatchMango = () => dispatch({
    type:'addFruit',
    payload:'mango'
  });

  let dispatchBanana = () => dispatch({
    type:'addFruit',
    payload:'banana'
  });

  let filterMythic = () => dispatch ({
    type:'filterMythic',
    payload:'mythic'
  })

  return (
    <div>
      Btneq
      <button onClick={dispatchMango}>
        Unique
      </button>
      <button onClick={dispatchBanana}>
        Legendary
      </button>
      <button onClick={filterMythic}>Mythic</button>
      <button>Ancient</button>
    </div>
  );
}

export default Btneq;