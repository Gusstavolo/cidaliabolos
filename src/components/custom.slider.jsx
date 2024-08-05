import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css';
import "./custom.slider.css";


import imgAro15px from '/src/assets/imgAro/aro15px.png';
import imgAro18px from '/src/assets/imgAro/aro18px.png';
import imgAro20px from '/src/assets/imgAro/aro20px.png';
import imgAro23px from '/src/assets/imgAro/aro23px.png';
import imgAro28px from '/src/assets/imgAro/aro28px.png';
export const SlideSizeCake = () => {
    const images = [
        
        imgAro15px,
        imgAro18px,
        imgAro20px,
        imgAro23px,
        imgAro28px

    ];

    return (
      <div className='slideshow-div-config'>
        <Slide className='react-slideshow-container'
        autoplay={true}
        onChange={function noRefCheck(){}}
        onStartChange={function noRefCheck(){}}>
            <div className="each-slide-effect">
                <div className='slideshow-image-size'  style={{ 'backgroundImage': `url(${images[0]})` }}>
                  
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                    
                </div>
            </div>
        </Slide>
        </div>
    );
};

