import React from 'react'
import ReactDOM from 'react-dom/client'
import Input from './components/Input'
import Display from './components/Display'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Input />
    <Display />
  </React.StrictMode>,
)
