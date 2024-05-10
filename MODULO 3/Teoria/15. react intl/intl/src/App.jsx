import { FormattedMessage } from 'react-intl'
import './App.css'
import { SelectLanguage } from './components/SelectLanguage'

export const App = () => {

  return (
    <div className="container-fluid d-flex flex-column">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      <h1 className="fw-light">Hola Mundo</h1>
      <SelectLanguage/>
      <h2>
        <FormattedMessage 
          id= "app.title"
          defaultMessage= "Hola Mundo"
        />
      </h2>
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
    </div>
  )
}