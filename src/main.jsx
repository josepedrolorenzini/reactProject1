import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './App2.jsx'
import './index.css'
import  Header from './components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App2 />
    <Header />
    
  </React.StrictMode>,
)
