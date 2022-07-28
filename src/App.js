import logo from './logo.svg';
import './App.css';
import BasicButtons from './Component/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <BasicButtons />
        
      </header>
    </div>
  );
}

export default App;
