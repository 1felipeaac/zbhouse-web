import {Route, Routes} from 'react-router-dom'
import {DashBoard} from '../Pages/Dashboard'
import {Reservar} from '../Pages/Reservar'
import {Pagamento} from '../Pages/Pagamento'
import {Disponibilidade} from '../Pages/Disponibilidade'
import { Detalhar } from '../Pages/Detalhar'
import { Login } from '../Pages/Login'
import React from 'react'

export function AppRoutes(){

    return (
        <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/detalhar/:id' element={<Detalhar/>}/>
            {/* <Route path='/detalhar' element={<Detalhar/>}/> */}
            <Route path='/reservar' element={<Reservar/>}/>
            <Route path='/pagamento/:id' element={<Pagamento/>}/>
            <Route path='/pagamento/' element={<Pagamento/>}/>
            <Route path='/disponibilidade' element={<Disponibilidade/>}/>
        </Routes>
    )
}