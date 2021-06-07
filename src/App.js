import logo from './logo.svg';
import './App.css';
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import { StoreProvider } from "./store";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StoreProvider>
          <Sample1 />
          <Sample2 />
        </StoreProvider>
      </header>
    </div>
  );
}

export default App;
