import React from 'react'
import './App.css'

import { AuthProvider } from './auth'
import Routes from './routes'

function App() {
  return (
    <AuthProvider>
      <div>
        <Routes />
      </div>
    </AuthProvider>
  )
}

export default App
