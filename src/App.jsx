
import { Suspense, useState } from 'react';
import './App.css'
import AllProducts from './components/AllProducts/AllProducts';

function App() {
 
  const fetchdata = fetch ("/data.json").then (res => res.json ());
   const [prices, setPrices] = useState(0);

  return (
    <>
    <Suspense fallback = {<span className="loading loading-dots loading-lg"></span>}>
    <AllProducts fetchdata = {fetchdata} prices = {prices} setPrices = {setPrices}></AllProducts>
    </Suspense>
    </>
  )
}

export default App
