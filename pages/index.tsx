import React, { useEffect, useState } from 'react'
//Pagina estatica
//Server un request cada vez que se necesite
export const getServerSideProps = async () => {
  const response = await fetch('https://curso-node-js-xi.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()
  return {
    props: {
      productList,
    },
  }
}
//Statico al hacer build se hace la llamada y se queda en archivos generados
// export const getStaticProps = async () => {
//     const response = await fetch('https://curso-node-js-xi.vercel.app/api/avo')
//     const {data:productList}: TAPIAvoResponse = await response.json()
//  return{
//      props: {
//          productList,
//      }
//  }
// }

const Home = ({ productList }: { productList: TProduct[] }) => {
  //console.log(productList,'lista')
  return (
    <>
      <div>Soy un home desde el server</div>
      {productList && productList.map((product) => <div>{product.name}</div>)}
    </>
  )
}

export default Home
