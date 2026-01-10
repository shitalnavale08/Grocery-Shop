import React, { lazy, Suspense } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Loader from './Components/Loader/Loader'
import Footer from './Components/Footer/Footer'
const NotFound = lazy(() => import('./Components/NotFound/NotFound')) 
const Home = lazy(() => import('./Pages/Home')) 
const CartPage = lazy(() => import('./Pages/Cart/CartPage')) 
const Checkout = lazy(() => import('./Pages/Checkout')) 



const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart'element={<CartPage/>}/>
      <Route path='/checkout'element={<Checkout/>}/>
      <Route path='/*'element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </Suspense>

  )
}

export default App