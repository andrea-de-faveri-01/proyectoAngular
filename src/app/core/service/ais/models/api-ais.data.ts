import { ApiAiI } from "./api-ais.interface";


export const aisData : ApiAiI[] = [
  {
    _id: '64064b293b244e680d23528b',
    name: 'ChatGPT',
    category: ['chatBot'],
    logo: 'https://openai.com/content/images/size/w1400/2023/01/chatgpt.jpg',
    year: 2022,
    lenguage:
      'ChatGPT knows at least 95 natural languages. However, it is primarily …',
    description:
      'ChatGPT is an artificial intelligence chatbot. It is built on top of l…',
    link: 'https://chat.openai.com/chat',
    price: 'free credit for the first 3 months.'
  },
  {
    _id: '64064b293b244e680d23528c',
    name: 'Midjourney',
    category: ['text to image'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png',
    year: 2022,
    lenguage:
      'Designed to understand prompt in English but understands commands in a…',
    description:
      'Midjourney is an independent research laboratory that produces a text-…',
    link: 'https://discord.com/invite/midjourney',
    price: 'Midjourney comes with a free trial of 25 generations then you can choo…'
  },
  {
    _id: '64064b293b244e680d23528d',
    name: 'Chatsonic',
    category: ['chatBot', 'text to image'],
    logo: 'https://i.blogs.es/5dd761/writesonic/1366_2000.webp',
    year: 2023,
    lenguage:
      'Designed to understand and reply in English but understands commands i…',
    description:
      'ChatSonic is a conversational AI chatbot with connection to Google and…',
    link: 'https://writesonic.com/chat',
    price: 'Try with a free trial then various pricing options '
  }
];
