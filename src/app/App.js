import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { Home } from "../screens/home/Home";
import { Header } from "./../components/Header";
import { Footer } from './../components/Footer';

import "./App.css";
import "./../assets/fonts/fonts.css";
import { Login } from '../components/Login/Login';
import { Register } from '../components/Register/Register';
import { ForgotPass } from '../components/ForgotPass/ForgotPass';


function App() {
  AOS.init();
  
  const theme = createTheme({
    direction: 'rtl',
  });

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Register />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
