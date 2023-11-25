export const goals = {
  travel: {
    questions: [
      {
        id: '1',
        type: 'input',
        label: 'Where do you want to go?',
      },
      {
        id: '2',
        type: 'multiDatePicker',
        label: 'Select days for the travel',
      },
    ],
    resultTitle: 'Here are the best deals, select one:',
    results: [
      {
        id: 1,
        text: 'AirCanada',
        promotion: '20% discount, buy now pay later!',
        price: 2000,
        img: '/assets/paris.jpeg',
        partnerImg: '',
      },
      {
        id: 2,
        text: 'Flair Airlines',
        promotion: '30% discount, buy now pay later!',
        price: 1800,
        img: '/assets/paris.jpeg',
        partnerImg: '',
      },
      {
        id: 3,
        text: 'Westjet & Airbnb',
        promotion: 'Flight + Lodging, awesome deal',
        price: 4000,
        img: '/assets/paris.jpeg',
        partnerImg: '',
      },
      {
        id: 4,
        text: 'Lynx Airlines',
        promotion: '10% discount, buy now pay later!',
        price: 2200,
        img: '/assets/paris.jpeg',
        partnerImg: '',
      },
    ],
  },
  // housing: {
  //   questions: [
  //     {
  //       id: '1',
  //       type: 'input',
  //       label: 'How much do you need for your downpayment?',
  //     },
  //   ],
  //   resultTitle: 'These financial institutions have great deals for you',
  //   results: [
  //     {
  //       id: 1,
  //       text: 'RBC bank',
  //       promotion: '0.1 $ Per every dollar saved for this purpose',
  //       price: 0,
  //       img: '',
  //       partnerImg: '',
  //     },
  //     {
  //       id: 2,
  //       text: 'Scotiabank',
  //       promotion: '0.05 $ Per every dollar saved for this purpose',
  //       price: 0,
  //       img: '',
  //       partnerImg: '',
  //     },
  //     {
  //       id: 3,
  //       text: 'TD bank',
  //       promotion: '0.05 $ Per every dollar save for this purpose',
  //       price: 0,
  //       img: '',
  //       partnerImg: '',
  //     },
  //     {
  //       id: 4,
  //       text: 'CIBC Bank',
  //       promotion: '0.01 $ Per every dollar save for this purpose',
  //       price: 0,
  //       img: '',
  //       partnerImg: '',
  //     },
  //   ],
  // },
  electronics: {
    questions: [
      {
        id: '1',
        type: 'options',
        label: 'What do you want to buy?',
        options: ['Phone', 'Computer', 'Tablet', 'Laptop'],
      },
      {
        id: '2',
        type: 'options',
        label: 'Are you looking for a particular brand?',
        options: ['Apple', 'Windows', 'Asus', 'Sansung'],
      },
    ],
    resultTitle: 'We have great deals for you',
    results: [
      {
        id: 1,
        text: 'Iphone 15',
        promotion: '0.1 $ Per every dollar saved for this purpose',
        price: 1200,
        img: '/assets/iphone.png',
        partnerImg: '',
      },
      {
        id: 2,
        text: 'Iphone 15 Pro',
        promotion: '0.05 $ Per every dollar saved for this purpose',
        price: 1300,
        img: '/assets/iphone.png',
        partnerImg: '',
      },
      {
        id: 3,
        text: 'Iphone 15 Pro Max',
        promotion: '0.05 $ Per every dollar save for this purpose',
        price: 1500,
        img: '/assets/iphone.png',
        partnerImg: '',
      },
      {
        id: 4,
        text: 'Iphone 14 Pro',
        promotion: '0.01 $ Per every dollar save for this purpose',
        price: 900,
        img: '/assets/iphone.png',
        partnerImg: '',
      },
    ],
  },
  // cashback: {
  //   questions: [
  //     {
  //       id: '2',
  //       type: 'options',
  //       label: 'Select a category',
  //       options: ['Groceries', 'Clothes and Accesories', 'Beauty and health'],
  //     },
  //   ],
  //   results: [
  //     {
  //       id: 1,
  //       text: 'SuperStore',
  //       promotion: '0.01 $ cashback',
  //       price: 0,
  //       img: '',
  //       partnerImg: '',
  //     },
  //     {
  //       id: 2,
  //       text: 'Wallmart',
  //       promotion: '0.02 $ cashback',
  //       price: 0,
  //       img: '',
  //       partnerImg: '',
  //     },
  //     {
  //       id: 3,
  //       text: 'Sobbeys',
  //       promotion: '0.01 $ cashback',
  //       price: 0,
  //       img: '',
  //       partnerImg: '',
  //     },
  //     {
  //       id: 4,
  //       text: 'Shoppers',
  //       promotion: '0.03 $ cashback',
  //       price: 0,
  //       img: '',
  //       partnerImg: '',
  //     },
  //   ],
  // },
}

export const categories = ['travel', 'electronics']

export type Category = 'travel' | 'electronics'
export type Goal = {
  questions: {
    id: string
    type: string
    label: string
    options?: string[]
  }[]
  resultTitle: string
  results: {
    id: number
    text: string
    promotion: string
    price: number
    img: string
    partnerImg: string
  }[]
}
