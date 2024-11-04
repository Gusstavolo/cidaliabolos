import '../App.css'
import '.././components/endmenu/EndMenu.css'


import { useState,useEffect } from 'react'
import { OpitonSizeCake, OptionLeftSize, OptionRightSize, HeaderO, OptionRecheios, OptionDecoracao, OptionFoot } from './optionschange/OptionsMenu';
import CakeCustomizer from './endmenu/CakeCustomizer';

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
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(23);
  const [selectedMass, setSelectedMass] = useState('branca');

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de fazer um pedido:\n- Tamanho: ${selectedSize}cm\n- Massa: ${selectedMass}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`);
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
      <>
      
      <button  onClick={() => setIsCustomizerOpen(true)} className={`learn-more button-w ${visible ? 'off' : 'on'}`}> 
                <div className='iconWats'></div>
                <div className='h1_buttom'> FAÇA SEU PEDIDO!</div>
                
               
            </button>
      
            {isCustomizerOpen && (
        <CakeCustomizer
          selectedSize={selectedSize}
          selectedMass={selectedMass}
          onClose={() => setIsCustomizerOpen(false)}
          onFinish={handleWhatsApp}
        />
      )}
      
      </>
        

  )
}
const Header = () => {
  return (
      <div className='Header_main'>
          <div className='Header_logo'></div>
          
      </div>
  )
}


export const Body = () => {
    
    

    return(

        <div className="body_main">
          <div className="main">
            <OverlayLoad />
              <HeaderO />
              <OpitonSizeCake/>

              
              <OptionRightSize  />
              <OptionRecheios loading="lazy"/>
              <OptionDecoracao loading="lazy"/>
              <OptionFoot />
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