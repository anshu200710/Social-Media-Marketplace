import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace.jsx'
import MyListings from './pages/MyListings'
import ListingDetails from './pages/ListingDetails'
import ManageListing from './pages/ManageListing'
import Massages from './pages/Massages'
import MyOrders from './pages/MyOrders'
import Loading from './pages/Loading'
import Navbar from './components/Navbar.jsx'
import Admin from './pages/Admin'

const App = () => {
  const {pathname} = useLocation();

  return (
    <div>
      {!pathname.includes('/admin') && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market-place" element={<MarketPlace />} />
        <Route path="/my-listings" element={<MyListings/>} />
        <Route path="/listings/:listingId" element={<ListingDetails />} />
        <Route path="/create-listing" element={<ManageListing />} />
        <Route path="/edit-listing/:listingId" element={<ManageListing />} />
        <Route path="/messages" element={<Massages />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
