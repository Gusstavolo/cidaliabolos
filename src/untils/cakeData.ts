export const CAKE_SIZES = {
  15: { aro: 'ARO 15', fatias: '15 FATIAS', preco: 100 },
  18: { aro: 'ARO 18', fatias: '21 FATIAS', preco: 120 },
  20: { aro: 'ARO 20', fatias: '30 FATIAS', preco: 140 },
  23: { aro: 'ARO 23', fatias: '45 FATIAS', preco: 160 },
  25: { aro: 'ARO 25', fatias: '55 FATIAS', preco: 180 },
  28: { aro: 'ARO 28', fatias: '70 FATIAS', preco: 200 }
} as const;

export const CAKE_MASSES = [
  {
    id: 'branca',
    name: 'Massa Branca',
    description: 'Massa tradicional leve e macia',
    color: '#FFFFFF'
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    description: 'Massa rica em cacau',
    color: '#92400e'
  },
  {
    id: 'redvelvet',
    name: 'Red Velvet',
    description: 'Massa vermelha aveludada',
    color: '#dc2626'
  }
] as const;

export const CAKE_FILLINGS = [
  {
    id: 'ninho-morango',
    name: 'Ninho com Morango',
    description: 'Brigadeiro de ninho com geleia de morango',
    price: 10
  },
  {
    id: 'abacaxi',
    name: 'Abacaxi',
    description: 'Brigadeiro branco com abacaxi caramelizado',
    price: 8
  },
  {
    id: 'brigadeiro',
    name: 'Brigadeiro Tradicional',
    description: 'Brigadeiro cremoso tradicional',
    price: 5
  },
  {
    id: 'doce-leite',
    name: 'Doce de Leite',
    description: 'Doce de leite cremoso caseiro',
    price: 7
  },
  {
    id: 'nutella',
    name: 'Nutella',
    description: 'Creme de Nutella com avelãs',
    price: 15
  },
  {
    id: 'prestigio',
    name: 'Prestígio',
    description: 'Brigadeiro de chocolate com coco ralado',
    price: 8
  }
] as const;

export const CAKE_EXTRAS = [
  {
    id: 'brigadeiros',
    name: 'Brigadeiros',
    description: 'Brigadeiros para decoração',
    price: 2,
    unit: 'unidade'
  },
  {
    id: 'morangos',
    name: 'Morangos',
    description: 'Morangos frescos',
    price: 10,
    unit: 'porção'
  },
  {
    id: 'kitkat',
    name: 'Kit Kat',
    description: 'Barras de Kit Kat',
    price: 5,
    unit: 'unidade'
  },
  {
    id: 'mm',
    name: 'M&Ms',
    description: 'Confeitos de chocolate',
    price: 8,
    unit: 'porção'
  }
] as const;

export const CAKE_TYPES = [
  {
    id: 'chantininho',
    name: 'Chantininho',
    description: 'Bolo decorado com chantilly batido na técnica chantininho',
    price: 20
  },
  {
    id: 'acetato',
    name: 'Acetato',
    description: 'Bolo com acabamento liso em acetato',
    price: 15
  }
] as const;