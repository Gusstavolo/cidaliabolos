export const CAKE_SIZES = {
  15: { aro: 'ARO 15', fatias: '15 FATIAS', preco: 120, andar: false },
  18: { aro: 'ARO 18', fatias: '21 FATIAS', preco: 150, andar: false },
  20: { aro: 'ARO 20', fatias: '30 FATIAS', preco: 180, andar: false },
  23: { aro: 'ARO 23', fatias: '45 FATIAS', preco: 220, andar: false },
  25: { aro: 'ARO 25', fatias: '55 FATIAS', preco: 260, andar: false },
  28: { aro: 'ARO 28', fatias: '70 FATIAS', preco: 320, andar: false },
  '15-23': { aro: '15 + 23', fatias: '60 FATIAS', preco: 450, andar: true },
  '18-25': { aro: '18 + 25', fatias: '76 FATIAS', preco: 520, andar: true },
  '20-28': { aro: '20 + 28', fatias: '100 FATIAS', preco: 600, andar: true }
} as const;

export const CAKE_MASSES = [
  {
    id: 'branca',
    name: 'Massa Branca',
    description: 'Massa tradicional leve e macia',
    color: '#FFFFFF',
    price: 0
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    description: 'Massa rica em cacau',
    color: '#92400e',
    price: 15
  },
  {
    id: 'redvelvet',
    name: 'Red Velvet',
    description: 'Massa vermelha aveludada',
    color: '#dc2626',
    price: 20
  }
] as const;

export const CAKE_FILLINGS = [
  {
    id: 'ninho-morango',
    name: 'Ninho com Morango',
    description: 'Brigadeiro de ninho com geleia de morango',
    price: 25
  },
  {
    id: 'abacaxi',
    name: 'Abacaxi',
    description: 'Brigadeiro branco com abacaxi caramelizado',
    price: 20
  },
  {
    id: 'brigadeiro',
    name: 'Brigadeiro Tradicional',
    description: 'Brigadeiro cremoso tradicional',
    price: 15
  },
  {
    id: 'doce-leite',
    name: 'Doce de Leite',
    description: 'Doce de leite cremoso caseiro',
    price: 18
  },
  {
    id: 'nutella',
    name: 'Nutella',
    description: 'Creme de Nutella com avelãs',
    price: 30
  },
  {
    id: 'prestigio',
    name: 'Prestígio',
    description: 'Brigadeiro de chocolate com coco ralado',
    price: 20
  }
] as const;

export const CAKE_EXTRAS = [
  {
    id: 'brigadeiros',
    name: 'Brigadeiros',
    description: 'Brigadeiros para decoração',
    price: 3,
    unit: 'unidade'
  },
  {
    id: 'morangos',
    name: 'Morangos',
    description: 'Morangos frescos',
    price: 15,
    unit: 'porção'
  },
  {
    id: 'kitkat',
    name: 'Kit Kat',
    description: 'Barras de Kit Kat',
    price: 8,
    unit: 'unidade'
  },
  {
    id: 'mm',
    name: 'M&Ms',
    description: 'Confeitos de chocolate',
    price: 12,
    unit: 'porção'
  }
] as const;

export const CAKE_TYPES = [
  {
    id: 'chantininho',
    name: 'Chantininho',
    description: 'Bolo decorado com chantilly batido na técnica chantininho',
    price: 35
  },
  {
    id: 'acetato',
    name: 'Acetato',
    description: 'Bolo com acabamento liso em acetato',
    price: 25
  }
] as const;