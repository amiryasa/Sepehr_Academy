import { createContext, useContext } from "react";


export const GeneralContext = createContext({
    language: 'fa',
    setLanguage: (language) => console.warn("no user provider"),
    themePage: 'light',
    setThemePage: (themePage) => console.warn('no mode page'),
    dataUser: {},
    setDataUser: (dataUser) => console.warn('no user'),
    confirmMsg: null,
    confirmPopupOpen: false,
    setConfirmPopupOpen: () => { },
    confirmCallback: () => { },
    rejectCallback: () => { },
    onConfirmSetter: (msg, confirmCallback, rejectCallback) => { },
    compairCourse: [],
    setCompairCourse: (compairCourse) => console.warn('no course to compair'),
    shoppCourse: [],
    setShopSourse: (shoppCourse) => console.warn(' no course to shop')
});

