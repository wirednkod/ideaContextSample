import { useStore } from './store';

function Sample1() {
  const {state, dispatch} = useStore();
  return (
    <>
      <div>
        Global state from Context:<br />
        Count: {state.count} <br />
        Message: {state.message}
      </div>
      <div style={{display: 'block'}}>
        <button style={{float:'left'}} onClick={() => dispatch({type: "increment", message:"Incremented"})}>+</button>
        <button style={{float:'left'}} onClick={() => dispatch({type: "decrement", message: "Decremented"})}>-</button>
        <button style={{float:'left'}} onClick={() => dispatch({type: "reset", message: "Reset"})}>Reset</button>
      </div>
    </>
  );
}

export default Sample1;
