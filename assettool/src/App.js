import logo from './logo.svg';
import './App.css';
import Table from "./components/Table"

function App() {
  return (
    <div className="App">
      <div>
        <Table url="https://data.energystar.gov/resource/p5st-her9.json"  appliance="fridge" />
      </div>
      <div>
        <Table url="https://data.energystar.gov/resource/t9u7-4d2j.json"  appliance="dryer" />
      </div>
    </div>
  );
}

export default App;
