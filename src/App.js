import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import { Home } from "./Pages/Home";
import { CourseDetail } from './Pages/CourseDetail';
import { Header } from "./Component/Header";
import { Footer } from './Component/Footer';

import "./App.css";
import "./Fonts/fonts.css";


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
          <Header />
          {/* <Home /> */}
          <CourseDetail />
          <Footer />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
