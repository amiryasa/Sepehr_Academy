import { createContext, useContext } from "react";


export const GeneralContext = createContext({
    language: 'fa',
    setLanguage: (language) => console.warn("no user provider")
});

export const useGeneralContext = () => useContext(GeneralContext);
