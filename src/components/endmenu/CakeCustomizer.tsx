import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import '../endmenu/EndMenu.css';

interface CakeCustomizerProps {
  selectedSize: number;
  selectedMass: string;
  onClose: () => void;
  onFinish: () => void;
}

export default function CakeCustomizer({
  selectedSize,
  selectedMass,
  onClose,
  onFinish,
}: CakeCustomizerProps) {
  const [selectedFilling, setSelectedFilling] = useState('');
  const [selectedCover, setSelectedCover] = useState('');

  const fillings = [
    'Brigadeiro',
    'Doce de Leite',
    'Ninho',
    'Morango',
    'Nutella',
    'Prestígio',
  ];

  const covers = [
    'Chantilly',
    'Pasta Americana',
    'Ganache',
    'Buttercream',
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-inner">
          <div className="modal-header">
            <h3 className="modal-title">
              Personalize seu Bolo
            </h3>
            <button onClick={onClose} className="close-button">
              <X className="icon" />
            </button>
          </div>

          <div className="options-section">
            <div className="section-title">Recheio</div>
            <div className="options-grid">
              {fillings.map((filling) => (
                <button
                  key={filling}
                  onClick={() => setSelectedFilling(filling)}
                  className={`option-button ${selectedFilling === filling ? 'selected' : ''}`}
                >
                  {filling}
                </button>
              ))}
            </div>
          </div>

          <div className="options-section">
            <div className="section-title">Cobertura</div>
            <div className="options-grid">
              {covers.map((cover) => (
                <button
                  key={cover}
                  onClick={() => setSelectedCover(cover)}
                  className={`option-button ${selectedCover === cover ? 'selected' : ''}`}
                >
                  {cover}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={onFinish}
            disabled={!selectedFilling || !selectedCover}
            className="submit-button"
          >
            <Send className="icon" />
            Enviar Pedido pelo WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}