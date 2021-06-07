import { useStore } from './store';
import { useGetApi } from './useApi';
import { useState } from 'react';

function Sample2() {
    const { state } = useStore();
    const { execute } = useGetApi();
    const [outcome, setOutcome] = useState();

    const doOnClick = () => {
      execute().then(res => setOutcome(res));
    }

    return (
      <>
        <div>Sample 2 - state couneter: {state.count} - outcome: {outcome}</div>
        <button onClick={doOnClick}>Bring API data</button>
      </>
    );
  }
  
  export default Sample2;
  