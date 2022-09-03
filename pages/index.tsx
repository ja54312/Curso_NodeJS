import React, { useEffect, useState } from 'react';

export const getServerSideProps = async () => {
       const response = await fetch('https://curso-node-js-xi.vercel.app/api/avo')
       const {data:productList}: TAPIAvoResponse = await response.json()
    return{
        props: {
            productList,
        }
    }
}


const Home = ({productList}:{productList:TProduct[]}) => {

            //console.log(productList,'lista')
    return(
        <>  
            <div>Soy un home desde el server</div>
            {productList && productList.map((product)=>(
                <div>{product.name}</div>
            ))} 
        </>
    )
}

export default Home;