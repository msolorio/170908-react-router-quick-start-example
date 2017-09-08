import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';

function App() {
  return (
    <Router>
      <div className="App">

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
      </ul>

        <main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </main>

      </div>
    </Router>
  );
}

export default App;
