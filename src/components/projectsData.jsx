import memeGenerator from '../components/images/projects/meme-generator.png';
import restaurantApp from "../components/images/projects/restaurant.png";
import passwordGenerator from "../components/images/projects/password-generator.png";
import unitConverter from "../components/images/projects/unit-converter.png";
import travelJournal from "../components/images/projects/travel-journal.png";
import plantSwap from "../components/images/projects/plant-swap.png"
import travelJournalVideo from '../components/images/projects/travel-journal-vid.mp4'
import memeGeneratorVideo from '../components/images/projects/meme-generator-vid.mp4'
import restaurantAppVideo from '../components/images/projects/restaurant-vid.mp4'
import passwordGeneratorVideo from '../components/images/projects/password-generator-vid.mp4'
import unitConverterVideo from '../components/images/projects/unit-converter-vid.mp4'
import plantSwapVideo from '../components/images/projects/le-wagon-demo-day.mp4'

export const projectsData = [
  {
    title:'Meme Generator',
    imageSrc:{memeGenerator},
    alt:"Meme Generator",
    tools:'React.js ',
    dateCreated:'May 2023',
    description:"During my course with Scrimba, I successfully completed a project that allowed me to apply several important concepts in React, including useState, useEffect, props, and APIs. The project involved creating a meme generator with two input fields, one for the top text and another for the bottom text. These inputs dynamically displayed the user's text on a meme image. Additionally, I implemented a button to generate a new random meme image by fetching data from a meme image API. This project provided hands-on experience in integrating APIs and managing state in React applications.",
    linkOne:'https://sparkly-alpaca-2bb10d.netlify.app',
    linkTwo:'',
    linkThree:'',
    videoSrc:{memeGeneratorVideo},
  },
  {
        title:"Travel Journal",
        imageSrc:{travelJournal},
        alt:"Travel Journal",
        tools:"React.js",
        dateCreated:'May 2023',
        description:"I created a travel journal web app to practice using React props. It allowed me to dynamically display content and customize the app based on my experiences during a trip to Malaysia and Indonesia. Props helped me pass data between components, promoting reusability and efficient code organization. This project highlighted the value of props in React development.",
        linkOne:"https://verdant-tapioca-d5a576.netlify.app",
        linkTwo:'https://github.com/MNicolaysen/scrimba-travel-journal',
        linkThree:'',
        videoSrc:{travelJournalVideo},
  },
  {
        title:"Restaurant App",
        imageSrc:{restaurantApp},
        alt:"Restaurant",
        tools:"JavaScript",
        dateCreated:'January 2023',
        description:"I developed a restaurant ordering app using vanilla JavaScript. The app enables users to add items to their cart, remove items from the cart, and proceed to checkout. As items are added or removed, the app dynamically updates the total price of each item and the overall cart total. This project provided valuable insights into displaying elements on a webpage in response to button clicks. It was an engaging experience to witness the real-time updates and calculations based on user interactions.",
        linkOne:"https://monumental-platypus-9e161c.netlify.app",
        linkTwo:'https://github.com/MNicolaysen/mobile-restaurant-menu',
        linkThree:'',
        videoSrc:{restaurantAppVideo},
  },
  {
        title:"Password Generator",
        imageSrc:{passwordGenerator},
        alt:"Password Generator",
        tools:"JavaScript",
        dateCreated:'February 2023',
        description:"I created an early app during my course with Scrimba. The app generates a random password when the button is clicked. It was a valuable learning experience for me as it allowed me to practice deploying a webpage using Netlify and gain a better understanding of the deployment process.",
        linkOne:"https://gilded-tapioca-d75ef6.netlify.app",
        linkTwo:'https://github.com/MNicolaysen/password-generator',
        linkThree:'',
        videoSrc:{passwordGeneratorVideo},
  },
  {
        title:"Unit Converter",
        imageSrc:{unitConverter},
        alt:"Unit Converter",
        tools:"JavaScript",
        dateCreated:'October 2022',
        description:"I created one of my first JavaScript apps that performs unit conversions. It allows you to enter a number in the input field and converts it into different units, such as meters/feet, liters/gallons, and kilos/pounds. It was a great learning experience for me to practice JavaScript programming and understand how to handle unit conversions in a web application.",
        linkOne:"https://lovely-speculoos-f313a9.netlify.app",
        linkTwo:'https://github.com/MNicolaysen/scrimba-unit-converter',
        linkThree:'',
        videoSrc:{unitConverterVideo},
  },
  {
        title:"PlantSwap",
        imageSrc:{plantSwap},
        alt:"PlantSwap",
        tools:"Ruby on Rails",
        dateCreated:'June 2022',
        description:"For our final project at Le Wagon, my team and I created a plant swapping and donation platform. It featured a live chat for easy communication and utilized map APIs for convenient local connections. We focused on creating an intuitive user interface and tackled challenges like user authentication and database optimization. The project showcased our ability to combine plant enthusiasm with modern technology for a meaningful and engaging platform.",
        linkOne:"",
        linkTwo:'https://github.com/MNicolaysen/plant-swap',
        linkThree:'https://www.youtube.com/watch?v=yB-CzDoPWR0',
        videoSrc:{plantSwapVideo},
  }
];
