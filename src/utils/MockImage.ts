export const mockData = [
  {
    src: '/images/슬기1.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/슬기2.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/슬기3.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/슬기4.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/슬기5.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/슬기6.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/슬기7.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/슬기8.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/슬기9.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/슬기10.jpeg',
    type: 'SEULGI',
  },
  {
    src: '/images/아이린1.jpeg',
    type: 'IRENE',
  },
  {
    src: '/images/아이린2.jpeg',
    type: 'IRENE',
  },
  {
    src: '/images/아이린3.jpeg',
    type: 'IRENE',
  },
  {
    src: '/images/아이린4.jpeg',
    type: 'IRENE',
  },
  {
    src: '/images/아이린5.jpeg',
    type: 'IRENE',
  },
  {
    src: '/images/예리1.jpeg',
    type: 'YERI',
  },
  {
    src: '/images/예리2.jpeg',
    type: 'YERI',
  },
  {
    src: '/images/예리3.jpeg',
    type: 'YERI',
  },
  {
    src: '/images/예리4.jpeg',
    type: 'YERI',
  },
  {
    src: '/images/예리5.jpeg',
    type: 'YERI',
  },
  {
    src: '/images/조이1.jpeg',
    type: 'JOY',
  },
  {
    src: '/images/조이2.jpeg',
    type: 'JOY',
  },
  {
    src: '/images/조이3.jpeg',
    type: 'JOY',
  },
  {
    src: '/images/조이4.jpeg',
    type: 'JOY',
  },
  {
    src: '/images/조이5.jpeg',
    type: 'JOY',
  },
  {
    src: '/images/웬디1.jpeg',
    type: 'WENDY',
  },
  {
    src: '/images/웬디2.jpeg',
    type: 'WENDY',
  },
  {
    src: '/images/웬디3.jpeg',
    type: 'WENDY',
  },
  {
    src: '/images/웬디4.jpeg',
    type: 'WENDY',
  },
  {
    src: '/images/웬디5.jpeg',
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
  const randomVariable = Math.floor(Math.random() * 32) + 1;
  return mockData[randomVariable];
}
