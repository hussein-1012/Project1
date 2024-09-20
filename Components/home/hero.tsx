import { TiTick } from "react-icons/ti";
import Image from "next/image";
import CloudImage from '../../public/cloud-hosting.png';
import Styles from './hero.module.css';

const Hero = () => 
{
  return (
    <div className= {Styles.hero}>
      <div className= {Styles.heroLeft}>
        <h1 className= {Styles.title}>Cloud Hosting </h1>
        <p className= {Styles.desc}>
            the best web hosting solution for your online success
        </p>
        
        <div className= {Styles.services}>     
            <div className= {Styles.servicesItem}> <TiTick/>  Easy To use Control panel </div>

            <div className= {Styles.servicesItem}> <TiTick/>  Secure Hosting </div>

            <div className= {Styles.servicesItem}> <TiTick/> WebSite Maintenance </div>
        </div>
      </div>
      <div className={Styles.img}>
          <Image src={CloudImage} alt="Cloud" width={500} height={400} />

        </div>
    </div>
  )
}

export default Hero
