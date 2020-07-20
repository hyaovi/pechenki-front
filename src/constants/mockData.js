export const roomUserData = {
  isAdmin: false,
  isMAnager: false,
  isRoom: true,
  roomNumber: '320',
  floor: '3',
  id: 325,
};

export const adminUserData = {
  isAdmin: true,
  isMAnager: false,
  isRoom: true,
  roomNumber: '320',
  floor: '3',
  id: 489,
};
export const itemsList = [1, 2, 3, 4, 5, 6, 7, 8];
export const productList = [
  {
    productID: 123,
    name: 'Молоко',
    inStock: true,
    type: 'НАПИТКИ',
    description: 'Вкусное молоко...',
    filename: '9',
    image: require('../images/products/9.png'),
    remaining: 20,
  },
  {
    productID: 133,
    name: 'Вода',
    inStock: true,
    type: 'НАПИТКИ',
    description: 'Питьевая вода 20л',
    filename: '8',
    image: require('../images/products/8.png'),
    remaining: 30,
  },
  {
    productID: 132,
    name: 'Круасан',
    inStock: true,
    type: 'ЕДА',
    description: 'Хороший круасан, подходящий для быстрого завтрака..',
    filename: '6',
    image: require('../images/products/6.png'),
    remaining: 9,
  },
];
