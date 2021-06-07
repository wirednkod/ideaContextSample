import './App.css';
import { useEffect } from 'react';
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import { useStore } from './store';
import { useGetApi } from './useApi';

function App() {
  const { isLoading, executeCb } = useGetApi();
  const { dispatch } = useStore();

  useEffect(() => {
    executeCb().then(a => {
      dispatch({type: "set", set: a[0], message: a[1]});
    }); 
  }, [dispatch, executeCb])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Context, hooks and API fetch demo
        </p>
      </header>
      <div className="App-rest">
      {isLoading ? (<div>is Loading</div>) : (
        <>
          <Sample1 />
          <Sample2 />
        </>
      )}
      </div>
    </div>
  );
}

export default App;
