import { Products } from '../types/types';
import image1 from '../assets/sennheiser_momentum_4_black_10.png';
import image2 from '../assets/Marshall_Minor_III_Black_1.png';
import image3 from '../assets/jabra_elite_2_navy_5.png';
import image4 from '../assets/Philips_Fidelio_L3_Black.jpg';
import image5 from '../assets/Sony_WI-C100_Black.png';
import image6 from '../assets/anker_powerconf_h700_blue.png';

const goods: Products = [
  {
    id: 1,
    title: 'Momentum 4 Black',
    brand: 'Sennheiser',
    type: 'Full size',
    membrane: 42,
    description:
      'Signature sound, a more advanced adaptive noise reduction system, improved ergonomics and a phenomenal battery life of up to 60 hours without recharging',
    price: 499.9,
    image: image1,
  },
  {
    id: 2,
    title: 'Minor III Black',
    brand: 'Marshall',
    type: 'In-ear',
    membrane: 12,
    description:
      "It's Marshall's signature sound without the extra noise. These headphones take care of all the difficulties, so just turn on the music and go.",
    price: 199.9,
    image: image2,
  },
  {
    id: 3,
    title: 'Elite 2 Navy',
    brand: 'Jabra',
    type: 'In-ear',
    membrane: 6,
    description:
      'Jabra Elite 2 will help your music sparkle with new colors. 6mm drivers deliver rich, powerful bass, while a customizable EQ lets you personalize your sound to suit your tastes.',
    price: 45.5,
    image: image3,
  },
  {
    id: 4,
    title: 'Fidelio L3 Black',
    brand: 'Philips',
    type: 'Full size',
    membrane: 40,
    description:
      'From sound to materials, these full-size, closed-back wireless headphones are designed for those who love to immerse themselves in high-quality music.',
    price: 364,
    image: image4,
  },
  {
    id: 5,
    title: 'WI-C100 Black',
    brand: 'Sony',
    type: 'With neckband',
    membrane: 9,
    description:
      'Comfortable and easy to use, the Sony WI-C100 Wireless Headphones feature long battery life, fast charging and high-quality, customizable sound.',
    price: 43,
    image: image5,
  },
  {
    id: 6,
    title: 'Powerconf H700 Blue',
    brand: 'Anker',
    type: 'On-ear',
    membrane: 40,
    description:
      'The PowerConf H700 microphones and advanced ANC chipset work in tandem to capture and cancel out distracting sounds, allowing you to fully focus on the meeting.',
    price: 214.9,
    image: image6,
  },
];

export default goods;
