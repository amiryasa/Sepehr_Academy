import { Home } from "./Pages/Home";
import { Header } from "./Component/Header";
import { Footer } from './Component/Footer'
import "./App.css";
import "./Fonts/fonts.css";

import * as React from 'react';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <hr></hr>


      <Footer></Footer>


      

     
    </div>
  );
}

export default App;
