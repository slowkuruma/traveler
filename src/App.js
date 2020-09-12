import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';



const App = () => {
  return <Router>
    <Router path="/">
      <Users />


    </Router>
  </Router>
}







export default App;
