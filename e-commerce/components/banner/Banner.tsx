import Image from "next/image"
import styles from '../../styles/Banner.module.css'
const Banner = ({height,url}:{url:string,height:string})=>{
return(

    <div className={styles.banner} >
    <img
className={styles.bannerImage}
    style={{height:`${height}`,}}
    src={url}   />
    </div>
)
}

export default Banner