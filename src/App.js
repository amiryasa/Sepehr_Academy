import { Home } from "./Pages/Home";
import { Header } from "./Component/Header";
import { ActionAreaCard } from "./Component/Card/Card";
import "./App.css";
import "./Fonts/fonts.css";

import * as React from 'react';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

        
      <Grid container spacing={-0} justifyContent="center" alignItems="center">

        <Grid item  xs={12} sm={6} md={2} lg={2}>
          <ActionAreaCard title="مشاوره" />
        </ Grid>

        <Grid item  xs={12} sm={6} md={2} lg={2}>
          <ActionAreaCard title="امتحان" />
        </ Grid>

        <Grid item  xs={12} sm={6} md={2} lg={2}>
          <ActionAreaCard title="مدرک معتبر" />
        </ Grid>

        <Grid item  xs={12} sm={6} md={2} lg={2}>
          <ActionAreaCard title="فرصت‌های شغلی" />
        </ Grid>

      </Grid>

    </div>
  );
}

export default App;
