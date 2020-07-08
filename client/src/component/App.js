import React from 'react';
import TopNav from './TopNav';
import MoviesBody from './MoviesBody';


function App() {
  return (
    <div>
      <TopNav />
      
      <div className="container">
      <MoviesBody />
      </div>
    </div>
  );
 }

export default App;
