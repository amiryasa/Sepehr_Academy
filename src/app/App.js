import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AOS from "aos";
import { BrowserRouter } from "react-router-dom";
import { GeneralContext } from "../providers/GeneralContext";
import OurRoutes from '../router'
import "./App.css";
import "./../assets/fonts/fonts.css";
import ScrollToTop from "../router/scrollTop";

function App() {
  AOS.init();
  const [language, setLanguage] = React.useState('fa')
  const [themePage, setThemePage] = React.useState('light')


  const theme = createTheme({
    direction: language === 'fa' ? "rtl" : 'ltr',
    palette: {
      mode: themePage,
    },
  });

  const cacheRtl = createCache({
    key: language === 'fa' ? "muirtl" : "muiltr",
    stylisPlugins: language === 'fa' && [prefixer, rtlPlugin],
  });

  return (
    <GeneralContext.Provider value={{ language, setLanguage, themePage, setThemePage }}>
      <BrowserRouter>
        <ScrollToTop />
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <div className={`App ${themePage}`}>
              <OurRoutes />
            </div>
          </ThemeProvider>
        </CacheProvider>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;