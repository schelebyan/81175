export const project = (val: number, startMin: number, startMax: number, endMin: number, endMax: number): number => {
  return (val - startMin) / (startMax - startMin) * (endMax - endMin) + endMin;
};

export const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}