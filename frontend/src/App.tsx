import { BrowserRouter, Link, NavLink } from 'react-router-dom'
import './App.css'
import Form from './components/Form'
import { ServicesProvider } from './contexts/ServiceContext'
import { Router } from './router/Router'
import { ApiService } from './services/ApiService'

function App() {
  return (
    <ServicesProvider value={{ apiService: ApiService }}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h2>Studio24</h2>
            <div className="menu">
              <NavLink to="/booking">Booking</NavLink>
              <NavLink to="/">List</NavLink>
            </div>
          </header>
          <Router />
        </div>
      </BrowserRouter>
    </ServicesProvider>
  )
}

export default App
