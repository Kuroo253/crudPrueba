import React from 'react';
import './App.css';
import ItemList from './ItemList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD Pedro App</h1>
      </header>
      <ItemList />
    </div>
  );
};

export default App;