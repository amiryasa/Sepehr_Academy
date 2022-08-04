import { Home } from "./Pages/Home";
import { Header } from "./Component/Header";
import { ActionAreaCard } from "./Component/Card/Card";
import { ActionAreaCard2 } from "./Component/Card/Card2";
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

        
      <Grid container spacing={{ xs: 2, md: 4 , lg:0}} justifyContent="center" alignItems="center">

        <Grid item  xs={12} sm={6} md={3} lg={3}>
          <ActionAreaCard title="مشاوره" />
        </ Grid>

        <Grid item  xs={12} sm={6} md={3} lg={3}>
          <ActionAreaCard title="امتحان" />
        </ Grid>

        <Grid item  xs={12} sm={6} md={3} lg={3}>
          <ActionAreaCard title="مدرک معتبر" />
        </ Grid>

        <Grid item  xs={12} sm={6} md={3} lg={3}>
          <ActionAreaCard title="فرصت‌های شغلی" />
        </ Grid>

      </Grid>

      <hr></hr>

      <ActionAreaCard2 title="فرصت‌های شغلی" />
      

      <Footer></Footer>

    </div>
  );
}

export default App;
