import React from 'react';
import ReactDOM from 'react-dom';
import GreetingsComponent from './components/GreetingIndex';

function App() {
  return (
      <GreetingsComponent/>
     );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
