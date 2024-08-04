import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css';
import "./custom.slider.css";
export const SlideSizeCake = () => {
    const images = [
        
        "public/imgAro/aro15px.png",
        "public/imgAro/aro18px.png",
        "public/imgAro/aro20px.png",
        "public/imgAro/aro23px.png",
        "public/imgAro/aro28px.png",

    ];

    return (
      <div className='slideshow-div-config'>
        <Slide className='react-slideshow-container'
        autoplay={false}
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

