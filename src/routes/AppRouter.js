import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SearchResult from '../containers/SearchResult'
import "../styles.css"


const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/Ejercicio-search/' element={<SearchResult/>}/>
                <Route path='*' element={<Navigate to={'/Ejercicio-search/'}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter
