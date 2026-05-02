import { RouterProvider } from 'react-router-dom'
import routerApp from './routes/routerApp.jsx'
import './App.css'

function App() {
  return (
    <RouterProvider router={routerApp} />
  )
}

export default App
