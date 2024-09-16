import React from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import CoinDetails from './Components/CoinDetails'
import Coins from './Components/Coins'
import Exchanges from './Components/Exchanges'
import Footer from './Components/Footer'
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/coins/:id' element = {<CoinDetails/>}/>
        <Route path='/coins' element = {<Coins/>}/>
        <Route path='/Exchanges' element = {<Exchanges/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App