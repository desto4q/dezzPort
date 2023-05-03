import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Context from '../context/Context.jsx'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families:["Montserrat"]
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context child={<App/>}/>
  </React.StrictMode>,
)
