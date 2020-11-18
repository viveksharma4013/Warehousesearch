import { Route, Switch } from 'react-router';
import './App.css';
import Home from './home/Home';
import WareHouse from './warehouseDetail/WareHouse';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/warehouse" component={WareHouse}></Route>
      </Switch>
    </div>
  );
}

export default App;
