import Herogrid from './components/herogrid';
import './App.css';
import Nav from './components/navbar';
import Cards from './components/cards';
import Game from './components/game/game';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Herogrid/>
      <Game/>

      
    </div>
  );
}

export default App;
