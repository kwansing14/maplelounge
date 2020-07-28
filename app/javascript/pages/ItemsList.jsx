import React, {useContext} from 'react';
import {StoreContext} from '../context/Products';

function ItemList() {
  const [state, dispatch] = useContext(StoreContext);

  console.log(state.items)
  let list = (state.items.map(item =>
      <div key={item.id}>
        <li>{item.id}</li>
        <li>{item.rank}</li>
        <li>{item.class}</li>
      </div>
    ))

  return (
    <div className="App">
      {list}
    </div>
  );
}

export default ItemList;