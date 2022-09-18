import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AOS from "aos";
import { BrowserRouter } from "react-router-dom";
import OurRoutes from '../router'
import "./App.css";
import "./../assets/fonts/fonts.css";

function App() {
  AOS.init();

  const theme = createTheme({
    direction: "rtl",
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <BrowserRouter>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <OurRoutes />
          </div>
        </ThemeProvider>
      </CacheProvider>
    </BrowserRouter>
  );
}

export default App;