import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Formvalidation from '../Form/Formvalidation';
import Header from "../Header/Header";
function RouteComponent() {
  return (
    <div>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/login' element={<Formvalidation />} />
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default RouteComponent;