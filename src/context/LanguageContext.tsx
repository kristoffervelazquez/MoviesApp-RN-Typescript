import React, { createContext, useState } from "react";
import { Lenguajes } from '../api/movieDB';



interface ContextProps {
    idioma: Lenguajes,
    changeLang: (value: Lenguajes) => void
}

export const languageContext = createContext({} as ContextProps);


export const LanguageContext = ({ children }: any) => {
    const [idioma, setIdioma] = useState<Lenguajes>('en-EN');


    const changeLang = (value: Lenguajes) => {
        setIdioma(value)
    }

    return (
        <languageContext.Provider value={{ idioma, changeLang }}>
            {children}
        </languageContext.Provider>
    )

}



export default LanguageContext;