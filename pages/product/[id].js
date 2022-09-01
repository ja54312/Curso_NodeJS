import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {

    const router = useRouter()
  return (
    <div>Esta es la pagina de producto:{router.query.id}</div>
  )
}

export default ProductItem