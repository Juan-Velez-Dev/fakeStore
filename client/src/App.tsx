import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { setProductsList } from './redux/features/productsSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import HomePage from './components/Home/HomePage'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('http://localhost:3001/products')
            dispatch(setProductsList(response.data))
        }
        fetchData();
    }, [])

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
