import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import GreetingsComponent from './components/GreetingIndex';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" exact component={GreetingsComponent} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;