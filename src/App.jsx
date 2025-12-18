import React, { lazy, Suspense } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './Component/Header'
 import Loader from './Component/Loader'
import Footer from './Component/Footer'
import NotFound from './Component/NotFound'
const Home = lazy(() => import('./Pages/Home'))
const Cart = lazy(() => import('./Pages/Cart'))
const Checkout = lazy(() => import('./Pages/Checkout'))


const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/cart'element={<Cart/>}/>
      <Route path='/checkout'element={<Checkout/>}/>
      <Route path='/*'element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </Suspense>

  )
}

export default App