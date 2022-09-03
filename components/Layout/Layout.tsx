import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
//import styles from './layout.module.css' <div className={styles.container}> 

type Props = {
    children: React.ReactNode;
};

const Layout:React.FC<Props>=({children})=> {
  return (
    <div className='container'> 
        <Navbar/>
        {children}
        <Footer/>
        <style jsx>{`
          .container{
            background:salmon;
          }
        `}</style>
    </div>
  )
}

export default Layout