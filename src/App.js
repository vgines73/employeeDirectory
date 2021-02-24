import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';  
import './App.css';  
import Nav from './Components/Nav/Nav';
import Wrapper from './Components/Wrapper/Wrapper';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      
      <Router>
        <div>
          <Nav />
          <Wrapper>
            <Route exact path="/" component={Home} />
          </Wrapper>
        </div>
      </Router>
    </div>
  );
}

export default App;
