import { useStore } from './store';
import { getApi } from './useApi';
import { useState } from 'react';

function Sample2() {
    const { state, dispatch } = useStore();
    const [outcome, setOutcome] = useState();
    const [message, setMessage] = useState('');

    const doOnClick = async (alterGlobalState) => {
      let res = await getApi();
      setOutcome(res[0]);
      setMessage(res[1]);
      alterGlobalState && dispatch({type: "set", set: res[0], message: res[1]});
    }

    return (
      <>
        <div style={{marginTop: '50px'}}>
          Sample 2 - state counter: {state.count} <br />
          Local state from api< br/>
          count: {outcome} <br />
          message: {message}
        </div>
        <button onClick={() => doOnClick(true)}>Call API (alter global state)</button>
        <button onClick={() => doOnClick(false)}>Call API (dont alter global state)</button>
      </>
    );
  }
  
  export default Sample2;
  