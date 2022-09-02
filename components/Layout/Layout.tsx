import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'

type Props = {
    children: React.ReactNode;
};

const Layout:React.FC<Props>=({children})=> {
  return (
    <> 
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout