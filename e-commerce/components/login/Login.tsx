
import styles from '../../styles/Login.module.css'
import closeIcon from '../../public/close.png'
import Image from 'next/image'
const Login = ({openLoginModal,setOpenLoginModal})=>{
    return (
        <div
className={styles.loginModal}     
>
    <div className={styles.siteHeading} >
        <h1  >
 Fashion website
        </h1>
    </div>
    <div className={styles.inputsection} >
        <input className={styles.input} placeholder="Enter your name" />
        <input className={styles.input} placeholder="Enter password" />
    </div>
<div className={styles.loginHeading}  >
        <h1  >
            Login
        </h1>
    </div>
<div className={styles.closeicon} >

  

    <Image
    onClick={()=>{
        setOpenLoginModal(false)
    }}
    src={closeIcon} width={20} height={20} />
</div>
</div>
    )
}

export default Login