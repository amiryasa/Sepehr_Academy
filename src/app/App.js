import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AOS from "aos";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GeneralContext } from "../providers/GeneralContext";
import OurRoutes from '../router'
import "./App.css";
import "./../assets/fonts/fonts.css";
import ScrollToTop from "../router/scrollTop";
import { getItem } from "../api/storage/storage";
import { getStudentById } from "../api/Core/Student_Manage";
import ConfirmPopUp from "../components/common/PopUpAction/ConfirmPopUp";

function App() {
  AOS.init();
  const userId = JSON.parse(getItem('id'))
  const ThemeMode = getItem('theme')
  const LanguageMode = getItem('language')
  const [language, setLanguage] = React.useState('fa')
  const [themePage, setThemePage] = React.useState('light')
  const [dataUser, setDataUser] = React.useState()
  const [confirm, setConfirm] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [backShop, setBackShop] = React.useState(false);
  const [compairCourse, setCompairCourse] = React.useState([]);
  const [shoppCourse, setShopCourse] = React.useState([])

  React.useEffect(() => {
    if (userId)
      getDataUser(userId)
  }, [userId])

  React.useEffect(() => {
    if (ThemeMode) {
      setThemePage(ThemeMode)
    }
    if (LanguageMode) {
      setLanguage(LanguageMode)
    }
  }, [])


  const getDataUser = async (id) => {
    let response = await getStudentById(id);
    setDataUser(response.data.result);
  }

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

  const onConfirmSetter = (
    msg,
    confirmCallback,
    rejectCallback,
  ) => setConfirm({ msg, confirmCallback, rejectCallback });


  return (
    <GeneralContext.Provider
      value={{
        language,
        setLanguage,
        themePage,
        setThemePage,
        dataUser,
        setDataUser,
        confirmPopupOpen: open,
        setConfirmPopupOpen: setOpen,
        confirmMsg: confirm.msg,
        confirmCallback: confirm.confirmCallback,
        rejectCallback: confirm.rejectCallback,
        onConfirmSetter,
        compairCourse,
        setCompairCourse,
        shoppCourse,
        setShopCourse,
        backShop,
        setBackShop
      }}>
      <BrowserRouter>
        <ScrollToTop />
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <div className={`App ${themePage}`}>
              <ConfirmPopUp />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                // hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                className={'toastFont'}
                transition={Zoom}
              />
              <OurRoutes />
            </div>
          </ThemeProvider>
        </CacheProvider>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;