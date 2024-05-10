//importar libreria multidioma
import { IntlProvider } from 'react-intl'

// importar idiomas con libreria desde archivos lang/json
import Spanish from '../lang/es.json'
import English from '../lang/en.json'
import { createContext, useState } from 'react'

// creamos el contexto
export const ContextLanguage = createContext();

// funcion de cambio de idioma que se ejecuta en variable messages en el IntlProvider
const changeLang = () => {
    return navigator.language === "es-ES" ? Spanish : English
}

// proveedor del lenguaje
export const ProviderLanguage = (props) => {

    // creamos los estados locale y messages
    /** locale --> va a cambiar el lenguaje del navegador
     *  messages --> va a llamar a la funcion changeLang que activa la condicoon del navigator.language de locale
     */

    const [ locale, setLocale ] = useState(navigator.language);
    const [ messages, setMessages ] = useState(changeLang());

    // funcion que setea los cambios de idioma en esos estados
    /** setLocale --> setea en locale el valor del target del evento que selecciona el usuario
     *  setMessages --> setea en messages el idioma que va a ejecutar luego en la funcion changeLang
     */

    const handleLanguage = (e) => {
        setLocale(e.target.value)
        setMessages(e.target.value === "es-ES" ? Spanish : English)
    }

    /** la funcion del contexto devulve el provider del contexto que como valor tiene
     * el estado locale y la funcion que setea los camvios de idioma
     * 
     * Dentro de este contexto introducimos el componente IntlProvider para pasarle las children
     * de las props que son las diferentes pages/components a renderizar por App
     */

    return (
        <ContextLanguage.Provider value={{locale, handleLanguage}}>
            <IntlProvider locale={locale} messages={messages}>
                {props.children}
            </IntlProvider>
        </ContextLanguage.Provider>
    )
}
