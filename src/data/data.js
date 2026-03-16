import {ytplay,gptai,fitness,netflix,imagefinder,modernwebsite} from '../assets/projects/index';
import html from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import mui from '../assets/mui.png'
import xampp from '../assets/projects/xamp.png'
import git from '../assets/projects/git.png';
import php from '../assets/projects/PHP.png';
import laravel from '../assets/laravel.svg';
import implevision_logo from '../assets/implevision_logo.jpg';
import techdatasolution from '../assets/techdatasolution.png';
import { instagram,linkedin,whatsapp } from '../assets/projects/index';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const mysql      = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg';
const typescript = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg';


export const skills = [
    {
        image:html,
        title:'HTML'
    },
    {
        image:CSS,
        title:'CSS'
    },
    {
        image:Javascript,
        title:'Javascript'
    },
    {
        image:react,
        title:'React'
    },
    {
        image:tailwind,
        title:'Tailwind'
    },
    {
        image:mui,
        title:'Material UI'
    },
    {
        image:git,
        title:'Git'
    },
    {
        image:xampp,
        title:'Xampp'
    },
    {
        image:php,
        title:'PHP'
    },
    {
        image:mysql,
        title:'MySQL'
    },
    {
        image:laravel,
        title:'Laravel'
    },
    {
        image:typescript,
        title:'TypeScript'
    },
]

export const navlinks=[
    {
        name:'About',
        to:'about'
    },
    {
        name:'Work',
        to:'experience'
    },
    {
        name:'Skills',
        to:'skills'
    },
    {
        name:'Projects',
        to:'work'
    },
    {
        name:'Contact',
        to:'contact'
    }
]

export const experiences = [
  {
    title: "Data Scientist-Intern",
    company_name: "TechData Solution",
    icon: techdatasolution,
    icon_width: "60px",
    iconBg: "#383E56",
    date: "December 2022 - March 2023",
    points: [
      "Trained a machine learning model to gather meaningful insights using concepts like Linear Regression and TensorFlow.",
      "Implemented data preprocessing and visualization using Python libraries such as Matplotlib and Seaborn to analyze and present results through scatter plots and graphs.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Implevision Technologies",
    icon: implevision_logo,
    icon_width: "50px",
    iconBg: "#E6DEDD",
    date: `Feb 2024 - ${new Date().getFullYear()} (present)`,
    points: [
      "Designing, developing, and maintaining scalable web applications using React.js and modern JavaScript/TypeScript frameworks.",
      "Collaborating closely with UI/UX designers and backend developers to deliver high-quality user experiences.",
      "Optimizing application performance and ensuring responsive design across various devices and platforms.",
      "Participating in code reviews, debugging, and continuous integration to ensure code quality and maintainability.",
    ],
  },
];

export const socialMedia = [
    {
      name:'Linkedin',
      icon:linkedin,
      svgIcon:<FaLinkedin size={30}/>,
      link:'https://www.linkedin.com/in/ganesh-shirke-4b3531234'
    },
    {
      name:'Instagram',
      icon:instagram,
      svgIcon:<FaInstagram size={30}/>,
      link:'https://www.instagram.com/ganesh_.shirke_?igsh=czF4aWt2N2JrYWU3'
    },
    // {
    //   name:'Twitter',
    //   icon:twitter,
    //   svgIcon:<FaTwitter size={30}/>,
    //   link:'https://www.twitter.com/sktaukir04/'
    // },
    {
      name:'Whatsapp',
      icon:whatsapp,
      svgIcon:<FaWhatsapp size={30}/>,
      link:'https://wa.me/7769013792'
    },
    {
      name:'Github',
      icon:whatsapp,
      svgIcon:<FaGithub size={30}/>,
      link:'https://www.github.com/GShirke'
    }
    ]

export const data = [
    {
        id:1,
        name: "Youtube Player",
        description:
            "Web-based platform that allows users to search, play music and watch content from various providers across the globe ...",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "contextApi",
                color: "green-text-gradient",
            },
            {
                name: "Material UI",
                color: "pink-text-gradient",
            },
        ],
        image: ytplay,
        source_code_link: "https://github.com/sktaukir04/Youtube-react-clone",
        project_link: 'https://youtube-clone-st.netlify.app'
    },
    {
        id:2,
        name: "Fitness Club",
        description:
            "Web application that enables users to search for different Exercises, view Exercises/workouts ranges for different parts, and watch the respective videos ...",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "API",
                color: "green-text-gradient",
            },
            {
                name: "Material UI",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
        ],
        image: fitness,
        source_code_link: "https://github.com/sktaukir04/Gym-Exercise",
        project_link: 'https://gym-exercise-st.netlify.app/'
    },
    {
        id:3,
        name: "Netflix Clone",
        description:
            "A web platform that fetches data from OMBD API and allows users to surf trending series/Movies and play the repective trailers of the content ...",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "API",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: netflix,
        source_code_link: "https://github.com/sktaukir04/netflix-clone",
        project_link: 'https://netflix-clone-5423c.web.app/'
    },
    {
        id:4,
        name: "Image Finder using API",
        description:
            "A web platform that fetches result from pixabay API and display its content, users can search and limit the number of content being displayed ...",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "API",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
            {
                name: "MUI",
                color: "green-text-gradient",
            },
        ],
        image: imagefinder,
        source_code_link: "https://github.com/sktaukir04/imagefinder-webclone",
        project_link: 'https://image-finder-f8a31.web.app/'
    },
    {
        id:5,
        name: "Modern UI | UX Website",
        description:
            "A fully responsive modern website with modern User Interface and User Experience using React and ...",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
            {
                name: "React Icons",
                color: "green-text-gradient",
            },
        ],
        image: modernwebsite,
        source_code_link: "https://github.com/sktaukir04/modern-website",
        project_link: 'https://modern-website-st.netlify.app/'
    },
    {
        id:6,
        name: "GPT AI Summarizer",
        description:
            "A fully responsive open-source article summarizer that transforms lengthy articles into clear and concise summaries ...",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
        ],
        image: gptai,
        source_code_link: "https://github.com/sktaukir04/gpt-ai",
        project_link: 'https://gpt-ai-st.netlify.app/'
    },
];