import { useEffect } from 'react';
import { useStore } from './store';
import { useGetApi } from './useApi';

function Sample1() {
  const { isLoading, executeCb } = useGetApi();
  const {state, dispatch} = useStore();

  useEffect(() => {
    executeCb().then(a => {
      dispatch({type: "set", set: a});
    }); 
  }, [dispatch, executeCb])
  
  return isLoading ? (
    <>
      <div>is Loading</div>
    </>
  ) : (
    <>
      <div>{state.count}</div>
      <div style={{display: 'block'}}>
        <button style={{float:'left'}} onClick={() => dispatch({type: "increment", message:"Incremented"})}>+</button>
        <button style={{float:'left'}} onClick={() => dispatch({type: "decrement", message: "Decremented"})}>-</button>
        <button style={{float:'left'}} onClick={() => dispatch({type: "reset", message: "Reset"})}>Reset</button>
      </div>
    </>
  );
}

export default Sample1;
