import '../App.css'

const OverlayLoad = () => {
    return (
        <div className='OverlayLoadMain'>
            <div className='Overlayinfo'>

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