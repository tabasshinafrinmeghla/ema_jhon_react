import { useState } from 'react'


import './App.css'
import Header from './component/Header/Header'
import Shop from './component/Header/Shops/Shop/Shop'
import Products from './component/product/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        
        <Header></Header>
        <Shop></Shop>
        
      </div>
      
        
     
    </>
  )
}

export default App
