import {Routes, Route} from 'react-router-dom'
import { Login } from '../Pages/Login'
import React from 'react'

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
    )
}