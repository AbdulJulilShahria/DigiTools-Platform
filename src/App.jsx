
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Data from './components/Data'
import Footer from './components/Footer'
import GetStartedSteps from './components/GetStartedSteps'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import OptSection from './components/OptSection'
import PricingSection from './components/PricingSection'
import StatsSection from './components/StatsSection'


const getData = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

const dataPromise = getData()

function App() {
  const [activeTab, setActiveTab] = useState('product')
  const [carts,setCarts] = useState([])
 
  return (
    <>
      <NavBar carts={carts} />
      <HeroSection />
      <StatsSection />
      {activeTab === 'product' && <Data carts={carts} setCarts={setCarts} dataPromise={dataPromise} setActiveTab={setActiveTab} />}
      {activeTab === 'cart' && <Cart carts={carts} setCarts={setCarts} setActiveTab={setActiveTab} />}
      <GetStartedSteps />
      <PricingSection />
      <OptSection />
      <Footer />
    </>
  )
}

export default App
