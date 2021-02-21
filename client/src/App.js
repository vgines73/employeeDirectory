import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Wrapper from './Components/Wrapper/Wrapper';
import Directory from './Pages/Directory';
import Search from './Pages/Search';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Router>
        <div>
          <Nav />
          <Wrapper>
            <Route exact path="/" component={Directory} />
            <Route exact path="/directory" component={Directory} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
        </div>
      </Router>
    </div>
  );
}

export default App;
