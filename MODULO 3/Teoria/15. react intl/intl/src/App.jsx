import { FormattedMessage } from 'react-intl'
import './App.css'
import { SelectLanguage } from './components/SelectLanguage'

export const App = () => {

  return (
    <>
      <SelectLanguage/>
      <h1>
        <FormattedMessage 
          id= "app.title"
          defaultMessage= "Hola Mundo"
        />
      </h1>
      <h2 className="red">
        <FormattedMessage 
          id= "app.subtitle"
          defaultMessage= "Aprende a usar react intl"
        />
      </h2>
      <p>
        <FormattedMessage 
          id= "app.text.change"
          defaultMessage= "Un saludo"
          values={{username : "Uma Thurman"}}
        />
      </p>
    </>
  )
}