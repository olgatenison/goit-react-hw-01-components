export const RandomColor = () => {
  // Генерируем случайные значения для каждого канала (красный, зеленый, синий)
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // Дополняем строку цвета нулями слева до 6 знаков (если нужно)
  return `#${'0'.repeat(6 - randomColor.length)}${randomColor}`;
};
