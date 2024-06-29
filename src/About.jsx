// About.jsx
import React from 'react';
import profile from './assets/images/profile.jpg';

function About() {
  return (
    <div className="flex flex-col ">
      {/* About page content */}
      <div className="w-full lg:w-11/12 flex flex-col items-center justify-center h-full bg-gray-50">

        <div className="w-full lg:w-8/12 px-10 flex space-y-10 flex-col lg:space-y-0 lg:space-x-0 items-start justify-center">

          <div className="lg:py-10 lg:mt-10">
            <img src={profile}
              alt="profile"
              className="rounded-md lg:w-full  flex-shrink-0" />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:w-full">
            <div className="flex flex-col items-start lg:w-full">
              <h1 className="text-3xl font-bold lg:w-full">Something about Me</h1>

              <div className="flex flex-col xl:flex-row lg:w-full text-justify pb-5">
                <p className="text-gray-500 italic max-w-xl my-5 md:my-10">
                  Growing up in China, I was what you'd call a perfect Chinese model. Just what every parent wanted! I did really well in school, got a business degree, and even went abroad for my master's and started a Ph.D.
                  <br /> <br />
                  <span className="text-gray-400 font-semibold">Then I rebelled!</span><br />
                  But while doing research, I often wondered if this was really what I wanted. When the pandemic hit, I had to stay in China longer than expected. This gave me time to think about what I really wanted to do. Business and finance were interesting, but they felt too theoretical, too removed from real-life practice for me when it came to the area I chose to study.
                  <br /> <br />
                  <span className="text-gray-400 font-semibold">Trying new areas out!</span>  <br />
                  So, I tried something new. With my good English skills, I spent three years teaching. At the same time, I realized how important coding is for the future, so I started learning online. I took courses, learned programming languages, and got some certificates from Microsoft.
                  <br /> <br />
                  <span className="text-gray-400 font-semibold">Teaching or coding?</span><br />
                  Confronting with two new paths for my future, I asked myself, "Do I prefer teaching or coding?"  I'd got time on my hand, allowing to think carefully.  When I built my first few projects, I knew coding was for me. I enjoyed it so much more than teaching or studying business theories.

                  Now, I've decided to focus on IT. I am so driven to know more and more about It, an internship will give me the kick start into the tech world, a world where I belong and love being a part of! This is the new path I've chosen, and I'm ready for it.
                </p>
              </div>


            </div>

          </div>

        </div>

      </div>

    </div>
);
  }
export default About;
