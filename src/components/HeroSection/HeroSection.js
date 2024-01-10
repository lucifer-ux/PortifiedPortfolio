import { React, useEffect , useRef, useState} from 'react'
import "./HeroSection.css"
import HeroImage from "../../assets/namaste.png"

const HeroSection = () => {
    const [eyesToSmile, setEyesToSmile] = useState(false);

    const handleButtonEyeClick = () => {
        setEyesToSmile(!eyesToSmile);
    }

    const eyeballRef = useRef(null);

  useEffect(() => {
    const eyeball = eyeballRef.current;

    const eyeballHandler = (event) => {
      const eyeElements = eyeball.querySelectorAll('.eye');

      eyeElements.forEach((eye) => {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;

        eye.style.transform = `rotate(${rotation}deg)`;
      });
    };

    document.body.addEventListener('mousemove', eyeballHandler);

    return () => {
      document.body.removeEventListener('mousemove', eyeballHandler);
    };

  }, []);

  return (
    <>
    <div className='HeroSectionContainer'>
        <h2 className='welcometext'>Crafting Digital Experiences with Expertise</h2>
        <img className='heroImageStyling' id='anchor' src={HeroImage} alt='herosectionimage' />
    </div>
    
    <h3 className='subtitleText'>Harmonizing Code Symphony, Weaving Dreams with JavaScript, C++, React, and the Elegance of PureScript</h3>
    <div className='wrappingEyeButton'>
    <div ref={eyeballRef} className='eyeContainer'>
        <div className="eye"></div>
        <div className="eye"></div>
    </div>
    <div className='buttonCover' >
    <div className="button_block">
        <div className="button" onClick={handleButtonEyeClick}><a> Contact Me </a> </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default HeroSection