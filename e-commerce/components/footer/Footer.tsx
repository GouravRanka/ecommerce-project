
import styles from '../../styles/Footer.module.css'
const Footer = ()=>{
    const footerData = [
     [
        "Contact us",
        "Who we are",
        "customer service",
        "fsdkl"
     ],
     [
        "customer service",
        "fsdkl"
     ],
     [
        "connect with us"
     ],
     [
        "social media links"
     ]
    ]
return(
<div className={styles.footerSection}>

<div  className={styles.footerData} >
  
{
    footerData.map((ele)=>{
        return (
            <div>{
            ele.map((data)=>(
                <h3> {data}</h3>
            ))
    }
          </div>
        )
    })
}
</div>

<div className={styles.copyrightDiv} >
    <p>
        All right reserved
        Copyright @ decode your design
    </p>
</div>
</div>
)
}

export default Footer