import React, {createContext, useReducer} from 'react';
export const StoreContext = createContext({})

const initialState = {
    products:[],
    items: [
      { id: '1',
        rank: 'mythic',
        choice: 'weapon',
        class: 'wand',
        type: 'jaihin',
        emblem: 'yes',
        price: 10000000
      },
      { id:'2',
        rank: 'mythic',
        choice: 'weapon',
        class: 'cane',
        type: 'utgard',
        emblem: 'yes',
        price: 2000000
      },
      { id:'3',
        rank: 'legend',
        choice: 'weapon',
        class: 'cane',
        type: 'utgard',
        emblem: 'yes',
        price: 4000000
      },
      { id:'4',
        rank: 'unique',
        choice: 'weapon',
        class: 'cane',
        type: 'utgard',
        emblem: 'yes',
        price: 5000000
      }
    ],
    fruits:[],
    filtered:[],
};

function reducer(state, action) {
  switch (action.type) {
    case 'addFruit':
      console.log(state.fruits)
      console.log(state)
      let updatedfruits;
      updatedfruits = [...state.fruits, action.payload]
      return {...state, fruits: updatedfruits}
    case 'addVegatable':
      return {vegetables: [...state.vegetables, action.payload]}
    case 'addProduct':
      console.log("adding product")
      console.log(state)
      let updatedproducts;
      return {...state, products: updatedproducts}
    case 'filterMythic':
      let temp = [];
      console.log(action.payload)
      for(let i=0; i<state.items.length; i++) {
        if(state.items[i].rank == action.payload) {
          temp.push(state.items[i])
        }
      }
      console.log(temp)
      return {...state, filtered: temp}
    default:
      throw new Error('Action type must be defined');
  }
}

const Store = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  return(
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store;