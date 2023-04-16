/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
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
"🎸 Introducing a multi-talented marvel adept at navigating both digital and artistic realms! 🎨 With 3 years of professional experience in Python, SQL, and ETL, he's honed his skills in the industry. 🏢 Concurrently, he's delved into the captivating realms of machine learning, artificial intelligence, and deep learning during his college years. 🎓 This dynamic creator has brought Android apps to life, engineered Unity-powered games, and woven intricate websites with flair. 📱🌐 When not immersed in the digital domain, his guitar strings hum in perfect harmony as a lead guitarist. 🎼 In fleeting moments of repose, he traverses the virtual expanse of video games. 🎮 Soon, he will embark on an academic odyssey at IIT Madras, pursuing an M.Tech in Industrial AI. 🤖🏭 Welcome to the whimsical, witty, and surreal universe of this extraordinary individual! 🌟"  ),
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
      schoolName: "Indian Institute Of Technology–Madras (IIT–Madras)",
      logo: require("./assets/images/iit_logo.png"),
      subHeader: "Master of Technology - M.Tech, Industrial AI",
      duration: "2023 - 2025",
      desc: "Upcoming M.Tech from IIT Madras, starting from August",
      descBullets: [
        "One of the only 40 people, who are fully Sponsored by TCS for this programme."
      ]
    },
    {
      schoolName: "Kalyani Government Engineering College",
      logo: require("./assets/images/kgec"),
      subHeader: "Bachelor of Technology - B.Tech, Information Technology",
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
      Stack: "Cloud/AWS/Azure",
      progressPercentage: "80%"
    },
    {
      Stack: "Linux/Git/CICD",
      progressPercentage: "70%"
    },
    {
      Stack: "ML/DL/AI/IOT/Research",
      progressPercentage: "65%"
    },
    {
      Stack: "HTML/CSS/JS",
      progressPercentage: "50%"
    },
    {
      Stack: "Android Studio/Unity",
      progressPercentage: "50%"
    }],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "Johnson & Johnson (Contractor)",
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
        "Achieved back-to-back 'A' bands in 2022 and 2023, along with a 5/5 rating in the first-year anniversary; recognized as Hi-Talent with an award for exceptional contribution from TCS higher management. Also was offered an onsite opportunity by TCS after completing one year."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Param.ai",
      companylogo: require("./assets/images/param_logo.jpg"),
      date: "June 2018 – July 2018",
      desc: "Significantly contributed to the company's Natural Language Processing and Attention Network models, enhancing their overall value and performance.",
      descBullets: [
        "Worked on Data Analysis, Data Cleaning, and tuning built models.",
        "Did POC on custom embeddings vectors and successfully created a working prototype which was used by the company.",
        "Got awarded best idea in a 24 hours hackathon organised by the company where I created a sentiment analysis model based on user feedbacks."]
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
  title: emoji("Certifications (Sorted date wise)"),
  subtitle:
      "A showcase of my professional accomplishments, certifications, and notable projects.",

  achievementsCards: [
    {
      title: "[PCAP-31-03] PCAP - Certified Associate in Python Programming.",
      subtitle: "March 2023",
      image: require("./assets/images/pcap.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Credly Badge",
          url: "https://www.credly.com/badges/b09f9888-bb92-4b91-a27d-7e0bdf508330/linked_in_profile"
        },
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1fM68xjtSswCzxX6LKpeI8hYXXHVAnuxX/view?usp=share_link"
        },
        {
          name: "Course Link",
          url: "https://pythoninstitute.org/pcap"
        }
      ]
    },
    {
      title: "EF-SET - C2 Proficiency in English.",
      subtitle: "February 2023",
      image: require("./assets/images/efsetlogo.png"),
      imageAlt: "EF SET Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.efset.org/cert/yjh5uy"
        },
        {
          name: "Course Link",
          url: "https://www.efset.org/"
        }
      ]
    },
    {
      title: "Journaling Mastery: Become Your Best Self",
      subtitle: "May 2022",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-a843b07b-9465-4c8e-9a3a-001c01eac6f4/"
        }
      ]
    },
    {
      title: "Master Notion - Beginner to Advanced",
      subtitle: "May 2022",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-56be24b8-aaf6-4eab-8bd3-e0875f16cbdc/"
        }
      ]
    },
    {
      title: "Asynchronous JavaScript: Promises, Callbacks, Async Await",
      subtitle: "April 2022",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-2a0f20a0-8c8a-4c54-8e3e-b3027ca72851/"
        }
      ]
    },
    {
      title: "Linux Administration Bootcamp: Go from Beginner to Advanced",
      subtitle: "March 2022",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-fa427d33-4e1b-45d1-ada8-330a652f93c1/"
        }
      ]
    },
    {
      title: "Go: The Complete Developer's Guide (Golang)",
      subtitle: "February 2022",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-74a9ab8e-632e-4641-8663-92310c679806/"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      subtitle: "Nov 2021",
      image: require("./assets/images/micro_logo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Credly Badge",
          url: "https://www.credly.com/badges/4a515c32-d214-4964-a43b-cb67af045b04/public_url"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      subtitle: "Nov 2021",
      image: require("./assets/images/micro_logo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Credly Badge",
          url: "https://www.credly.com/badges/749489b4-f407-4855-ba81-7e7086f27659/public_url"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "Nov 2021",
      image: require("./assets/images/micro_logo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Credly Badge",
          url: "https://www.credly.com/badges/5e03fc9b-cbd8-4ffd-a7ef-05cfad573094/public_url"
        }
      ]
    },
    {
      title: "Question Generation using Natural Language processing",
      subtitle: "February 2021",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-d03e6972-3179-40bf-867a-a21be4de4627/"
        }
      ]
    },
    {
      title: "RDS PostgreSQL and DynamoDB CRUD: AWS with python and Boto3",
      subtitle: "February 2021",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-21fc02fd-8ae1-461d-bc51-d196f6db9218/"
        }
      ]
    },
    {
      title: "The complete SQL Bootcamp",
      subtitle: "February 2021",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-ee23d290-9903-44f9-b49f-b9cdbe462ada/"
        }
      ]
    },
    {
      title: "Unit Testing and Test Driven Development in Python",
      subtitle: "February 2021",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-f325d7c3-57f6-4a39-bafc-0671e5b2091a/"
        }
      ]
    },
    {
      title: " Programming for Everybody (Getting Started with Python)",
      subtitle: "December 2020",
      image: require("./assets/images/cour_logo.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://coursera.org/verify/A88EJ7YNQDW7"
        }
      ]
    },
    {
      title: "Data Structures and Algorithms (UC San Diego - 6 course Specialisation)",
      subtitle: "September 2020",
      image: require("./assets/images/cour_logo.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/ecebc29e8c404d3865bcd1e1a7ba65d5"
        }
      ]
    },
    {
      title: "Blockchain (University of Buffalo - 4 course Specialisation)",
      subtitle: "September 2020",
      image: require("./assets/images/cour_logo.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/bcb0d2df3d7b260fbec458c63b432ea7"
        }
      ]
    },
    {
      title: "Crash Course on Python (Google)",
      subtitle: "September 2020",
      image: require("./assets/images/google_logo.png"),
      imageAlt: "google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/6721a581acba25f0be5b7033b20eec8e"
        }
      ]
    },
    {
      title: "Detecting COVID-19 with Chest X-Ray using PyTorch",
      subtitle: "September 2020",
      image: require("./assets/images/cour_logo.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/verify/9NNHRLCLEJAE"
        }
      ]
    },
    {
      title: "6.86x: Machine Learning with Python-From Linear Models to Deep Learning",
      subtitle: "September 2019",
      image: require("./assets/images/mitx_logo.png"),
      imageAlt: "mit Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.edx.org/certificates/7fa28f2d58c64d2e8c36ede6b06347bc"
        }
      ]
    },
    {
      title: "Introduction to Programming Using Java",
      subtitle: "July 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-FS9WBCUC"
        }
      ]
    },
    {
      title: "Introduction to Programming Using Java",
      subtitle: "July 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-FS9WBCUC"
        }
      ]
    },
    {
      title: "Introduction to Programming Using Java",
      subtitle: "July 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-FS9WBCUC"
        }
      ]
    },
    {
      title: "Introduction to Programming Using Java",
      subtitle: "July 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-FS9WBCUC"
        }
      ]
    },
    {
      title: "Introduction to Programming Using Java",
      subtitle: "July 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-FS9WBCUC"
        }
      ]
    },
    {
      title: "An introduction to working with JSON APIs and JavaScript",
      subtitle: "July 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-6A617ZKQ"
        }
      ]
    },
    {
      title: "Complete cryptocurrency for beginners masterclass",
      subtitle: "June 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-G8X0BPSC"
        }
      ]
    },
    {
      title: "Create projects and Learn to Program in Javascript: Beginner to Pro",
      subtitle: "June 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-CS3T6V9Y"
        }
      ]
    },
    {
      title: "Facebook chatbot developement using Node.js and Heroku for deployment",
      subtitle: "June 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-RWT5EQ2M"
        }
      ]
    },{
      title: "Gentle introduction to Machine Learning using Scikit Learn and Python",
      subtitle: "June 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-M72EZCEM"
        }
      ]
    },{
      title: "HTML5 Game from scratch using javascript",
      subtitle: "June 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-GABEYC58"
        }
      ]
    },{
      title: "Introduction to HTML Canvas and DOM manipulation",
      subtitle: "June 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-YPYI6VTC"
        }
      ]
    },
    {
      title: "Ruby baby steps - Introduction",
      subtitle: "June 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-1BHP40XA"
        }
      ]
    },
    {
      title: "Very brief introduction to Apache Hivemall",
      subtitle: "June 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-GWAEK5F1"
        }
      ]
    },{
      title: "With Blockchain and AI - an abstract dive into how both are impacting society",
      subtitle: "June 2019",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-5XILF1U7"
        }
      ]
    },{
      title: "Fintech Workshop Certificate",
      subtitle: "Department of Information Technology & Electronics, Government of West Bengal",
      image: require("./assets/images/govt_logo.png"),
      imageAlt: "govt Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1iLWxJ4cDu2P1RY9qlB0Kh0LDHzxzeEwi/view?usp=sharing"
        }
      ]
    },{
      title: "HackerKnight Hackathon Certificate - Only team that got selected and represented our college",
      subtitle: "KGEC",
      image: require("./assets/images/kgec"),
      imageAlt: "kgec Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Uo6axPOv_6Q_HT9NAqPIXFUzNahAjaG0/view?usp=sharing"
        }
      ]
    },{
      title: "MITx Python 6.00.1x Program : Introduction to programming",
      subtitle: "MIT School of Engineering",
      image: require("./assets/images/mitx_logo.png"),
      imageAlt: "mit Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Ab_NWrgluj2HXvjQnI7OairPN4G2krmH/view?usp=sharing"
        }
      ]
    },

    // Add more cards for each certification by duplicating and modifying the card objects
  ],
  display: true // Set false to hide this section, defaults to true
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
  title: "Research Papers",
  subtitle: emoji(
      "Undergraduate Published Peer Reviewed Research Papers"
  ),

  talks: [
    {
      title: "FemmeBand: a novel IoT application of smart security band implemented using electromyographic sensors based on wireless body area networks",
      subtitle: "Innovations in Systems and Software Engineering | Springer Nature",
      slides_url: "https://link.springer.com/article/10.1007/s11334-022-00490-2"
    },{
      title: "HeartHealth: An Intelligent Model for Multi-Attribute Based Heart Condition Monitoring using Fuzzy-TOPSIS Method",
      subtitle: "2021 Devices for Integrated Circuit (DevIC)",
      slides_url: "https://ieeexplore.ieee.org/abstract/document/9455848"
    },{
      title: "A Novel Method for Predicting Bradycardia and Atrial Fibrillation Using Fuzzy Logic and Arduino Supported IoT Sensors",
      subtitle: "Elsevier - Medicine in Novel Technology and Devices",
      slides_url: "https://www.sciencedirect.com/science/article/pii/S2590093521000023"
    },{
      title: "ValveCare: A Fuzzy Based Intelligent Model for Predicting Heart Diseases using Arduino Based IoT Infrastructure ",
      subtitle: "Springer International Publishing",
      slides_url: "https://link.springer.com/chapter/10.1007/978-3-030-75529-4_18"
    },{
      title: "SafeBand: IoT-Based Smart Security Band with Instant SOS Messaging",
      subtitle: "Proceedings of International Conference on Advanced Computing Applications | Springer, Singapore",
      slides_url: "https://link.springer.com/chapter/10.1007/978-981-16-5207-3_12"
    },

  ],

  display: true // Set false to hide this section, defaults to true
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
  // number: "+92-0000000000",
  email_address: "mail@stabgan.com"
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
