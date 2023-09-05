const mockData = [
  {
    src: '/images/SEULGI1.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/SEULGI2.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/SEULGI3.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/SEULGI4.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/SEULGI5.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/SEULGI6.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/SEULGI7.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/SEULGI8.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/SEULGI9.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/SEULGI10.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/IRENE1.jpeg',
    type: 'IRENE',
  },
  {
    src: '/images/IRENE2.jpeg',
    type: 'IRENE',
  },
  {
    src: '/images/IRENE3.jpeg',
    type: 'IRENE',
  },
  {
    src: '/images/IRENE4.jpeg',
    type: 'IRENE',
  },
  {
    src: '/images/IRENE5.jpeg',
    type: 'IRENE',
  },
  {
    src: '/images/YERI1.jpeg',
    type: 'YERI',
  },
  {
    src: '/images/YERI2.jpeg',
    type: 'YERI',
  },
  {
    src: '/images/YERI3.jpeg',
    type: 'YERI',
  },
  {
    src: '/images/YERI4.jpeg',
    type: 'YERI',
  },
  {
    src: '/images/YERI5.jpeg',
    type: 'YERI',
  },
  {
    src: '/images/JOY1.jpeg',
    type: 'JOY',
  },
  {
    src: '/images/JOY2.jpeg',
    type: 'JOY',
  },
  {
    src: '/images/JOY3.jpeg',
    type: 'JOY',
  },
  {
    src: '/images/JOY4.jpeg',
    type: 'JOY',
  },
  {
    src: '/images/JOY5.jpeg',
    type: 'JOY',
  },
  {
    src: '/images/WENDY1.jpeg',
    type: 'WENDY',
  },
  {
    src: '/images/WENDY2.jpeg',
    type: 'WENDY',
  },
  {
    src: '/images/WENDY3.jpeg',
    type: 'WENDY',
  },
  {
    src: '/images/WENDY4.jpeg',
    type: 'WENDY',
  },
  {
    src: '/images/WENDY5.jpeg',
    type: 'WENDY',
  },
  {
    src: '/images/every1.jpeg',
    type: 'EVERY',
  },
  {
    src: '/images/every2.jpeg',
    type: 'EVERY',
  },
  {
    src: '/images/every3.jpeg',
    type: 'EVERY',
  },
];

export function getRandomImagePath() {
  const randomVariable = Math.floor(Math.random() * (mockData.length - 1)) + 1;
  return mockData[randomVariable];
}
