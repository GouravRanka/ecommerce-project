
import styles from '../../styles/Home.module.css'
import Login from '../login/Login';
import Image from "next/image";
import { useState,useEffect } from 'react';
const Header = () => {
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
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            // console.log("this is height",document.documentElement.scrollTop)
            if(document.documentElement.scrollTop>0){
                setChangeHeaderBackground(true)
            }
            else{
                setChangeHeaderBackground(false)
            }
        })
    })
    const [openLoginModal,setOpenLoginModal] = useState(false)
    const [changeHeaderBackground,setChangeHeaderBackground] = useState(false)
    return (
        <>
        <div  className={styles.container} >
<div
style={{backgroundColor:changeHeaderBackground ? 'white' : '',borderBottom:changeHeaderBackground?'1px solid #f1613a':''}}

className={styles.header} >
<ul className={styles.navigationItems}>
    {
        arr.map((ele,id)=>(
<li 
onClick={()=>{
    id==3 && 
    setOpenLoginModal(true)
}}
style={{color:changeHeaderBackground?'black':'white'}}  className={`${styles.listItem} ${id==3 ? styles.jobseeker:''} `} >{ele.title}</li>
        ))
    }
</ul>
</div>
<div className={styles.services} >
<div className={styles.logoDiv} >
<img className={styles.logo}  src="https://media-exp1.licdn.com/dms/image/C560BAQGm6WPuHSoHJQ/company-logo_200_200/0?e=2159024400&v=beta&t=UbPBg5R3RDg-uojrK_ABLjDpCP4Ve6xDpqQGgqIBso4" />
<div className={styles.letsdiscussDiv} >
<h1>
    <span style={{color:'#f1613a',fontSize:"2.7rem"}} >
        Your
    </span>
    <span style={{color:'white',fontSize:"2.7rem",marginLeft:"0.5rem"}}>
        Search For Hr Services Ends 
    </span>
</h1>
<p style={{color:"#fff",fontSize:"1.5rem"}} >
    Find jobs, Employement an Career Oppotunities
</p>
<button  className={styles.letsdiscuss} >
Shop Now
</button>
</div>

</div>
</div>
</div>

       {            openLoginModal &&
<Login openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} />}
        </>
    )
}
export default Header