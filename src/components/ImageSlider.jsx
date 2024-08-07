import "../App.css"
import "./imageslider.css"

import imgAro15px from '/src/assets/imgAro/aro15px.png';
import imgAro18px from '/src/assets/imgAro/aro18px.png';
import imgAro20px from '/src/assets/imgAro/aro20px.png';
import imgAro23px from '/src/assets/imgAro/aro23px.png';
import imgAro28px from '/src/assets/imgAro/aro28px.png';


export const ImageSlider = () => {
    const images = [
        
        imgAro15px,
        imgAro18px,
        imgAro20px,
        imgAro23px,
        imgAro28px

    ];
    return (
        <div className="slide_main">

            <div className="slide_content">
                 <div className="slide_content_img"style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <div className="slide_content_bottonL"></div>
                </div>
            </div>


        </div>


    )
}

