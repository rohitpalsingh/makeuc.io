module.exports = {
  siteMetadata: {
    title: `MakeUC 2020`,
    siteUrl: `https://makeuc.io`,
    description: `MakeUC 2020 is a 24-hour hackathon hosted by IEEE at University of Cincinnati!`,
    tracks: [
      {
        title: `EDUCATION`,
        content: `Education technology aims to improve the accessibility of information to students at any level. 
        These projects include any sort of technology that enhances the learning experiences of students.`
      },
      {
        title: `SPACE EXPLORATION`,
        content: `Space exploration technology aligns with the main theme of MakeUC 2020! This track includes any 
        technologies aimed to enhance or otherwise improve any aspect of space exploration.`
      },
      {
        title: `HEALTH TECHNOLOGY`,
        content: `Health technology aims to make improvements to a variety of health technologies including but 
        not limited to medical imaging, healthcare technology systems, and interpreting health-related data.`
      },
      {
        title: `SOCIAL RESPONSIBILITY`,
        content: `Technologies for social responsibility encompasses technologies concerning social and economic inequality as well 
        as reducing environmental impact. This aims to increase overall social responsibility.`
      }
    ],
    faq: [
      {
        question: `WHAT IS A HACKATHON?`,
        answer: `A hackathon is an event where student developers bring their passion for technology to 
        create a project in 24 hours. It’s a chance to collaborate and create something unique in any number of forms – 
        an app, a robot, a website! You will hopefully learn something new along the way in our high energy, engaging environment!`
      },
      {
        question: `WHEN IS MAKEUC?`,
        answer: `This year, we will be extending MakeUC to 24 hours! It will start on October 3rd and end on the 4th!`
      },
      {
        question: `HOW MUCH DOES IT COST?`,
        answer: 'Nothing! The entire event is free for any student, with tools and prizes all included.'
      },
      {
        question: 'WHAT IF I\'M NEW TO HACKATHONS?',
        answer: 'Wonderful! MakeUC is open to all skill levels, beginners to veterans. There’s nothing we love more than helping our hackers learn something new while they build something cool!'
      },
      {
        question: 'HOW DO I FORM TEAMS?',
        answer: 'Teams are formed at the event but you\'re free to organize before if all participants are registered.'
      },
      {
        question: 'WHAT IF I HAVE A SLOW INTERNET CONNECTION?',
        answer: 'Plan ahead! Inform your team members about the situation and try to collaborate as much as possible. Just make sure to download all developer tools in advance!'
      },
      {
        question: 'WILL I BE ABLE TO MEET SPONSORS?',
        answer: 'Our sponsors will be doing live presentations and a virtual expo which every participant is encouraged to join!'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
