import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const  reactElement = React.createElement(
  'a',
  { href:'https://www.google.com',target:'_blank'},
  'Click me for Google'
)
createRoot(document.getElementById('root')).render(
  // reactElement
  <StrictMode>
    <App />
  </StrictMode>
)
