import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import Navbar from 'components/Navbar/Navbar'
import allAvos from 'pages/api/avo'

//Pagina dinamica nextjs-necesita saber las paginas que se renderizaran
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://curso-node-js-xi.vercel.app/api/avo')
  const { data }: TAPIAvoResponse = await response.json()
  const paths = data.map(({ id }) => {
    params: {
      id
    }
  })

  return {
    paths,
    //cualquier pagina fuera de paths dara page404
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let id = params?.id as string
  const response = await fetch(
    `https://curso-node-js-xi.vercel.app/api/avo/${id}`
  )
  const product: TProduct = await response.json()
  return {
    props: {
      product,
    },
  }
}

// export const getServerSideProps = async ({params}}) => {
//   let id = params?.id as string
//   const response = await fetch(`https://curso-node-js-xi.vercel.app/api/avo/${id}`)
//   const {data:product}: TAPIAvoResponse = await response.json()
// return{
//    props: {
//        product,
//    }
// }
// }

const ProductItem = ({ product }: { product: TProduct }) => {
  console.log(product, 'data')
  return (
    <>
      <Navbar />
      {product == null ? null : (
        <div>Esta es la pagina de producto:{product.name}</div>
      )}
    </>
  )
}

export default ProductItem
