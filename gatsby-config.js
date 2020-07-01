module.exports = {
  siteMetadata: {
    title: `MakeUC 2020`,
    siteUrl: `https://makeuc.io`,
    description: `MakeUC 2020: Discovering the beyond!`,
    registration: {
      schools: [
        `Arizona State University`,
        `Auburn University`,
        `Boston University`,
        `Bowling Green State University`,
        `California Institute of Technology`,
        `Carleton University`,
        `Carnegie Mellon University`,
        `Case Western Reserve University`,
        `Clemson University`,
        `Cleveland State University`,
        `Colorado State University`,
        `Columbia University`,
        `Concordia University`,
        `Cornell University`,
        `Dartmouth College`,
        `Drexel University`,
        `Duke University`,
        `George Washington University`,
        `Georgia Institute of Technology`,
        `Harvard University`,
        `Henry Ford College`,
        `Illinois State University`,
        `Johns Hopkins University`,
        `Kent State University`,
        `Loyola University Chicago`,
        `Massachusetts Institute of Technology`,
        `McGill University`,
        `McMaster University`,
        `Miami University`,
        `Michigan State University`,
        `New York University`,
        `North Carolina State University`,
        `Northeastern University`,
        `Northwestern University`,
        `Ohio State University`,
        `Oregon State University`,
        `Pennsylvania State University`,
        `Purdue University`,
        `Rice University`,
        `Rutgers University`,
        `Stanford University`,
        `Stony Brook University`,
        `Syracuse University`,
        `Tufts University`,
        `University at Buffalo`,
        `University of Akron`,
        `University of Alberta`,
        `University of Arizona`,
        `University of British Columbia`,
        `University of Calgary`,
        `University of California, Berkeley`,
        `University of California, Davis`,
        `University of California, Irvine`,
        `University of California, Los Angeles`,
        `University of California, San Diego`,
        `University of California, Santa Barbara`,
        `University of Central Florida`,
        `University of Chicago`,
        `University of Cincinnati`,
        `University of Colorado Boulder`,
        `University of Connecticut`,
        `University of Dayton`,
        `University of Delaware`,
        `University of Florida`,
        `University of Houston`,
        `University of Kentucky`,
        `University of Louisville`,
        `University of Massachusetts Amherst`,
        `University of Michigan`,
        `University of Minnesota Twin Cities`,
        `University of Notre Dame`,
        `University of Pennsylvania`,
        `University of Pittsburgh`,
        `University of Southern California`,
        `University of Tennessee`,
        `University of Texas at Austin`,
        `University of Texas at Dallas`,
        `University of Toledo`,
        `University of Toronto`,
        `University of Utah`,
        `University of Victoria`,
        `University of Virginia`,
        `University of Washington`,
        `University of Waterloo`,
        `University of Wisconsin-Madison`,
        `Vanderbilt University`,
        `Virginia Tech`,
        `Washington University in St. Louis`,
        `Wright State University`,
        `Xavier University`,
        `Yale University`
      ],
      majors: [
        `Aerospace Engineering`,    
        `Chemical Engineering`,
        `Civil Engineering`,
        `Computer Engineering`,
        `Computer Science`,
        `Cyber Security`,
        `Electrical Engineering`,
        `Engineering Science`,
        `Engineering Technology`,
        `Environmental Engineering`,
        `Fine Arts`,
        `Game Development`,
        `Graphic Design`,
        `Human-Computer Interaction`,
        `Industrial Design`,
        `Industrial Engineering`,
        `Information Technology`,
        `Mechanical Engineering`,
        `Metallurgic Engineering`,
        `Petroleum Engineering`,
        `Software Development`,
        `Software Engineering`
      ],
      degrees: [
        `Bachelor's`,
        `Master's`,
        `Doctorate`,
        `High School`
      ],
      ethnicities: [
        `American Indian or Alaska Native`,
        `Asian`,
        `Black or African American`,
        `Native Hawaiian or Other Pacific Islander`,
        `White`,
        `Other`,
        `Prefer not to answer`
      ],
      genders: [
        `Male`,
        `Female`,
        `Other`,
        `Prefer not to answer`
      ],
      hackathonsAttended: [
        `This is my first hackathon!`,
        `1`,
        `2`,
        `3`,
        `4 or more`
      ]
    },
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
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
