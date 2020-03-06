import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
  const cardData = [
    {
      imgSrc: 'https://res.cloudinary.com/ygiah/image/upload/v1571430754/bootcamp/Password-Generator/PG-img.png',
      altTag: 'Link to GitHub repository for Password Generator App',
      cardLabel: 'Password Generator App',
      gitHubLink: 'https://github.com/Eduardo-YGIAH/Password-Generator',
    },
    {
      imgSrc:
        'https://res.cloudinary.com/ygiah/image/upload/v1574161320/bootcamp/my_daily_planner/Daily-planner-Preview.png',
      altTag: 'Link to GitHub repository for Daily Planner App',
      cardLabel: 'Daily Planner App',
      gitHubLink: 'https://github.com/Eduardo-YGIAH/Daily-Planner',
    },
    {
      imgSrc:
        'https://res.cloudinary.com/ygiah/image/upload/v1574697777/bootcamp/New%20York%20Times%20Search%20App/new-your-times-search.png',
      altTag: 'Link to GitHub repository for New York Times Article Search ',
      cardLabel: 'News Article Search App',
      gitHubLink: 'https://github.com/Eduardo-YGIAH/NYTimes-News_Search',
    },
    {
      imgSrc: 'https://res.cloudinary.com/ygiah/image/upload/v1575316861/bootcamp/demo_pdf-creator.gif',
      altTag: 'Link to repository for GitHub User Profile Pdf Creator',
      cardLabel: 'GitHub User Profile - Pdf Creator',
      gitHubLink: 'https://github.com/Eduardo-YGIAH/gitHub-user_profile-pdf_creator',
    },
    {
      imgSrc:
        'http://www.tutorials.yougetitathome.com/310e5f54054b/Image%2525202020-03-06%252520at%2525201.08.39%252520pm.png',
      altTag: 'Link to repository for Class Attendance app',
      cardLabel: 'Class Atendance App',
      gitHubLink: 'https://github.com/Eduardo-YGIAH/Student-Lesson-Register',
    },
    {
      imgSrc: 'https://res.cloudinary.com/ygiah/image/upload/v1576112211/bootcamp/express_note-taker.png',
      altTag: 'Link to repository for Note-Taker with Express',
      cardLabel: 'Note-Taker with Express',
      gitHubLink: 'https://github.com/Eduardo-YGIAH/Note-Taker_Express',
    },
    {
      imgSrc:
        'https://res.cloudinary.com/ygiah/image/upload/v1577747087/bootcamp/employee_tracker/Screenshot_2019-12-30_at_23.01.25.png',
      altTag: 'Link to repository for Employee Tracker App',
      cardLabel: 'Employee Tracker',
      gitHubLink: 'https://github.com/Eduardo-YGIAH/Employee-Tracker',
    },
    {
      imgSrc:
        'https://res.cloudinary.com/ygiah/image/upload/v1578946239/bootcamp/Screenshot_2020-01-13_at_20.08.43.png',
      altTag: 'Link to repository for Eat-Da Burger App',
      cardLabel: 'Eat-Da Burger App',
      gitHubLink: 'https://github.com/Eduardo-YGIAH/burger',
    },
    {
      imgSrc: 'http://www.tutorials.yougetitathome.com/06926297a3e7/Screenshot%2525202020-03-06%25252013.40.23.png',
      altTag: 'Link to repository for Meetapp',
      cardLabel: 'Meetapp',
      gitHubLink: 'https://github.com/Eduardo-YGIAH/meetapp',
    },
    {
      imgSrc: 'https://res.cloudinary.com/ygiah/image/upload/v1581202991/bootcamp/Screenshot_2020-02-08_23.00.59.png',
      altTag: 'Link to repository for Fitness Tracker',
      cardLabel: 'Fitness Tracker',
      gitHubLink: 'https://github.com/Eduardo-YGIAH/Fitness-tracker',
    },
    {
      imgSrc:
        'http://www.tutorials.yougetitathome.com/d472456176ef/Image%2525202020-03-06%252520at%2525203.00.49%252520pm.png',
      altTag: 'Link to repository for Budget Tracker',
      cardLabel: 'PWA - Budget Tracker',
      gitHubLink: 'https://github.com/Eduardo-YGIAH/budget-tracker',
    },
    {
      imgSrc:
        'http://www.tutorials.yougetitathome.com/cadf297bc928/Image%2525202020-03-06%252520at%2525203.04.25%252520pm.png',
      altTag: 'Link to repository for Employee Directory',
      cardLabel: 'React App - Employee Directory',
      gitHubLink: 'https://github.com/Eduardo-YGIAH/employee-directory',
    },
  ];

  return (
    <div className='portfolio-container'>
      <h1 className='portfolio-heading'>Portfolio</h1>
      <div className='portfolio-scrol-area'>
        {cardData.map(card => (
          <a
            className='card'
            key={cardData.indexOf(card)}
            href={card.gitHubLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='card__img' src={card.imgSrc} alt={card.altTag} />
            <div className='card__label'>
              {card.cardLabel}
              <span>
                <img
                  className='card__icon-link'
                  src='https://res.cloudinary.com/ygiah/image/upload/v1574699440/bootcamp/GitHub-icon-white.svg'
                  alt='link to gitHub repository'
                />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
