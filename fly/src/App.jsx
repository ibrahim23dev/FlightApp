import React from 'react'
import NavBar from '../src/Components/NavBar/NavBar';
import Home from '../src/Components/Home/Home';
import Info  from '../src/Components/Info/Info';
import Search from '../src/Components/Search/Search';
import Travellers from '../src/Components/Travellers/Travellers';
import Support from '../src/Components/Support/Support';
import Lounge from '../src/Components/Lounge/Lounge';
import Subscription from '../src/Components/Subscription/Subsciption';
import Footer from '../src/Components/Footer/Footer';
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travellers />
      <Subscription/>
      <Footer/>
    </>
  )
}

export default App
