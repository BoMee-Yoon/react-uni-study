import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import ApiTest from './components/apiTest/apiTest.js';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Route path='/' exact={ true } component={ Home } />
        <Route path='/about' component={ About } />
      </header>
      <ApiTest />
    </div>
  );
}

export default App;
