import './optionsmenu.css'
import React, { useState, useEffect } from 'react';


export const HeaderO = () => {


    return(
        <div className='headerO'>
            <div className='headerO_d'>
            VALORES APROXIMADOS, CONSULTE O WHATSAPP PARA MAIS INFORMAÇÕES

            </div>
        </div>

    )
}
export const OpitonSizeCake = () => {
  const sizeOptions = {
    15: { aro: 'ARO 15', fatias: '15 FATIAS', preco: 'R$100,00' },
    18: { aro: 'ARO 18', fatias: '21 FATIAS', preco: 'R$100,00' },
    20: { aro: 'ARO 20', fatias: '30 FATIAS', preco: 'R$100,00' },
    23: { aro: 'ARO 23', fatias: '40 FATIAS', preco: 'R$100,00' },
    25: { aro: 'ARO 25', fatias: '45 FATIAS', preco: 'R$100,00' },
    28: { aro: 'ARO 28', fatias: '60 FATIAS', preco: 'R$100,00' }
  };

  // Array com os tamanhos (15, 18, 20, 23, 28)
  const sizes = [15, 18, 20, 23,25, 28];

  // Definindo o estado para o aro selecionado
  const [selectedAro, setSelectedAro] = useState(sizes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Função para aumentar o aro
  const increaseAro = () => {
    setSelectedAro((prevAro) => {
      const currentIndex = sizes.indexOf(prevAro);
      if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % sizes.length; // Passa para o próximo ou retorna ao início
        return sizes[nextIndex];
      }
      return sizes[0]; // Valor padrão se houver erro
    });
  };

  // Função para diminuir o aro
  const decreaseAro = () => {
    setSelectedAro((prevAro) => {
      const currentIndex = sizes.indexOf(prevAro);
      if (currentIndex !== -1) {
        const prevIndex = (currentIndex - 1 + sizes.length) % sizes.length; // Volta para o anterior ou para o último
        return sizes[prevIndex];
      }
      return sizes[0]; // Valor padrão se houver erro
    });
  };

  // useEffect para mudar automaticamente a cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedAro((prevAro) => {
        const currentIndex = sizes.indexOf(prevAro);
        if (currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % sizes.length;
          return sizes[nextIndex];
        }
        return sizes[0]; // Valor padrão se houver erro
      });
    }, 6000);

    // Limpeza do intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // Ativa a animação
    setIsAnimating(true);

    // Remove a classe de animação após o tempo da animação (300ms neste exemplo)
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timeout); // Limpeza do timeout
  }, [selectedAro]);

  
  return(
    <div className='main_option'>
       <div className='change_Sizemain'>
       <div className='change_Sizemain_info'> {sizeOptions[selectedAro].aro}</div>
        <div className='change_Sizemain_midle'>
          <div className='change_Sizemain_midle_price'>
          {sizeOptions[selectedAro].preco}
          </div>
          <div className='change_Sizemain_midle_slice'>
          {sizeOptions[selectedAro].fatias}
          </div>
          
          </div>
          <div className='change_SizeValue_main'>
            <div className='change_txt_tt'>TAMANHOS</div>
              <div className='change_SizeValue'>
            
              <div className='change_SizeValue_loss' onClick={decreaseAro}>  -</div>

              <div className='change_SizeValue_aro' >
                  <div className={`change_SizeValue_aro_txt ${isAnimating ? 'change_animation_aro' : ''}`}> {selectedAro}
                  </div>
                </div>
               <div className='change_SizeValue_gain'  onClick={increaseAro}>+</div>
           </div>
          </div>
      </div>
    </div>

  )
}


