import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  const items  = [
    {
      title: "2000",
      cardTitle: "My adventure with computers begins",
      cardSubtitle:
        "How I got my love for computers",
      cardDetailedText: `In the early 2000's my family got our first computer. It was a Windows 98 machine that we used for basic tasks, such as word processing and playing games. I was fascinated by it and would spend hours playing games and learning how it ran. I was hooked.

      I played games that would come with cereal boxes, such as the original Roller Coaster Tycoon and the Game of Life, in addition to the Sims. I vividly remember getting a game called "Barbie: Magic Genie Adventure" and being enthralled with how it came with a genie bottle that I was able to interact with in the real world, but that changed things in-game. I spent a lot of time trying to figure out how it worked and how I could make it do different things. I was fascinated by the idea of being able to interact with a computer in a way that was not just through a keyboard and mouse.`
    },
    {
      title: "2002-2010",
      cardTitle: "Neopets and HTML/CSS",
      cardSubtitle:
        "My first exposure to coding",
      cardDetailedText:  `Having access to the internet introduced me Neopets. It provided me with a virtual world and ended up being my first exposure to HTML and CSS. I would spend hours on Neopets, focusing on creating a pet page with graphics, text boxes, and whatever my heart desired.
      
      In addition to Neopets, I also spent time on websites such as Tumblr and MySpace, continuing to work with HTML and CSS. I would create my own websites and create blog templates for others. I was fascinated by the idea of being able to create something that others could use and enjoy.`,
    },
    {
      title: "2010",
      cardTitle: "Diploma in Computer Aided Design",
      cardSubtitle:
        "Obtaining a College Certificate while in High School",
      cardDetailedText: `While in high school, due to my exemplar performance in our computer classes, I was offered the opportunity to take a course in Computer Aided Design (CAD). Starting in 10th grade, I was able to take this course alongside my other studies and, by the time I had graduated, I had earned a college certificate. This was a great accomplishment for me, and I was very proud of myself for having been able to do it.`,
    },
    {
      title: "2012",
      cardTitle: "Looking to the Future",
      cardSubtitle: "Finishing my Certificate and Graduating High School",
      cardDetailedText: `In 2012, I graduated from high school. This was a conflicting time in my life because I was dealing with the pressures of whether I wanted to continue into tech or to take the pressure I was given by others to pursue a career in healthcare. 
      
      Inevitably, the pressure of my peers and family had gotten to me. I decided to attend a local college while working to pursue a career in healthcare, specifically as a Registered Dietitian. In this time, I was fulfilling my passion of technology continuing the blog templates I was working on in my earlier days, in addition to building websites.`,
    },
    {
      title: "2012-2016",
      cardTitle: "Focusing on my Studies",
      cardSubtitle: `Working and going to college`,
      cardDetailedText: `While I was lucky to have parents that allowed me to live at home while I attended college, it was still necessary that I worked to pay for my own expenses and to subsidize the cost of my education. In this time, I worked in roles such as dietary aide in a hospital, front-end lead for local businesses, and I pursued freelancing in positions such as graphic design and web development.`,
    },
    {
      title: "2017-2019",
      cardTitle: "Another Change in Plans",
      cardSubtitle: `A few years into my degree, I change my major`,
      cardDetailedText: `After spending the last few years working and going to school, I had applied to a prestigious program, Dietetics. The application process was tedious and I was one of the few candidates that was accepted into the final stages of the interview process. I was proud of myself for making it this far, but was also conflicted because this didn't feel like the right path. Inevitably, I ended up making a pivot and decided to pursue a career as a Registered Massage Therapist. I felt this was a better option because it exercised my ability to problem solve at a deeper level and it allowed me to diversify the types of clients I could work with.`,
    },
    {
      title: "2020",
      cardTitle: "Reflecting on my Journey",
      cardSubtitle: `Giving into my passion for technology`,
      cardDetailedText: `Throughout my time working as a massage therapist, I continued to feel like there was an aspect of my life that didn't feel right. While I enjoyed the topic of healthcare and it was something I was good at, it didn't feel there would be any role that would work for me in the field. Nothing felt like it crossed all the boxes I wished on. As silly as it sounds, I ended up taking career test after career test, trying to find something that would fit. I would continually get the same type of results: IT, software development, web development, etc. Instead of brushing it off this time, I decided to look into that path.`,
    },
    {
      title: "2021",
      cardTitle: "A New Beginning",
      cardSubtitle: `The learning process begins`,
      cardDetailedText: `It took me a while to wrap my head around this change. I had spent so much energy and time working towards healthcare and now I was going to have to start over. I decided to take a leap of faith and enrolled in a coding bootcamp. I was nervous, but I was also excited. I was excited to be able to learn something new and to be able to apply my knowledge to something that I was passionate about. This bootcamp was a great experience and it felt like I was finally on the right path. Learning to code was a challenge, but, as frustrating as it was, it was something I looked forward to every day.`,
    },
    {
      title: "2022 to Present",
      cardTitle: "Looking to the Future",
      cardSubtitle: `Continuing into the next phase of my journey`,
      cardDetailedText: `This is the stage that I'm currently in. Every day I strive to become a better developer, to continue to learn, and to continue to grow. While it is a tumultuous time in tech, as well as the world, I am excited to continue to build the skills I need to be able to contribute to the tech community. I regularly search for open source projects to contribute to, projects to build to showcase my skills, and network with others within the community. For the first time in my working life, I feel like I am on the right path and I look forward to continuing to grow and learn.`,
    },
  ]

    return (
      <div style={{
        width: "60%",
        height: "fit-content",
        margin: "auto",
      }}>
        <Chrono items={items} mode="HORIZONTAL"
        theme={{
          primary: '#096BDE',
          secondary: '#DDF1FF',
          cardBgColor: '#F4FAFF',
          cardForeColor: '#00153C',
          titleColor: '#054DA7',
          titleColorActive: '#02367D',
        }} />
      </div>
    )
};

export default Timeline;