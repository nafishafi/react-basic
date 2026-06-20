import { LazyLoadImage } from "react-lazy-load-image-component"
import LazyLoadingImg from "../assets/image1.jpg"
import LazyLoadingImg2 from "../assets/image2.jpg"

function LazyLoading() {
  return (
    <div>
        <h1 style={{marginBottom: '150vh'}}>Lazy Load Random Image</h1>
        <img src={LazyLoadingImg} alt="Random img" style={{borderRadius: '10px'}}/>
        <LazyLoadImage src={LazyLoadingImg2} alt="Random Img2" style={{borderRadius: '10px', marginTop: '10px'}}/>
        <p>
            Sumber:{' '}
            <a href="https://unsplash.com/photos/random/1">
                Lorem ipsum
            </a>
        </p>
    </div>
  )
}

export default LazyLoading