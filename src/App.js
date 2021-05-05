// import './App.css';
// import qrcode from 'qrcode';
// import React, { useRef, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Inicio />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
