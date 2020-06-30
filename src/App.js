import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Joke from './components/Joke';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='container mx-auto'>
          <Route path="/" exact component={Joke} />
        </div> 
      </div>
    </Router>
  );
}

export default App;
