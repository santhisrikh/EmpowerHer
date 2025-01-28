import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import AuthContextProvider from "./context/AuthContextProvider"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
// logged in user ir admin
// logged in =>user=>admin
// user=>vie=>rate 
// admin=>edit =>create =>delete 
