module.exports = {
  siteMetadata: {
    title: `MakeUC 2020`,
    siteUrl: `https://makeuc.io`,
    description: `MakeUC is a virtual 24 hour hackathon organized by the IEEE@UC organization`,
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
        title: `Education`,
        content: `The Education track aims to improve the accessibility of information and enhance the learning experiences of students at any level. These projects include but are not limited to increasing access to information and technologies related to space science, and providing an improved learning experience for students with a variety of learning styles.`
      },
      {
        title: `Space Exploration`,
        content: 'The Space Exploration track aligns with the main theme of this year’s hackathon. This track includes any technologies aimed to enhance or otherwise improve any aspect of space exploration.'
      },
      {
        title: `Health Technology`,
        content: 'The Health Techno logy track aims to make improvements to a variety of health technologies including but not limited to medical imaging, healthcare technology systems, and interpreting health-related data. This track also aims to improve accessibility to medical technology improvements.'
      },
      {
        title: `Social Responsibility`,
        content: 'The Social Responsibility track encompasses technologies concerning social and economic inequality as well as reducing environmental impact. This track aims to increase overall social responsibility and make improvements on the current systems we have in place.'
      }
    ],
    faq: [
      {
        question: `What is MakeUC?`,
        answer: 'At MakeUC, we focus on gathering a diverse community from across the United States and Canada to collaborate on building projects that can help define the future. We are inviting hundreds of students from across North America, to help them bring their big ideas to life. Our team works year-round to provide a welcoming atmosphere to all of our participants. Unleash your creativity and we will handle the rest! Make big ideas a reality at MakeUC! All students are welcome and attendance is completely free. MakeUC is a great opportunity to meet fellow students as well as our sponsoring partners! Come show off your skills, step out of your comfort zone, and build awesome hacks!'
      },
      {
        question: `What is a hackathon?`,
        answer: `A hackathon is an event where student developers bring their passion for technology to create a project in 24 hours. It’s a chance to collaborate and create something unique in any number of forms – an app, a robot, a website! You will hopefully learn something new along the way in our high energy, engaging environment!`
      },
      {
        question: `How much does it cost?`,
        answer: 'Nothing! The entire event is free for any student, with tools and prizes all included.'
      },
      {
        question: 'What if I\'m new to hackathons?',
        answer: 'Wonderful! MakeUC is open to all skill levels, beginners to veterans. There’s nothing we love more than helping our hackers learn something new while they build something cool!'
      },
      {
        question: 'How do I form teams?',
        answer: 'Teams are formed at the event but you\'re free to organize before if all participants are registered.'
      },
      {
        question: 'What if I have a slow internet connection?',
        answer: 'Plan ahead! Inform your team members about the situation and try to collaborate as much as possible. Take over the coding share of the projects and let others do heavy multimedia; distribute the work! If you don’t have a team, then contact us.'
      },
      {
        question: 'Will I be able to meet sponsors?',
        answer: 'All sponsors will receive your resume packets. Some of our sponsors will be doing live presentations which every participant is encouraged to join. These presentations will be the interface to meet them!'
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
