import React, { createContext, useContext, useReducer } from 'react';
const StoreContext = createContext();

const initialState = {
    count: 0,
    message: ''
};

const reducer = (state, action) => {
  switch(action.type) {
    case "set":
      return {
        count: action.set,
        message: 'call API'
      }
    case "increment":
      return {
        count: state.count + 1,
        message: action.message
      }
    case "decrement":
      return {
        count: state.count - 1,
        message: action.message
      }
      case "reset":
        return {
          count: 0,
          message: action.message
        }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);