export const OptionLeftSize = () => {
  const sizes = [15, 18, 20, 23, 25, 28];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSize((prevSize) => {
        const currentIndex = sizes.indexOf(prevSize);
        const nextIndex = (currentIndex + 1) % sizes.length;
        return sizes[nextIndex];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const sizeInfos = {
    15: { aro: 'ARO 15', fatias: '15 FATIAS', preco: 'R$100,00' },
    18: { aro: 'ARO 18', fatias: '21 FATIAS', preco: 'R$100,00' },
    20: { aro: 'ARO 20', fatias: '30 FATIAS', preco: 'R$100,00' },
    23: { aro: 'ARO 23', fatias: '45 FATIAS', preco: 'R$100,00' },
    25: { aro: 'ARO 25', fatias: '45 FATIAS', preco: 'R$100,00' },
    28: { aro: 'ARO 28', fatias: '70 FATIAS', preco: 'R$100,00' }
  };

  return (
    <div className='main_option'>
      <div className='option_left'>
        <div className='option_left_size'>
          <div className='options_indirecton'>
            {sizes.map((size) => (
              <div
                key={size}
                className={`option_a ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeClick(size)}
              >
                <div className={`option_a_buttom ${selectedSize === size ? 'animate' : ''}`}>
                  <h2>{size}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='midle_title'>
          <div className='midle_title_text'>TAMANHOS</div>
        </div>

        <div className='option_left_infos'>
          {selectedSize ? (
            <>
              <div className='option_infos_aro'>{sizeInfos[selectedSize].aro}</div>
              <div className='option_infos_fatia'>

              </div>
              <div className='option_infos_fatias'>

                <div className='option_infos_preco'>
                {sizeInfos[selectedSize].preco}
                </div>
                {sizeInfos[selectedSize].fatias}
                </div>
            </>
          ) : (
            <div className='option_infos_default'>Selecione um tamanho</div>
          )}
        </div>
      </div>
    </div>
  );
};


export const OptionRightSize = () => {
    const sizes = [1, 2, 3]; // Suponho que sejam as massas
    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    // Intervalo que troca a opção selecionada a cada 6 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedSize((prevSize) => {
                const currentIndex = sizes.indexOf(prevSize);
                const nextIndex = (currentIndex + 1) % sizes.length;
                return sizes[nextIndex];
            });
        }, 6000);

        return () => clearInterval(interval);
    }, []);
    const sizeInfos = {
        1: { layer: 'main_option_massabranca'},
        2: { layer: 'main_option_massachocolate' },
        3: { layer: 'main_option_massared' },
        
      };

    return (
        <div className={`main_optionM ${sizeInfos[selectedSize].layer}`}>
            <div className='headerO_recheios'>*OPÇÃO DE DUAS MASSAS E DOIS RECHEIOS OU APENAS UMA</div>
            <div className="option_right">
                <div className="option_left_size">
                    <div className="midle_title_right">
                        <div className="midle_title_text_right">MASSAS</div>
                    </div>
                    <div className="option_right_img">
                        <div className="options_indirecton_b">
                            {sizes.map((size, index) => (
                                <div 
                                  key={index} 
                                  className={`option_b ${selectedSize === size ? 'selected' : ''}`} 
                                  onClick={() => handleSizeClick(size)}>
                                    <div className={`option_b_buttom ${
                                        size === 1 ? 'option_b_buttom_white' : 
                                        size === 2 ? 'option_b_buttom_chocolate' : 
                                        'option_b_buttom_red'} 
                                        ${selectedSize === size ? 'animate' : ''}`} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const OptionRecheios = () => {



    return(
        <div className='main_option main_option_recheios'>
            <div className='buttom_info_txtH1'>RECHEIOS</div>
            <div className='top_list'>
                <div className='buttom_info_recheios'>
                    
                    <div className='buttom_info_recheios_cor recheios_cor_NM'>

                    </div>
                    <div className='buttom_info_txt '>NINHO COM MORANGO</div>
                    
                </div>

                <div className='buttom_info_recheios'>
                    
                    <div className='buttom_info_recheios_cor recheios_cor_ninho'>

                    </div>
                    <div className='buttom_info_txt'>NINHO</div>
                </div>
                

            </div>
            <div className='top_list'>
            <div className='buttom_info_recheios'>
                    
                    <div className='buttom_info_recheios_cor recheios_cor_brigadeiro'>

                    </div>
                    <div className='buttom_info_txt'>BRIGADEIRO</div>
                </div>
               
                <div className='buttom_info_recheios'>
                    
                    <div className='buttom_info_recheios_cor recheios_cor_ameixa'>

                    </div>
                    <div className='buttom_info_txt'>AMEIXA</div>
                </div>
                

            </div>
            <div className='top_list'>
                <div className='buttom_info_recheios'>
                    
                    <div className='buttom_info_recheios_cor recheios_cor_DL'>

                    </div>
                    <div className='buttom_info_txt'>DOCE DE LEITE</div>
                </div>
                <div className='buttom_info_recheios'>
                    
                    <div className='buttom_info_recheios_cor recheios_cor_abacaxi'>

                    </div>
                    <div className='buttom_info_txt'>ABACAXI</div>
                </div>

            </div>

        </div>


    )


}
export const OptionDecoracao = () => {
    const sizes = ['AC', 'CH'];
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
  
    const handleSizeClick = (size) => {
      setSelectedSize(size);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSelectedSize((prevSize) => {
          const currentIndex = sizes.indexOf(prevSize);
          const nextIndex = (currentIndex + 1) % sizes.length;
          return sizes[nextIndex];
        });
      }, 9000);
  
      return () => clearInterval(interval);
    }, []);
  
    const sizeInfos = {
        AC: { nome: 'ACETATO', layer: 'topdecor_acetato_img' },
        CH: { nome: 'CHANTINIHO', layer: 'topdecor_chantininho_img' },
     
    };
    return (
        <div className={`main_option_ac ${sizeInfos[selectedSize].layer}`}>
            <div className='option_left'>
                <div className='option_left_size_ac'>
                    <div className='options_indirecton'>
                        {sizes.map((size) => (
                        <div
                            key={size}
                            className={`option_a_ac ${selectedSize === size ? 'selected_ac' : ''}`}
                            onClick={() => handleSizeClick(size)}
                        >
                            <div className={`option_a_buttom_ac ${selectedSize === size ? 'animate_ac' : ''}`}>
                            <h2>{size}</h2>
                            </div>
                     </div>
                    ))}
                </div>
            </div> 
            <div className='midle_title'>
            <div className='midle_title_text_ac'>TIPOS</div>
            </div>
            
            <div className='option_left_infos_ac'>
                <div className="option_infos_aro_ac"> {sizeInfos[selectedSize].nome}
                
                
                </div>
            </div>

       



                
              
                    
            </div>
                <div className='h1_topdecor'>
                DECORE NO SEU ESTILO
                </div>
            <div className='gif_section'>
               <div className='gif_div'>
                   <div className='roll1_div'>
                    
                   </div>
                  <div className='roll2_div'>
                    
                  </div>
                  <div className='roll3_div'>
                    
                  </div>
                </div>
            </div>
          

        </div>


    )
}

export const OptionFoot = () => {
    return (
        <div className='foot_page' loading="lazy">
          <div className='insta_div'> <div className='instaicon'></div>@andrade.cidalia</div>
            <div className=''></div>
        </div>
    )
}