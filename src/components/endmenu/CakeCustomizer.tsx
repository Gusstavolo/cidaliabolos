import React, { useState } from 'react';
import { X, Send, Minus, Plus } from 'lucide-react';
import '../endmenu/EndMenu.css';
import { CAKE_SIZES, CAKE_FILLINGS, CAKE_TYPES, CAKE_EXTRAS, CAKE_MASSES } from '../../untils/cakeData';

interface CakeCustomizerProps {
  onClose: () => void;
}

interface ExtrasQuantity {
  [key: string]: number;
}

export default function CakeCustomizer({
  onClose,
}: CakeCustomizerProps) {
  const [selectedSize, setSelectedSize] = useState<string | number>(23);
  const [selectedMasses, setSelectedMasses] = useState<string[]>(['branca']);
  const [dualMass, setDualMass] = useState(false);
  const [selectedFillings, setSelectedFillings] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState('');
  const [extrasQuantities, setExtrasQuantities] = useState<ExtrasQuantity>({});

  const handleMassSelection = (massId: string) => {
    if (dualMass) {
      if (selectedMasses.includes(massId)) {
        setSelectedMasses(selectedMasses.filter(id => id !== massId));
      } else if (selectedMasses.length < 2) {
        setSelectedMasses([...selectedMasses, massId]);
      }
    } else {
      setSelectedMasses([massId]);
    }
  };

  const handleFillingSelection = (fillingId: string) => {
    if (selectedFillings.includes(fillingId)) {
      setSelectedFillings(selectedFillings.filter(id => id !== fillingId));
    } else if (selectedFillings.length < 2) {
      setSelectedFillings([...selectedFillings, fillingId]);
    }
  };

  const handleExtraQuantity = (extraId: string, change: number) => {
    setExtrasQuantities(prev => ({
      ...prev,
      [extraId]: Math.max(0, (prev[extraId] || 0) + change)
    }));
  };

  const calculateTotal = () => {
    const basePrice = CAKE_SIZES[selectedSize as keyof typeof CAKE_SIZES]?.preco || 0;
    
    const massesPrice = selectedMasses.reduce((total, id) => {
      const mass = CAKE_MASSES.find(m => m.id === id);
      return total + (mass?.price || 0);
    }, 0);
    
    const fillingsPrice = selectedFillings.reduce((total, id) => {
      const filling = CAKE_FILLINGS.find(f => f.id === id);
      return total + (filling?.price || 0);
    }, 0);
    
    const typePrice = CAKE_TYPES.find(t => t.id === selectedType)?.price || 0;
    
    const extrasPrice = Object.entries(extrasQuantities).reduce((total, [id, quantity]) => {
      const extra = CAKE_EXTRAS.find(e => e.id === id);
      return total + (extra?.price || 0) * quantity;
    }, 0);
    
    return basePrice + massesPrice + fillingsPrice + typePrice + extrasPrice;
  };

  const handleWhatsApp = () => {
    const sizeInfo = CAKE_SIZES[selectedSize as keyof typeof CAKE_SIZES];
    const massText = selectedMasses.map(id => {
      const mass = CAKE_MASSES.find(m => m.id === id);
      return `${mass?.name} (+R$ ${mass?.price},00)`;
    }).join(' e ');
    
    const fillingsText = selectedFillings.map(id => {
      const filling = CAKE_FILLINGS.find(f => f.id === id);
      return `${filling?.name} (+R$ ${filling?.price},00)`;
    }).join(' e ');

    const extrasText = Object.entries(extrasQuantities)
      .filter(([_, quantity]) => quantity > 0)
      .map(([id, quantity]) => {
        const extra = CAKE_EXTRAS.find(e => e.id === id);
        return `${quantity}x ${extra?.name} (+R$ ${(extra?.price || 0) * quantity},00)`;
      })
      .join('\n- ');

    const message = `Olá! Gostaria de fazer um pedido:
- Tamanho: ${sizeInfo?.aro} (${sizeInfo?.fatias})${sizeInfo?.andar ? ' - BOLO DE ANDAR' : ''}
- Base: R$ ${sizeInfo?.preco},00
- ${massText}
- Recheios: ${fillingsText}
- Tipo: ${CAKE_TYPES.find(t => t.id === selectedType)?.name} (+R$ ${CAKE_TYPES.find(t => t.id === selectedType)?.price},00)${extrasText ? '\n- ' + extrasText : ''}
Valor Total: R$ ${calculateTotal()},00`;

    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`);
  };

  const total = calculateTotal();
  const selectedSizeInfo = CAKE_SIZES[selectedSize as keyof typeof CAKE_SIZES];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-inner">
          <div className="modal-header">
            <div>
              <h3 className="modal-title">Personalize seu Bolo</h3>
            </div>
            <button onClick={onClose} className="close-button">
              <X />
            </button>
          </div>

          <div className="options-section">
            <div className="section-title">Tamanho do Bolo</div>
            <div className="size-options">
              {Object.entries(CAKE_SIZES).map(([size, info]) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                >
                  <div className="size-info">
                    <div className="size-name">{info.aro}</div>
                    <div className="size-description">{info.fatias}</div>
                    <div className="size-price">R$ {info.preco},00</div>
                    {info.andar && (
                      <div className="size-tier">Bolo de Andar</div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="options-section">
            <div className="section-title">Escolha sua Massa</div>
            <div className="dual-mass-toggle">
              <label>
                <input
                  type="checkbox"
                  checked={dualMass}
                  onChange={(e) => {
                    setDualMass(e.target.checked);
                    if (!e.target.checked) {
                      setSelectedMasses(selectedMasses.slice(0, 1));
                    }
                  }}
                />
                Quero dois sabores de massa
              </label>
            </div>

            <div className="mass-options">
              {CAKE_MASSES.map((mass) => (
                <button
                  key={mass.id}
                  onClick={() => handleMassSelection(mass.id)}
                  className={`mass-option ${selectedMasses.includes(mass.id) ? 'selected' : ''}`}
                  disabled={dualMass && selectedMasses.length >= 2 && !selectedMasses.includes(mass.id)}
                >
                  <div 
                    className="mass-circle"
                    style={{ backgroundColor: mass.color }}
                  />
                  <div className="mass-info">
                    <div className="mass-name">{mass.name}</div>
                    <div className="mass-description">{mass.description}</div>
                    {mass.price > 0 && (
                      <div className="text-sm text-pink-500 font-medium mt-1">
                        + R$ {mass.price},00
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="options-section">
            <div className="section-title">Recheios (Até 2 sabores)</div>
            <div className="filling-options">
              {CAKE_FILLINGS.map((filling) => (
                <button
                  key={filling.id}
                  onClick={() => handleFillingSelection(filling.id)}
                  className={`filling-option ${selectedFillings.includes(filling.id) ? 'selected' : ''}`}
                  disabled={selectedFillings.length >= 2 && !selectedFillings.includes(filling.id)}
                >
                  <div className="filling-name">{filling.name}</div>
                  <div className="filling-description">{filling.description}</div>
                  <div className="filling-price">+ R$ {filling.price},00</div>
                </button>
              ))}
            </div>
          </div>

          <div className="options-section">
            <div className="section-title">Tipo de Cobertura</div>
            <div className="type-options">
              {CAKE_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`type-option ${selectedType === type.id ? 'selected' : ''}`}
                >
                  <div className="type-name">{type.name}</div>
                  <div className="type-description">{type.description}</div>
                  <div className="type-price">+ R$ {type.price},00</div>
                </button>
              ))}
            </div>
          </div>

          <div className="options-section">
            <div className="section-title">Adicionais</div>
            <div className="extras-grid">
              {CAKE_EXTRAS.map((extra) => (
                <div key={extra.id} className="extra-option">
                  <div className="extra-info">
                    <div className="extra-name">{extra.name}</div>
                    <div className="extra-description">{extra.description}</div>
                    <div className="extra-price">R$ {extra.price},00/{extra.unit}</div>
                  </div>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleExtraQuantity(extra.id, -1)}
                      className="quantity-button"
                      disabled={!extrasQuantities[extra.id]}
                    >
                      <Minus />
                    </button>
                    <span className="quantity-display">
                      {extrasQuantities[extra.id] || 0}
                    </span>
                    <button
                      onClick={() => handleExtraQuantity(extra.id, 1)}
                      className="quantity-button"
                    >
                      <Plus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="total-section">
            <div>
              <div className="total-label">Valor Total:</div>
              <div className="text-sm text-gray-600">Base: R$ {selectedSizeInfo?.preco},00</div>
            </div>
            <div className="total-price">R$ {total},00</div>
          </div>

          <button
            onClick={handleWhatsApp}
            disabled={!selectedFillings.length || !selectedType}
            className="submit-button"
          >
            <Send />
            Enviar Pedido pelo WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}