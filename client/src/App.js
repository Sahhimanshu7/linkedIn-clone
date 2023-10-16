import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = '/' element = {<Login />}/>
          <Route path='/home' element = {<div><Header /><Home /></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
