import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Produtos from './Pages/Produtos';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/produtos" component={ Produtos } />
      </Switch>
    </div>
  );
}

export default App;
