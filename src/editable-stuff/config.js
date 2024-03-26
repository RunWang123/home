// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Run",
  middleName: "",
  lastName: "Wang（王润）",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/runwang123",
    },
    //{
    //  image: "fa-facebook",
    //  url: "https://www.facebook.com/errr",
    //},
    //{
    //  image: "fa-instagram",
    //  url: "https://www.instagram.com/err",
    //},
    {
      image: "fa-linkedin",
        url: "https://www.linkedin.com/in/runw/",
    },
    //{
    //  image: "fa-twitter",
    //  url: "https://www.twitter.com/hashirshoaeb/",
    //},
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/rwang.png"),
  imageSize: 375,
  message:
    "My name is Run wang. I’m a graduate of 2023 from Carnegie Mellon University with a degree in Electrical and Computer Engineering. ",
    resume: "https://docs.google.com/document/d/1EqNI4RHChqy5_rS2jXPH8RVw8uqOjNIg/edit?usp=sharing&ouid=116415741495555894102&rtpof=true&sd=true",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "runwang123", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message: "",
  images: [
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "wangr654@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Application Developer',// Here Add Company Name
      companyname: 'Computer Packages Inc.',
      companylogo: require('../assets/img/cpi.jpg'),
      date: 'June 2023 – Present',
    },    
    {
      role: 'Research Assistant at CerLab',// Here Add Company Name
      companyname: 'Carnegie Mellon University',
      companylogo: require('../assets/img/cmu.png'),
      date: 'May 2022 – May 2023',
    },    
    {
      role: 'Research Assistant at Cognitive and Immersive Science Lab',// Here Add Company Name
      companyname: 'Rensselaer Polytechnic Institute',
      companylogo: require('../assets/img/rpi.jpeg'),
      date: 'Jan 2020 – Dec 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
