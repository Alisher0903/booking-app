import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OrderLanding from './pages/app/orderLandingPage/index'
import Hotels from './pages/app/orderLandingPage/hotels'
import Restuarant from './pages/app/orderLandingPage/restuarants'
import Cafe from './pages/app/orderLandingPage/cafe'
import LocationMap from './pages/app/orderLandingPage/location-map'
import DeparutreTame from './pages/app/orderLandingPage/departure-tame'
import ComplateTaxiBooking from './pages/app/orderLandingPage/complate-taxi-booking'
import Details from './pages/app/orderLandingPage/details'

const App = () => {
  return (
    <Routes>
      <Route path='/' Component={OrderLanding} />
      <Route path='/order-landing page/hotels' Component={Hotels} />
      <Route path='/order-landing page/restuarant' Component={Restuarant} />
      <Route path='/order-landing page/cafe' Component={Cafe} />
      <Route path='/departure-tame' Component={DeparutreTame} />
      <Route path='/complate taxi-booking' Component={ComplateTaxiBooking} />
      <Route path='/details' Component={Details} />
      <Route path='/map-page' Component={LocationMap} />
    </Routes>
  )
}

export default App