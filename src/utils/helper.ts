type ColorSchema = {
  [key: string]: string;
};

const color: ColorSchema = {
  SEULGI: 'text-orange-500',
  IRENE: 'text-rose-500',
  YERI: 'text-purple-500',
  JOY: 'text-green-500',
  WENDY: 'text-blue-500',
  EVERY: 'text-red-500',
};

export function getColor(type: string) {
  return color[type];
}
