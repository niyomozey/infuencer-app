import logo from './logo.svg';
import { Header } from './components/Header';
import { Influencers } from './components/Influencers';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Influencers/>
    </div>
  );
}

export default App;
