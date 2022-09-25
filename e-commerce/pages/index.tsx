import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import Products from '../components/products/Products'
import Header from '../components/header/Header'
import styles from '../styles/Home.module.css'
import SiteHome from './Home'

const Home: NextPage = () => {
  return (
    <>
 {/* <Header/> */}
 <div style={{marginTop:"6.2rem"}} >
 <SiteHome/>
 <Products title='Top Products' />
 <Footer/>
 </div>
 {/* <Footer/> */}
 </>
  )
}

export default Home
