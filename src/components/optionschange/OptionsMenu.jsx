import './optionsmenu.css'
import React, { useState, useEffect } from 'react';




export const OptionLeftSize = () => {
  const sizes = [15, 18, 20, 23, 28];
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

    return (
        <div className="main_option">
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

