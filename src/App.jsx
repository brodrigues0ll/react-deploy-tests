import './App.css';
import { Switch as Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Produtos from './Pages/Produtos';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/produtos" element={< Produtos />} />
      </Routes>
    </div>
  );
}

export default App;
