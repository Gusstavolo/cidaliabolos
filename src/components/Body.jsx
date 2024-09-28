import '../App.css'
import './custom.slider.css'
import 'react-slideshow-image/dist/styles.css';

import { SlideSizeCake } from './custom.slider';
import { useState,useEffect } from 'react'
import { Slide } from 'react-slideshow-image';
import { ImageSlider } from './ImageSlider';
import { OptionLeftSize, OptionRightSize, HeaderO, OptionRecheios } from './optionschange/OptionsMenu';

const OverlayLoad = () => {
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    // Define o componente como visível ao montar
    setVisible(true);
    // Define o componente como não visível após 4 segundos
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1400);

        if (!visible) {
          setTimeout(() => {
            
              setDisplay(false);
            
          }, 2000);
      }
   
    // Limpa o timer quando o componente é desmontado
    return () => clearTimeout(timer);
  }, []); 
 
    return (
      <>
          { display && <div className={`OverlayLoadMain ${visible ? 'visible' : 'hidden'}`} >
            
            
            <div className='Overlayinfo'>
                <div className='cupA'></div>
                Consulte o WhatsApp para mais informações.
            </div>
            
           
        </div>
    }
    </>
  )
}
const WhatsButton = ( ) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const mensagem = "Olá, gostaria de encomendar um bolo.";
    const numeroWhatsApp = '557599808083';
    const urlWhatsApp = `whatsapp://send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    
    window.location.href = urlWhatsApp;
  };

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Define o componente como visível ao montar
    setVisible(true);

    // Define o componente como não visível após 4 segundos
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1400);

    // Limpa o timer quando o componente é desmontado
    return () => clearTimeout(timer);
  }, []);
  
  return (

        <button onSubmit={handleSubmit} className={`learn-more button-w ${visible ? 'off' : 'on'}`}> 
                <div className='iconWats'></div>
                FAÇA SEU PEDIDO!
            </button>

  )
}
const Header = () => {
  return (
      <div className='Header_main'>
          <div className='Header_logo'></div>
          
      </div>
  )
}
const TestSlide = () => {
  return (
    <div className='bannerSizeOptions'>  
      <SlideSizeCake />
    </div>

  )
}

export const Body = () => {
    
    

    return(

        <div className="body_main">
          <div className="main">
           <OverlayLoad />
           <HeaderO />
            <OptionLeftSize />

            
            <OptionRightSize />
            <OptionRecheios />
            <WhatsButton />
            </div>
        </div>
    )
}

export const Bodyss = () => {

return(
  <>
             <Header />

  <div className='bannerHead'></div>
  <div  className='titlename'>TAMANHOS</div>
  
  <ImageSlider />

  <div  className='titlename'>TIPOS DE MASSAS</div>

  <div className='bannerMassas_main'>
    <div className='bannerMassas' />
  </div>

  <div  className='titlename'>DECORAÇÃO</div>
</>)
}