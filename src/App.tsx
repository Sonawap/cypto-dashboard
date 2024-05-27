import './App.css'
import AppProvider from './providers/AppProvider'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Views from './views'

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<Views />} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App
