import { useEffect, useState } from 'react'
import Styles from '../../styles/Slider.module.css'
import arrowback from '../../public/arrow.png'
import arrowForward from '../../public/right-arrow.png'
import Image from 'next/image'

const Slider = () => {

    const image = [
        "https://cdn.pixabay.com/photo/2022/08/28/16/13/vases-7417040__340.jpg",
        "https://cdn.pixabay.com/photo/2022/04/11/14/41/sea-7125929__340.jpg",
        "https://cdn.pixabay.com/photo/2022/08/14/08/34/sunflower-7385242__340.jpg",
        "https://cdn.pixabay.com/photo/2022/08/17/15/46/family-7392843__340.jpg",
        "https://i.vimeocdn.com/video/1008844994-6476435f2dcb0ec69f4dd8fa355fb3eb11d86420d0b985ebf6b26e7916172ba7-d_640x360.jpg",
    ]
    const [currentImage, setCurrentImage] = useState(image[0])
    const [currentIndex, setCurrentIndex] = useState(0)

    // function for showing previous image 
    const showPreviousImage = () => {
        const index = currentIndex;
        if (currentIndex == 0) {
            setCurrentIndex(image.length - 1)
            setCurrentImage(image[image.length - 1])
        }
        else {
            setCurrentIndex(currentIndex - 1);
            setCurrentImage(image[index - 1])
        }
    }
    // function for showing next image 
    const showNextImage = () => {
        if (currentIndex == image.length - 1) {
            setCurrentImage(image[0])
            setCurrentIndex(0);
        }
        else {
            const index = currentIndex
            setCurrentIndex(currentIndex + 1);
            setCurrentImage(image[index + 1])
        }
    }
    return (
        <div className={Styles.sliderDiv}  >
            <div
                onClick={() => {
                    showPreviousImage()
                }}
                className={`${Styles.arrow} ${Styles.arrowBack}`}  >
<Image className={Styles.arrowImage} src={arrowback} width={10} height={10}  />
            </div>
            <div
                onClick={() => {
                    showNextImage()
                }}
                className={`${Styles.arrow} ${Styles.arrowForward}`} >
<Image className={Styles.arrowImage}  src={arrowForward} width={10} height={10}  />
            </div>
            <img
                className={Styles.sliderImage}
                src={currentImage} />

        </div>
    )
}

export default Slider