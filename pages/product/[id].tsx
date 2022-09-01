import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import Navbar from 'components/Navbar/Navbar'

const ProductItem = () => {

    const {query : {id},} = useRouter()
    const [product,setProduct] = useState<TProduct>(Object)

    useEffect(() => {
      if (id) {
        window
          .fetch(`/api/avo/${id}`)
          .then((res) => res.json())
          .then((data) => setProduct(data))
      }
    }, [id])
    //console.log(response,'data')
  return (
    <>
      <Navbar/>
      <div>Esta es la pagina de producto:{product.name}</div>
    </>
  )
}

export default ProductItem