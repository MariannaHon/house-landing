import img1 from '../img/img1.jpg';
import img1x2 from '../img/img1@2x.jpg';
import img2 from '../img/img2.jpg';
import img2x2 from '../img/img2@2x.jpg';
import img3 from '../img/img3.jpg';
import img3x2 from '../img/img3@2x.jpg';
import house4 from '../img/house4.jpg';
import house4x2 from '../img/house4@2x.jpg';
import grey from '../img/grey.jpg';
import grey2x from '../img/grey@2x.jpg';
import red from '../img/red-house.jpg';
import red2x from '../img/red-house@2x.jpg';
import orange from '../img/orange.jpeg';
import Courtney from '../img/Courtney.jpeg';
import Darlene from '../img/Darlene.jpeg';
import Ronald from '../img/Ronald.png';
import Dianne from '../img/Dianne.png';
import blonde from '../img/blonde.jpeg';

const articles = [
  {
    imgSrc: { img1 },
    imgSrcSet: `${img1} 1x, ${img1x2} 2x`,
    imgAlt: 'Orange sofa in a room',
    authorImg: orange,
    authorName: 'Dianne Russell',
    title: 'The things we need to check when we want to buy a house',
    time: '4 min read | 25 Apr 2021',
  },
  {
    imgSrc: { img2 },
    imgSrcSet: `${img2} 1x, ${img2x2} 2x`,
    imgAlt: 'House with big yard',
    authorImg: Courtney,
    authorName: 'Courtney Henry',
    title: '7 Ways to distinguish the quality of the house we want to buy',
    time: '6 min read | 24 Apr 2021',
  },
  {
    imgSrc: { img3 },
    imgSrcSet: `${img3} 1x, ${img3x2} 2x`,
    imgAlt: 'Sunny house',
    authorImg: Darlene,
    authorName: 'Darlene Robertson',
    title: 'The best way to know the quality of the house we want to buy',
    time: '2 min read | 24 Apr 2021',
  },
  {
    imgSrc: { house4 },
    imgSrcSet: `${house4} 1x, ${house4x2} 2x`,
    imgAlt: 'Cozy white house',
    authorImg: Ronald,
    authorName: 'Ronald Richards',
    title: 'How to prepare your house for selling',
    time: '7 min read | 24 Apr 2021',
  },
  {
    imgSrc: { grey },
    imgSrcSet: `${grey} 1x, ${grey2x} 2x`,
    imgAlt: 'Big house with beautiful yard',
    authorImg: Dianne,
    authorName: 'Dianne Russel',
    title: 'How to choose your dream home',
    time: '5 min read | 25 Apr 2021',
  },
  {
    imgSrc: { red },
    imgSrcSet: `${red} 1x, ${red2x} 2x`,
    imgAlt: 'Ideal house for family',
    authorImg: blonde,
    authorName: 'Esther Howard',
    title: 'Why location matters when buying a home',
    time: '6 min read | 26 Apr 2021',
  },
  {
    imgSrc: { img1 },
    imgSrcSet: `${img1} 1x, ${img1x2} 2x`,
    imgAlt: 'Modern living room',
    authorImg: blonde,
    authorName: 'Mandy Howard',
    title: 'The things we need to check when we want to buy a flat',
    time: '6 min read | 27 Apr 2021',
  },
  {
    imgSrc: { img2 },
    imgSrcSet: `${img2} 1x, ${img2x2} 2x`,
    imgAlt: 'House with big yard',
    authorImg: Courtney,
    authorName: 'Maftuna Wethers',
    title: 'The best companies to renovate your home',
    time: '5 min read | 28 Apr 2021',
  },
  {
    imgSrc: { red },
    imgSrcSet: `${red} 1x, ${red2x} 2x`,
    imgAlt: 'Ideal house for family',
    authorImg: Darlene,
    authorName: 'Jack Daniels',
    title: 'Top 10 mistakes to avoid when buying a home',
    time: '6 min read | 29 Apr 2021',
  },
];

export default articles;
