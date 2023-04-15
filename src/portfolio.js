/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kaustabh Ganguly",
  title: "Hi, I'm Kaustabh ",
  subTitle: emoji(
"A skilled data engineer adept in Python, AWS Redshift, S3, SQL, and Control-M 🐍☁️🔧. Embarking on an AI Master's at IIT Madras in August 🎓🤖. Passionate about guitar, digital art, and music production 🎸🎨🎶. Hobbies include game creation, app development, and exploring ML and data analysis 🎮📱💻🧩."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-S3wjzDK4yyheyPJ1OhsMzInSMAWcvMJ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/stabgan",
  linkedin: "https://www.linkedin.com/in/stabgan/",
  gmail: "kaustabhganguly@gmail.com",
  gitlab: "https://gitlab.com/stabgan",
  // facebook: "https://www.facebook.com/stabgan",
  medium: "https://medium.com/@stabgan",
  stackoverflow: "https://stackoverflow.com/users/9267288/kaustabh-ganguly",
  instagram: "https://www.instagram.com/stabgan/",
  twitter: "https://twitter.com/stabgan",
  kaggle: "https://www.kaggle.com/stabgan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "The Art of My Craft",
  subTitle: "A SAGACIOUS DATA ENGINEER INFUSED WITH A PASSION FOR AI & ML",
  skills: [
    emoji(
      "⚡ The intricate dance of designing, developing, testing, and debugging existing and established ETL pipelines"
    ),
    emoji(
      "⚡ The alchemy of constructing back-end views in Redshift DB for the tableau analytics dashboards"
    ),
    emoji(
      "⚡ The mastery of Agile methodologies, Control-M, Amazon Redshift, S3, CICD, and the secrets beyond"
    ),
    emoji(
      "⚡ A virtuoso in SQL, Red Hat Linux, Python, and the myriad tools and IDEs that forge the digital realm"
    )
  ],
  // https://fontawesome.com/icons?d=gallery
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fas fa-chevron-circle-right"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fas fa-chevron-circle-down"
    },

    {
      skillName: "AI",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "ML",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "DL",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Research",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "Control-M",
      fontAwesomeClassname: "fas fa-tasks"
    },
    {
      skillName: "IoT",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Blockchain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Photoshop",
      fontAwesomeClassname: "fas fa-photo-video"
    },
    {
      skillName: "GarageBand",
      fontAwesomeClassname: "fas fa-music"
    },
  ]
  ,
  display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kalyani Government Engineering College",
      logo: require("./assets/images/kgec"),
      subHeader: "Bachelor of Technology - BTech, Information Technology",
      duration: "2016 - 2020",
      desc: "Grade: 8.15/10",
      descBullets: [
        "Member of the NOVA - Astronomy club of KGEC, embracing the celestial wonders.",
        "Participant in the Les Quizerables - Quiz club of KGEC, challenging the intellect.",
        "Contributor to the KeyGEn Coders - Coding club of KGEC, honing digital craftsmanship.",
        "Recipient of the Swami Vivekananda Merit Cum Means Scholarship by the Government of West Bengal for four years.",
        "Beginning with a College GPA of 7.12 in the first semester, progressing steadily to 9.14 in the 8th semester, and achieving an overall aggregate SGPA of 8.15 upon graduation."
      ]
    },
    {
      schoolName: "Ramakrishna Vivekananda Mission Vidyabhawan (HS Unit)",
      logo: require("./assets/images/logo2.png"),
      subHeader: "Higher Secondary School",
      duration: "2014 - 2016",
      desc: "80% in WBCHSE 2016",
      descBullets: [
        "Secured the 3rd prize in Adamas Science Camp by crafting a steam put put boat from modest materials, costing under a dollar.",
        "Attained the rank of 3450 among 100k+ participants in WBJEE 2016."
      ]
    },
    {
      schoolName: "Ramakrishna Vivekananda Mission",
      logo: require("./assets/images/logo.png"),
      subHeader: "Secondary School",
      duration: "2012 - 2014",
      desc: "Achieved 89% in WBBSE 2014",
      descBullets: [
        "Ranked zonal 2 and West Bengal all-over 46 in PNTSE-2014, showcasing intellectual aptitude.",
        "Distinguished as the topper in the 3-month program “Computer Fundamental and Windows, Audacity, Internet, Photoshop, and Flash” from Brainware Computer Academy in 2014, earning the title of “Excellent”."
      ]
    },
    {
      schoolName: "Gopal Govinda Academy",
      logo: require("./assets/images/logo2.png"),
      subHeader: "High School",
      duration: "2000 - 2012",
      desc: "Studied from KG-1 to 8th (English Medium) in Gopal Govinda Academy",
      descBullets: [
        "Earned Diploma with first division and distinction each year in Pracheen Kala Kendra, Chandigarh up to Sangeet Bhushan part-1 in Vocal Classical, Rabindra Sangeet, and Najrul Geeti, embracing the tradition of musical arts.",
        "Received Senior Diploma - 1 with first division in Sarbabharatiya Charu-O-Karukala Niket, upon the completion of the 4th year in Fine Arts, showcasing artistic dedication."
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section,
  experience: [
    {
      Stack: "Python/OOP", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL/Database/ETL/Control-m",
      progressPercentage: "85%"
    },
    {
      Stack: "System/Database Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud/AWS/Azure/GCP",
      progressPercentage: "80%"
    },
    {
      Stack: "ML/DL/AI",
      progressPercentage: "65%"
    },
    {
      Stack: "IOT/Research",
      progressPercentage: "50%"
    },
    {
      Stack: "Linux/Git/CICD",
      progressPercentage: "70%"
    },
    {
      Stack: "HTML/CSS/JS",
      progressPercentage: "50%"
    },
    {
      Stack: "Android Studio/Unity/Unreal",
      progressPercentage: "40%"
    },
    {
      Stack: "Audio/Video Editino",
      progressPercentage: "50%"
    }],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "Johnson & Johnson (Contractor through vendor TCS)",
      companylogo: require("./assets/images/jnj_logo.jpg"),
      date: "January 2021 – Present",
      desc: "Seasoned Data Engineer adept at ETL pipelines, Tableau back-end views, and diverse technologies, with a focus on leadership and automation.",
      descBullets: [
        "Mentor in best practices, requirements gathering, and story assistance",
        "Automated manual tasks using cronjobs and Python scripts for increased efficiency",
        "Collaborated closely with stakeholders for smooth SDLC processes",
        "Executed over 80 production releases with a rework rate of less than 5%",
        "Flawlessly performed SIT for numerous production releases as an SDET",
        "Developed high-impact dashboard connecting SAP and SFDC data in Redshift datalake"
      ]
    },
    {
      role: "Systems Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs_logo.jpg"),
      date: "October 2020 – Present",
      desc: "Experienced data engineer with strong product development background, excelling in performance and contributing to the growth of TCS and its clients.",
      descBullets: [
        "Secured a TCS Digital role after cracking the TCS CodeVita in 2019; trained in product design, Python, agile methodologies, and effective communication.",
        "Led a team to design and develop a smart shower system prototype, winning the best product award during the Initial Learning Program (ILP); utilized SWOT, PESTLE, Scenario Planning, Critical Success Factor Analysis, and The Five Forces methods for comprehensive analysis.",
        "Completed courses in security, business, and other corporate essentials; joined Johnson & Johnson as a data engineer contractor via TCS.",
        "Achieved back-to-back 'A' bands in 2022 and 2023, along with a 5/5 rating in the first-year anniversary; recognized as Hi-Talent with an award for exceptional contribution from TCS higher management.",
        "Was offered an onsite opportunity by TCS after completing one year."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Param.ai",
      companylogo: require("./assets/images/param_logo.jpg"),
      date: "June 2018 – July 2018",
      desc: "Significantly contributed to the company's Natural Language Processing and Attention Network models, enhancing their overall value and performance."
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "For oppportunities in your organisation, contact me through following.",
  number: "+92-0000000000",
  email_address: "kaustabhganguly@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "stabgan", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
