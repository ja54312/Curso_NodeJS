import React, { useEffect, useState } from 'react';


const Home = () => {

    const [productList,setProductList] = useState<TProduct[]>([])

    useEffect(() => {
        const getProducts = async() => {
          const response = await fetch('api/avo')
          const data = await response.json()
          setProductList(data.data)
        }
        getProducts()
          .catch(console.error)  
      }, [])
            //console.log(productList[0],'lista')
    return(
        <>  
            <div>Soy un home</div>
            {productList && productList.map((product)=>(
                <div>{product.name}</div>
            ))} 
        </>
    )
}

export default Home;