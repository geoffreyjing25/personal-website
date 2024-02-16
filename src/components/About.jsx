import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle'

const Age1 = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 365.2421897 * 1000 * 60 * 60 * 24;
    const birthTime = new Date('2003-05-09T09:20:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center 
    justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>👋 I'm Geoffrey Jing, a serial entrepreneur with experience in product, software, venture, growth, & design. I'm currently building @ <a href="https://albertjing.my.canva.site/tech-website-in-teal-white-navy-gradients-style" target="_blank" className='text-grey-700 dark:text-grey-300
            text-orange-600 dark:text-orange-500'><b>Persimmon</b></a>, a two-sided mobile app and data marketplace focused on personal data monetization.</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>
            Last summer, I built AI tools for internal customers at <a href="https://www.3m.com/" target="_blank" className='text-grey-700 dark:text-grey-300
            text-red-500 dark:text-red-500'><b>3M</b></a>, saving them an estimated $40k by accelerating product research. Before that, I interned at 3 (pre-seed to seed stage) startups, wearing multiple hats and gaining insights into EdTech (B2B SaaS), Healthcare, and Supply Chain verticals. </p>
            {/* <p className='text-md text-gray-600 dark:text-gray-300'>
            Before that, I interned at 3 (pre-seed to seed stage) startups, wearing multiple hats and gaining insights into EdTech (B2B SaaS), Healthcare, and Global Logistics verticals. 
            </p> */}
            <p className='text-md text-gray-600 dark:text-gray-300'>
              I'm also a <a href="https://www.406ventures.com/files/406%20Ventures%20-%20Student%20Fellows%20Program%20Overview%20(2022).pdf" target="_blank" className='text-grey-700 dark:text-grey-300
            text-green-800 dark:text-blue-300'><b>.406 Ventures Fellow</b></a>, part of a selective and prestigious fellowship made of the best student founders in the nation.</p>
            {/* Last fall I spent a semester abroad taking advanced CS courses
            in Budapest, Hungary, while exploring Europe: (Here's a photo of me in front of the Big Ben in London!) </p>
            <p className='text-md text-gray-600 dark:text-gray-300'> */}
            <p className='text-md text-gray-600 dark:text-gray-300'>
            At college, I found and lead organizations in the VC, consulting, & AI space, and compete on the men's varsity golf team where I serve as Captain.</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>

            </p>
            <p className='text-md text-gray-600 dark:text-gray-300'>
            To connect with me, reach out by email below or book a meeting at the bottom right corner ↘️</p>
            <br/>
            <a href="mailto: jinggeoffrey@gmail.com" className="inline-block px-6 py-3 border-transparent text-base 
            font-medium rounded-md text-white bg-indigo-600 
            hover:bg-indigo-700 md:text-md">
              <button className="outline-button-sm">Contact Me 👈</button>
          </a>
                <br/>
            <br></br>
            <p className='text-l text-gray-600 dark:text-gray-300'>Fun Stats About Me:</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>Current age: <Age1/></p>
            <p className='text-md text-gray-600 dark:text-gray-300'>Fastest Typing Speed: 125 wpm</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>Number of sports I play: 12</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>I have a <a href="https://www.linkedin.com/in/albert-jing/" target="_blank" className='text-grey-700 dark:text-grey-300
            text-blue-400 dark:text-blue-400'><b>brother</b></a> who is 1 minute older (identical twin 😉)</p>
            <p className='text-md text-gray-600 dark:text-gray-300'>Most chicken mcnuggets ordered at once: 300 for my 13th birthday</p>
        </div>
        {/* <img src="http://drive.google.com/uc?export=view&id=1RFg0RarI8Sm1wbH1VNJw6lTTqqOuXLQt" */}
        {/* <img src="http://drive.google.com/uc?export=view&id=1Lh2WY5Dxvw5VzfHmVBA91MPhn0N01eAA" */}
        {/* check this website to get public url link from google drive get shareable link: https://www.labnol.org/embed/google/drive/ */}
        {/* <img src="https://lh5.googleusercontent.com/gom5AuCSe5rpXi3fshPSTOQtOAYqKgBVKK6ANcYj38BsRUC59EfTBUvZlaP_ogeK1KU=w2400" */}
        {/* <img src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQizeQix6UBJT8OVTFDRMO5lekBe5XyNMAC7rTsCT8c2R5nOt6QFS5IxHJ05K4y7ZccUXGupJGQ1rm-ehl8e5vlDF8gtA=s1600" */}
        // <img src='https://lh3.googleusercontent.com/drive-viewer/AEYmBYQksAXCHyg3SRnBuENrzYWWNxO3hKLIYHLiHkIHLMFlvROEMNVQyQmMY8LeqcSGp90LLLb4LKItYeMlBNuFzkeg8Ju1Ig=s1600'
        alt="Geoffrey Jing" className='w-full md:w-6/12 rounded-lg object-cover'/>
    </div>
  )
}

export default About