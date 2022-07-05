import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Main.css'
import { Home } from '../Pages/Home'
import { QuienesSomosPage } from '../Pages/QuienesSomosPage'
import { ExcursionesPage } from '../Pages/ExcursionesPage'
import { CombosPage } from '../Pages/CombosPage'
import { ServiciosPage } from '../Pages/ServiciosPage'
import { TestimoniosPage } from '../Pages/TestimoniosPage'
import { ContactoPage } from '../Pages/ContactoPage'
import { CityTourPage } from '../Pages/CityTourPage'
import { BodegasPage } from '../Pages/BodegasPage'
import { VillavicencioPage } from '../Pages/VillavicencioPage'
import { ValleDeUcoPage } from '../Pages/ValleDeUcoPage'
import { CordonDelPlataPage } from '../Pages/CordonDelPlataPage'
import { AltaMontaniaPage } from '../Pages/AltaMontaniaPage'

function Main () {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quienes-somos' element={<QuienesSomosPage />} />
        <Route path='/excursiones' element={<ExcursionesPage />} />
        <Route path='/combos' element={<CombosPage />} />
        <Route path='/servicios' element={<ServiciosPage />} />
        <Route path='/testimonios' element={<TestimoniosPage />} />
        <Route path='/contacto' element={<ContactoPage />} />
        <Route path='/excursiones/city-tour' element={<CityTourPage />} />
        <Route path='/excursiones/bodegas' element={<BodegasPage />} />
        <Route
          path='/excursiones/villavicencio'
          element={<VillavicencioPage />}
        />
        <Route path='/excursiones/valle-de-uco' element={<ValleDeUcoPage />} />
        <Route path='/excursiones/cordon-del-plata' element={<CordonDelPlataPage />} />
        <Route path='/excursiones/alta-montania' element={<AltaMontaniaPage />} />
      </Routes>
    </React.Fragment>
  )
}

export { Main }
