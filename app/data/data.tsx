import { Header } from "~/types/types";
import Image from '../../public/images/dry-cleaning.png'

export const storesData : storesType[] = [{
  id: 1,
  name: 'Brightways Drycleaners NIT 1',
  address: '1 J/16 NIT FARIDABAD',
  timing: '10:00 - 9:00',
  phoneNumber: '9810136709',
  openOn: 'Mon - Fri'
},{
  id: 2,
  name: 'Brightways Drycleaners NIT 1',
  address: '1 J/16 NIT FARIDABAD',
  timing: '10:00 - 9:00',
  phoneNumber: '9810136709',
  openOn: 'Mon - Fri'
},{
  id: 3,
  name: 'Brightways Drycleaners NIT 1',
  address: '1 J/16 NIT FARIDABAD',
  timing: '10:00 - 9:00',
  phoneNumber: '9810136709',
  openOn: 'Mon - Fri'
}]

export const itemData : itemType[] = [{
  id: 1,
  name: 'Blazer',
  price: 200
},{
  id: 2,
  name: 'Blazer',
  price: 200
},{
  id: 3,
  name: 'Blazer',
  price: 200
},{
  id: 4,
  name: 'Blazer',
  price: 200
}]

export const categoriesData: categoryType[] = [{
  id: 1,
  name: 'Formal Wears',
  items: itemData
},{
  id: 2,
  name: 'Formal Wears',
  items: itemData
},{
  id: 3,
  name: 'Formal Wears',
  items: itemData
},{
  id: 4,
  name: 'Formal Wears',
  items: itemData
}]

export const servicesData : servicesType[] = [{
  id: 1,
  name: 'Dry Cleaning',
  short_desc: 'For sensitive and soft fabrics',
  image: Image,
  detailed_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu sem maximus, dictum lorem nec, tincidunt urna. Fusce rhoncus lacus ante, quis mollis ex tincidunt ac. Sed sit amet tempus orci. ',
  categories: categoriesData
},{
  id: 2,
  name: 'Dry Cleaning',
  short_desc: 'For sensitive and soft fabrics',
  image: Image,
  detailed_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu sem maximus, dictum lorem nec, tincidunt urna. Fusce rhoncus lacus ante, quis mollis ex tincidunt ac. Sed sit amet tempus orci. ',
  categories: categoriesData
},{
  id: 3,
  name: 'Dry Cleaning',
  short_desc: 'For sensitive and soft fabrics',
  image: Image,
  detailed_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu sem maximus, dictum lorem nec, tincidunt urna. Fusce rhoncus lacus ante, quis mollis ex tincidunt ac. Sed sit amet tempus orci. ',
  categories: categoriesData
},{
  id: 4,
  name: 'Dry Cleaning',
  short_desc: 'For sensitive and soft fabrics',
  image: Image,
  detailed_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu sem maximus, dictum lorem nec, tincidunt urna. Fusce rhoncus lacus ante, quis mollis ex tincidunt ac. Sed sit amet tempus orci. ',
  categories: categoriesData
}]

export const testimonialData : testimonialsType[] = [{
  id: 1,
  name: "Arjun",
  review: "This product is so cool and create so much value bla bla bla bla",
  rating: 5,
  source: "Google"
},{
  id: 2,
    name: "Arjun",
    review: "This product is so cool and create so much value bla bla bla bla",
    rating: 5,
    source: "Google"
  },{
    id: 3,
    name: "Arjun",
    review: "This product is so cool and create so much value bla bla bla bla",
    rating: 5,
    source: "Google"
  },{
    id: 4,
    name: "Arjun",
    review: "This product is so cool and create so much value bla bla bla bla",
    rating: 5,
    source: "Google"
  },{
    id: 5,
    name: "Arjun",
    review: "This product is so cool and create so much value bla bla bla bla",
    rating: 5,
    source: "Google"
  }]

  export const processStepData : processStepDataType[] = [{
      id: 1,
      data: "Follow this step to start creating value for your customers"
  },{
    id: 2,
    data: "Follow this step to start creating value for your customers"
},{
    id: 3,
    data: "Follow this step to start creating value for your customers"
}]

export const featuresData : featuresType[] = [{
  title: "Customer service on your fingertips",
  desc: "Any change in delivery times or date, or if something goes wrong, we are here. Our customer support team will assist you gladly.",
  img: ""
},{
  title: "Customer service on your fingertips",
  desc: "Any change in delivery times or date, or if something goes wrong, we are here. Our customer support team will assist you gladly.",
  img: ""
}]

export const pagesData : pagesType[] = [{
  title: 'Home',
  path: '/',
},{
  title: 'Contact us',
  path: '/contact',
  inHeader: true
},{
  title: 'About us',
  path: '/about',
  inHeader: true
},{
  title: 'Pricing',
  path: '/pricing',
  inHeader: true
},{
  title: 'How it\'s works',
  path: '/howItsWorks',
  inHeader: true
},{
  title: 'Login',
  path: '/auth/login',
  isAction: true
},{
  title: 'Register',
  path: '/auth/register',
  isAction: true
},{
  title: 'Auth',
  path: '/auth'
},{
  title: 'Book Now',
  path: '/book',
  isAction: true
}]