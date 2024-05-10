import { useContext } from "react"
import { ContextLanguage } from "../context/context-language"

export const SelectLanguage = () => {

    // me traigo la funcion que setea los estados del contexto
    const { handleLanguage } = useContext(ContextLanguage)

    return (
        <select 
            name="language" 
            id="language"
            onChange={handleLanguage}
        >
            <option value="es-ES">Spanish</option>
            <option value="en-EN">English</option>
        </select>
    )
}