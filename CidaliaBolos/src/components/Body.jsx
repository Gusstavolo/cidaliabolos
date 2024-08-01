import '../App.css'
import { useState,useEffect } from 'react'
const OverlayLoad = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Define o componente como visível ao montar
    setVisible(true);

    // Define o componente como não visível após 4 segundos
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    // Limpa o timer quando o componente é desmontado
    return () => clearTimeout(timer);
  }, []); 
    return (
      
          <div className={`OverlayLoadMain ${visible ? 'visible' : 'hidden'}`}>
            <div className='Overlayinfo'>
                <div className='cupA'></div>
                Consulte o WhatsApp para mais informações.
            </div>

        </div>
       
    )
}


export const Body = () => {
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const mensagem = "Olá, gostaria de encomendar um bolo.";
      const numeroWhatsApp = '557599808083';
      const urlWhatsApp = `whatsapp://send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
      
      window.location.href = urlWhatsApp;
    };

    return(

        <div className="body_main">
           <OverlayLoad />





            <button onSubmit={handleSubmit} className="learn-more button-w"> 
                <div className='iconWats'></div>
                FAÇA SEU PEDIDO!
            </button>
        </div>
    )
}