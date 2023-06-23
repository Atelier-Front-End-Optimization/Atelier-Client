import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/products`).then((response) => {
      setProducts(response.data)
    })
  },[])
  return (
    <div>
      <p>I LIVE and env test</p><b></b>
      <p>{products}</p>
    </div>
  )
}

export default App
