import { createContext, useContext } from "react";


export const GeneralContext = createContext({
    language: 'fa',
    setLanguage: (language) => console.warn("no user provider"),
    themePage: 'light',
    setThemePage: (themePage) => console.warn('no mode page'),
    dataUser: {},
    setDataUser: (dataUser) => console.warn('no user')
});

export const useGeneralContext = () => useContext(GeneralContext);
