import { useEffect, useState } from "react"
import Banner from "../components/banner/Banner"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Products from "../components/products/Products"
import Slider from "../components/slider/Slider"
// import Toastify from "../components/toastify/Toastify"
import styles from '../styles/Home.module.css'
import twitter from '.././public/twitter.png'
import facebook from '.././public/facebook.png'
import linkedin from '.././public/linkedin.png'
import Image from "next/image"
const home = () => {
const [openToastify,setOpenToastify] = useState(false)
const services = [
    {
        title:"Recruitement Solutions",
        description:"identifying and recuiting in the poer whi make a disderence toyou r coma identifying and recuiting in the poer whi make a disderence toyou r coma"
    },
    {
        title:"Recruitement Solutions",
        description:"identifying and recuiting in the poer whi make a disderence toyou r coma identifying and recuiting in the poer whi make a disderence toyou r coma"
    },
    {
        title:"Recruitement Solutions",
        description:"identifying and recuiting in the poer whi make a disderence toyou r coma identifying and recuiting in the poer whi make a disderence toyou r coma"
    },
    {
        title:"Recruitement Solutions",
        description:"identifying and recuiting in the poer whi make a disderence toyou r coma identifying and recuiting in the poer whi make a disderence toyou r coma"
    },
]
const arr = [
    {
        title:"Home"
    },
    {
        title:"About us"
    },
    {
        title: "Our services"
    },
    {
        title: "Job seeker"
    },
    {
        title: "Submit CV"
    },
    {
        title: "Contact us"
    }
]
const jobs = [
    {
    
        experience:'4-12 years',
        location:"alwar, Rajasthan",
        CTC:"6 lpa"
    },
    {
    
        experience:'4-12 years',
        location:"alwar, Rajasthan",
        CTC:"6 lpa"
    },
    {
    
        experience:'4-12 years',
        location:"alwar, Rajasthan",
        CTC:"6 lpa"
    },
    {
    
        experience:'4-12 years',
        location:"alwar, Rajasthan",
        CTC:"6 lpa"
    },

]
const [changeHeaderBackground,setChangeHeaderBackground] = useState(false)

    return (
        <>
        <div className={styles.socialmediaicons} >
            <div>
        <Image  src={twitter} width={55} height={55}  />
        </div>
            <div style={{backgroundColor:'white',width:"55px",height:"55px",padding:0}}>
        <Image  src={facebook} width={55} height={55}  />
        </div>
            <div style={{marginTop:"2px"}}  >
        <Image  src={linkedin} width={55} height={55}  />
        </div>
    
        </div>
{/* <div  className={styles.container} >
<div
style={{backgroundColor:changeHeaderBackground ? 'white' : '',borderBottom:changeHeaderBackground?'1px solid #f1613a':''}}

className={styles.header} >
<ul className={styles.navigationItems}>
    {
        arr.map((ele,id)=>(
<li  style={{color:changeHeaderBackground?'black':'white'}}  className={`${styles.listItem} ${id==3 ? styles.jobseeker:''} `} >{ele.title}</li>
        ))
    }
</ul>
</div>
<div className={styles.services} >
<div className={styles.logoDiv} >
<img className={styles.logo}  src="https://media-exp1.licdn.com/dms/image/C560BAQGm6WPuHSoHJQ/company-logo_200_200/0?e=2159024400&v=beta&t=UbPBg5R3RDg-uojrK_ABLjDpCP4Ve6xDpqQGgqIBso4" /> */}
<Header/>

{/* </div>
</div>
</div> */}

{/* <Slider/> */}
{/* our services div  */}
<div className={styles.servicecontainer} >
<div  className={styles.ourserviceheading} >
<p>
   Top products 
</p>
<div className={styles.horizontaldiv} >

</div>
</div>
</div>

        </>
        
    )
}
export default home