import React from 'react'
// import Typewriter from 'react-simple-typewriter'
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
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


function HeroSection() {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
        {/* <h2 className="hidden sm:block">
                  I like&nbsp;
                </h2>
                <h1 className="hidden sm:block">
                  <Typewriter
                      options={{
                        strings: [
                          '<b>making cool stuff.</b>',
                          '<b>solving problems.</b>', 
                          '<b>learning new things.</b>', 
                          '<b>meeting people.</b>',
                          '<b>developing apps.</b>', 
                          '<b>eating good food.</b>',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 20,
                        pauseFor: 1500,
                        cursor: "|"
                      }}
                    >
                    </Typewriter>
                </h1> */}
        <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 
       text-indigo-600 font-semibold dark:text-indigo-500'>
         <Typewriter 
              options={{
                strings: [
                  '<b>Hi, my name is Geoffrey.<b>',
                  '<b>Welcome to my website!',
                  '<b>Click the top right corner'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 22,
                pauseFor: 1500,
                cursor: "|"
              }}
              >
                </Typewriter>
         </h1>
        <p className='text-md md:text-xl max-w-md mb-5 text-gray-600 dark:text-gray-300'>I'm a 
        CS major at Carleton College pursuing internship opportunities for Fall 2022 and Spring/Summer 2023. Feel free to take a look around
        and check out my work!</p>
        {/* <p className='text-md md:text-xl max-w-md mb-5 text-gray-600 dark:text-gray-300'> Current Age: <Age /></p> */}
        <div className='space-x-8'>
            <a href="#works" className='inline-block px-5 py-3 border-transparent text-base 
            font-medium rounded-md text-white bg-indigo-600 
            hover:bg-indigo-700 md:text-md'>seeProjects()</a>
            {/* <a href="https://doc-00-9k-docs.googleusercontent.com/docs/securesc/7r3trrirvna4v62el7vs45b0dltatqif/a9biomcl6cjq0p2h7hh5sekan6qnsi7d/1659595275000/04931596145407624755/11450914598069142464/1PoOTV8Cdsz_00Ex2P7lxRY4xHhv1mPAi?e=view&ax=AI9vYm7egWzmR-ndDcU3YXC_U4_zelNJKYoXWBYXwHiv5xC4aZOsJMoPX1e0SpcY51kCMQ4xRKX2NGXdENjb7tbkfxj_U7o4Iz8jaDyjlEaBMbckyavgQlqgJLoL0xg-mTzDu4roj2SD8KSMT5Gm1yaBljfR93ME_od_im8KEiptNMCOihezXfFHFJb9ArrTQZlTzuP7xupLNYsV7ADO_7OiXRB2-1hg1dFnqISh5o3g22QxRDXTNqiUluYqW7zrKZHQTw7Ay_jaAckRC7oj_os6z5pT7BSmf9BI0_qFWZalXIPnrGR6eHiNaHesfeX9N_IYdvpadVG9L62c29vSMn-xcWBLio_qmGWpy5tWYyv44UKxUouvfW4i_aGEjNqeg1ehL-leQJEMa56FzTzi26ntT1eV31Q9dqRzrty_OrjSo5kIymrWzb57a76TLP_xoGig8gHtqhVj4bZbCSyfcSNOyyQM05hFriNTaizW1CyyasDrL26sOMMNq9ZryJBYbES83tu6ZB8-A15cDGgX_Rbiv3PfASrA5DWWvh_8QfAMJcPdkp_fn7qKHSS5B6OpboHYUwRoVsC9CAEaC2Ofogb_lO26XToChg67onDW7vkKGNJtJdbrPIIpwohOd9JwX54hGGb6HrUWDBgtUsIU4-jewE6E4APX14c81WMRB_bYMSDQtID7ZTwKmGok767MxJiYu8GVgpTFzzOMya2IuJP9alvoWrN7pbo2ZmWfa0GXK9ou85DfrymTFLlfvdIZY6jNnZiR7OY_Wfi57PcHKOEKnUyTWKT-Bj1ie-ly_rJ-D6_xU9tCdH-BH3AEMgj0VeaQuzHRu2i1UHZvVWfX2gW00OsxZueg0kpj6XqtFFrGlW5a0WcrHI0YqRwS-3l1T-GL&uuid=858439e0-393f-4e00-b124-b912c088ab92&authuser=1&nonce=a6fbc5ceib3j6&user=11450914598069142464&hash=1g48frm8jq6clq1mrdsbohfo3ncamfvg" className='inline-block px-8 py-3 border-transparent text-base  */}
            <a href="src/data/resume_geoffrey.pdf" target='blank' className='inline-block px-5 py-3 border-transparent text-base 
            font-medium rounded-md text-white bg-indigo-600 
            hover:bg-indigo-700 md:text-md'>seeResume()</a>
          </div>
        </div>
   </div>
  )
}
// https://drive.google.com/file/d/1PoOTV8Cdsz_00Ex2P7lxRY4xHhv1mPAi/view
export default HeroSection