import React from 'react';
import './About.css';
import Button from '../components/Button';

export default function About() {
  const btnData = { label: 'Contact Me', link: '/contact' };

  return (
    <div className='about-container'>
      <section className='about-scrol-area'>
        <h2 className='about-intro'>Welcome to my website</h2>
        <h3 className='about-sub-intro'>
          A web address created so that you can know my work and something about me...
        </h3>
        <div className='bio-content'>
          <h1 className='about-heading'>About me </h1>

          <span className='curriculum'>
            <a
              href='https://res.cloudinary.com/ygiah/image/upload/v1587729226/Documents/CV-Eduardo-Developer.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              CV Preview
            </a>
          </span>

          <p>
            My developer skills range from front end technologies like HTML, CSS, Javascript and React to back end with
            Node.js, Express, SQL and NoSQL databases such as MySQL and Mongodb.
          </p>
          <p>
            My name is Eduardo and I am a Web Developer, born and raised in Lisbon Portugal, but living in Royal
            Leamington Spa UK for the last 6 years. <br />
            Three years ago I found myself experimenting on creating a website and a tremendous passion/obsession for
            learning code, emerged. <br />
            My professional dream has since then changed to become a highly-skilled, successful software developer.
            <br />
            Although as you may have noticed I have been focusing my attention into Javascript and related technologies,
            I have the desire of learning other programming languages as well.
          </p>
          <p>
            Before this, I have had a highly successful career in the hospitality sector, working my way up to Head
            Sommelier and Restaurant Director in high-end luxury venues. A career that was full of memorable moments and
            achievements like being awarded Sommelier of the year by Wine Magazine or placing in the top 3 for 3
            consecutive years in the most prestigious national sommelier competition in my country. My long and
            successful career in hospitality will hopefully be very useful in terms of transferable soft skill to my new
            and ambitious professional goals.
          </p>
          <p>
            Since I discover this passion for coding, I've been learning as much as I can from online courses, tutorials
            and numerous websites from Stack Overflow to W3Schools or MDN. Finally, the opportunity arose with the first
            <span> </span>
            <a
              href='https://www.birmingham.ac.uk/postgraduate/courses/cpd/coding-boot-camp.aspx'
              className='uni-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              coding Bootcamp in the UK promoted by Trilogy at the University of Birmingham
            </a>
            . Excited with the perspective of having structured and intense learning, I immediately enrolled and
            completed the course in March 2020 with an excelent academic average.
            <a
              href='https://res.cloudinary.com/ygiah/image/upload/v1587730337/Documents/Coding_Boot_Camp_Certificate.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Certificate.
            </a>
          </p>
          <p>
            In this Portfolio website, I am posting some of my freelance work to small businesses and also some small
            demo projects that demonstrate the use of different technologies, and hopefully will give a glampse of my
            skills to future employers, possible clients or recruiters.
            <br />
            If that's you, I will be looking forward to hearing from you.
          </p>
          <div className='contact-btn'>
            <Button btn={btnData} />
          </div>
        </div>
      </section>
    </div>
  );
}
