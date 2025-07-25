import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
//import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Full-Stack Developer | Creating Modern, Fast & Interactive Web Experiences | Expert in Animations, UI/UX & Performance Optimization | HTML, CSS, JavaScript, Bootstrap, Tailwind, GSAP, Git, GitHub, PHP, MySQL 🚀.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Frontend Developer",
    company: "PixelWorx Technologies Pvt. Ltd.",
    description: `I have completed a 6-month professional tenure at Lonar Buildcon Pvt. Ltd., where I gained valuable experience in the Real Estate domain. During this period, I developed strong skills in client coordination, project documentation, and teamwork, which have positively contributed to my professional growth.`,
    technologies: ["Javascript", "React.js", "Bootstrap", "WordPress"],
  },
 
]
export const PROJECTS = [
  {
    title : "Crypto Hunter", 
    image : project1,
    description: "Built a responsive cryptocurrency tracker using React.js, showing real-time data via crypto APIs. Integrated Firebase for user authentication and watchlist features. Used Material UI for sleek design and implemented hooks for dynamic updates and smooth UX.",
    skills : ["React" , "Material UI", "Firebase" , "Rest API"] 
  }, 

  {
    title : "Job Portal", 
    image : project2,
    description: "I created a fully responsive job portal using React for the frontend and Clerk for user authentication. I used Material UI and ShadCN to design modern and user-friendly interfaces. The app allows recruiters to post jobs and job seekers to apply. I connected it to a virtual database to manage data dynamically. This project shows my ability to build real-world full stack applications with clean UI, role-based features, and responsive design",
    skills : ["React" , "Material UI", "ShadCN" , "Clerk"] 
  }, 

  {
    title : "Spotify Clone", 
    image : project3,
    description: "I developed a fully responsive Spotify clone using React for the frontend along with Material UI and ShadCN for modern UI design. I implemented Clerk authentication to manage secure user login and roles. The app includes features like music browsing, playlists, player controls, and dynamic routing. I used a virtual database to handle song data and user interactions. This project demonstrates my full-stack skills in building a real-world music platform with clean UI, smooth functionality, and responsive layout.",
    skills : ["React" , "Material UI", "ShadCN" , "Clerk"]
  }, 
  
]
export const CONTACT = {
  address: "Patel Nager Second , Ghaziabad Merrut Road ",
  phoneNo: "9625769207",
  email: "taruncode8@gmai.com",
};
