import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'
import AdminPage from './pages/adminPage'
import LoginPage from "./pages/loginPage"
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes path="/">
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin/*" element={<AdminPage/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
