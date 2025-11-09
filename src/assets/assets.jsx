import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaCode,
  FaRocket,
  FaHeart,
  FaFlask,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaHandshake,
  FaUpload,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiMongodb,
  SiTailwindcss,
  SiJupyter,
  SiPostman,
  SiOpenai,
  SiMysql,
  SiExpress,
  SiGooglecloud,
  SiStreamlit,
  SiCloudinary,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

//about-page

export const techCategories = [
  {
    title: "Web Development",
    color: "from-blue-500 to-purple-500",
    technologies: [
      {
        name: "React.js",
        icon: <FaReact color="#61DAFB" />,
        description: "Frontend library",
        level: 85,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-base-content" />,
        description: "Frontend framework",
        level: 85,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs color="#3C873A" />,
        description: "Backend runtime",
        level: 80,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-base-content" />,
        description: "Node.js framework",
        level: 75,
      },
      {
        name: "JavaScript",
        icon: <FaJs color="#F7DF1E" />,
        description: "Core language",
        level: 90,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss color="#38BDF8" />,
        description: "Utility CSS framework",
        level: 85,
      },
    ],
  },
  {
    title: "Data Structures & Algorithms",
    color: "from-indigo-500 to-purple-600",
    technologies: [
      {
        name: "Arrays & Strings",
        icon: <FaCode color="#667eea" />,
        description: "Linear data structures",
        level: 75,
      },
      // {
      //   name: "Trees & Graphs",
      //   icon: <FaCode color="#764ba2" />,
      //   description: "Hierarchical structures",
      //   level: 65,
      // },
      {
        name: "Dynamic Programming",
        icon: <FaCode color="#f093fb" />,
        description: "Optimization techniques",
        level: 60,
      },
      {
        name: "Sorting & Searching",
        icon: <FaCode color="#4facfe" />,
        description: "Algorithmic fundamentals",
        level: 80,
      },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "from-green-500 to-teal-500",
    technologies: [
      {
        name: "VS Code",
        icon: <VscVscode color="#007ACC" />,
        description: "Code editor",
        level: 95,
      },
      
      {
        name: "Postman",
        icon: <SiPostman color="#FF6C37" />,
        description: "API tester",
        level: 80,
      },
      {
        name: "OpenAI",
        icon: <SiOpenai color="#412991" />,
        description: "AI tools",
        level: 70,
      },
      {
        name: "Git",
        icon: <FaGitAlt color="#F1502F" />,
        description: "Version control",
        level: 85,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-base-content" />,
        description: "Code repo",
        level: 90,
      },
    ],
  },
  {
    title: "Database & Storage",
    color: "from-orange-500 to-red-500",
    technologies: [
      {
        name: "MongoDB",
        icon: <SiMongodb color="#47A248" />,
        description: "NoSQL DB",
        level: 80,
      },
      {
        name: "MySQL",
        icon: <SiMysql color="#4479A1" />,
        description: "SQL DB",
        level: 75,
      },
    ],
  },
  {
    title: "Others",
    color: "from-purple-500 to-pink-500",
    technologies: [
      {
        name: "Python",
        icon: <FaPython color="#3776AB" />,
        description: "General-purpose Programming language",
        level: 85,
      },
      {
        name: "C++",
        icon: <FaCode color="#f89820" />,
        description: "General-purpose Programming language",
        level: 70,
      },
    ],
  },
];

export const stats = [
  {
    icon: <FaCode />,
    value: "1+",
    label: "Years Learning",
    color: "text-blue-500",
  },
  {
    icon: <FaRocket />,
    value: "5+",
    label: "Projects Built",
    color: "text-green-500",
  },
  {
    icon: <FaHeart />,
    value: "17+",
    label: "Technologies Learning",
    color: "text-red-500",
  },
];

export const certificates = [
  {
    id: 1,
    title: "Oracle AI Foundation Certificate",
    organization: "Oracle",
    description:
      "certification has deepened my understanding of key Oracle Cloud Infrastructure (OCI) concepts, including core services, networking fundamentals, and security best practices.",
    icon: "🏢",
    gradient: "from-blue-500 to-purple-500",
    pdfUrl: "/Oracle.pdf",
    downloadName: "Shivam_Internship_Certificate.pdf",
    hoverRotation: "-rotate-1",
  },
  {
    id: 2,
    title: "Campus Ambassador",
    organization: "IIT Bombay",
    description:
      "I learned leadership, communication, teamwork, and marketing skills by promoting IIT Bombay initiatives and organizing impactful campus engagement activities.",
    icon: "⚡",
    gradient: "from-green-500 to-teal-500",
    pdfUrl: "/IIT Bombay.pdf",
    downloadName: "Shivam_Campus_Ambassador_Certificate.pdf",
    hoverRotation: "-rotate-1",
  },
  {
    id: 3,
    title: "Data Analytics Job Simulation",
    organization: "Deloitte",
    description:
      "The Deloitte Data Analytics Simulation teaches data-driven decision-making using real business scenarios, analytics tools, and strategic problem-solving techniques.",
    icon: "🔧",
    gradient: "from-orange-500 to-red-500",
    pdfUrl: "/Deloite.pdf",
    downloadName: "Data Analytics_Certificate.pdf",
    hoverRotation: "rotate-1",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Krish Puri",
    role: "Frontend Developer",
    avatar: "👩‍💻",
    rating: 5,
    review:
      "Shivam's React skills are impressive! His clean code and attention to detail make him a pleasure to work with.",
  },
  {
    id: 2,
    name: "Manpreet Singh",
    role: "Full Stack Developer",
    avatar: "👨‍💼",
    rating: 5,
    review:
      "Excellent problem-solving abilities and quick learner. Shivam delivered our project ahead of schedule.",
  },
  {
    id: 3,
    name: "Bhavuk Ahuja",
    role: "UX Designer",
    avatar: "👩‍🎨",
    rating: 5,
    review:
      "Great collaboration skills! Shivam perfectly implemented our design vision with smooth animations.",
  },
  {
    id: 4,
    name: "Gurman Singh Dhami",
    role: "Mern Stack Developer",
    avatar: "👨‍💻",
    rating: 5,
    review:
      "Reliable and communicative. Shivam's full-stack expertise helped us build a robust application.",
  },
  {
    id: 5,
    name: "Rutansh Chawla",
    role: "Backend Developer",
    avatar: "👩‍💻",
    rating: 5,
    review:
      "Impressed by Shivam's Node.js and MongoDB skills. His API development is clean and efficient.",
  },
];

//project-page

export const projects = [
  {
    id: 1,
    title: "Mern Stack LinkedIn Clone",
    description:
      "Developed a full-stack social networking platform replicating core LinkedIn functionalities using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented user authentication, post sharing, profile management, and real-time updates.",
    longDescription:
      "Developed a full-stack social networking platform replicating core LinkedIn functionalities using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented user authentication, post sharing, profile management, and real-time updates.",
    category: "fullstack",
    type: "Personal Project",
    techStack: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
      { name: "Express", icon: <SiExpress className="color-base-content" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
      // { name: "Cloudinary", icon: <SiCloudinary color="#3448C5" /> },
      // { name: "Multer", icon: <FaUpload color="#E91E63" /> },
    ],
    features: [
      "User Authentication & Profiles",
      "Post & Feed System",
      "Connections & Networking",
      "Communication & Interaction",
      "Search & Discovery",
      "Technical & Backend Features",
      "Responsive & Modern UI",
    ],
    github: "https://github.com/Student-JSS",
    live: "",
    image:
      "https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/lab/_main/assets/projects/linkedin-homepage.jpg",
    status: "Completed",
    teamSize: "Solo",
  },
  {
    id: 2,
    title: "Video Calling Interview Platform",
    description:
      "Developed a real-time Video Calling Interview Platform using the MERN stack and WebRTC for seamless one-on-one communication.",
    longDescription:
      "This project provides a virtual interview environment where candidates and interviewers can conduct face-to-face interviews online. It integrates real-time video communication, chat, and screen sharing, ensuring smooth and professional interactions. Built using the MERN stack, it focuses on scalability, low latency, and data security. The platform features user authentication, role-based access, and a responsive UI for an optimal experience across devices.",
    category: "ai",
    type: "Personal Project",
    techStack: [
      { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
      { name: "Express", icon: <SiExpress className="color-base-content" /> },
      {
        name: "GitHub Actions",
        icon: <FaGithub className="color-base-content" />,
      },
      { name: "Gemini AI", icon: <SiGooglecloud color="#4285F4" /> },
      { name: "OpenAI", icon: <SiOpenai color="#412991" /> },
    ],
    features: [
      "Implemented secure authentication and role-based access for interviewers and candidates.",
      "Enabled live video calls, screen sharing, and chat during interviews.",   
      "Designed a responsive UI with React and Tailwind CSS for smooth user experience.",
      "Integrated Node.js, Express.js, and Socket.io for real-time signaling and backend management.",
    ],
    github: "https://github.com/Student-JSS",
    live: "",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop&q=80",
    status: "Completed",
    teamSize: "Solo",
  },
  {
    id: 3,
    title: "",
    description:
      "",
    longDescription:
      "",
    category: "fullstack",
    type: "Personal Project",
    techStack: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
      {
        name: "Express",
        icon: <SiExpress className="color-base-content" />,
      },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Google Gemini", icon: <SiGooglecloud color="#4285F4" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
    ],
    features: [
      
    ],
    github: "i",
    live: "",
    image: "",
    status: "Completed",
    teamSize: "Solo",
  },
  {
    id: 4,
    title: "",
    description:
      "",
    longDescription:
      "",
    category: "ai",
    type: "Team Project",
    techStack: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Jupyter", icon: <SiJupyter color="#F37626" /> },
      {
        name: "Flask",
        icon: <FaFlask className="color-base-content" />,
      },
      { name: "Streamlit", icon: <SiStreamlit color="#FF4B4B" /> },
    ],
    features: [
    
    ],
    github: "",
    live: "",
    image:
      "",
    status: "Completed",
    teamSize: "6 Members",
  },
];

//blog-page

export const blogPosts = [
  {
    id: 1,
    title: "",
    excerpt:
      "",
    fullDescription:
      "",
    date: "2025-01-15",
    readTime: "12 min read",
    image: "🎵",
    tags: [""],
    techStack: [
      // "MongoDB",
      // "Express.js",
      // "React",
      // "Node.js",
      // "Multer",
      // "Cloudinary",
    ],
    challenges: [
      // "File upload & streaming integration",
      // "Playlist management logic",
      // "Responsive and user-friendly player UI",
      // "Production errors & deployment issues",
    ],
    achievements: [
      // "Playlist creation & management",
      // "Cloudinary + Multer integration",
      // "Modern responsive music player",
    ],
  },
  {
    id: 2,
    title: "",
    excerpt:
      "",
    fullDescription:
      "",
    date: "2025-08-15",
    readTime: "5 min read",
    image: "🤖",
    tags: ["GitHub Actions", "AI Review", "Automation", "Gemini AI", "OpenAI"],
    techStack: [""],
    challenges: [
      // "Fetching PR diffs from GitHub API",
      // "Handling AI API integration (Gemini/OpenAI)",
      // "Automating PR comments reliably",
    ],
    achievements: [
      // "Automated PR review comments",
      // "Seamless GitHub Actions integration",
      // "Supports multiple AI APIs",
    ],
    github: "",
    live: "",
    status: "Completed",
    teamSize: "Solo",
  },
  {
    id: 3,
    title: "",
    excerpt:
      "",
    fullDescription:
      "",
    date: "2025-07-18",
    readTime: "10 min read",
    image: "🤖",
    tags: [
      // "Gen-AI",
      // "Google Gemini",
      // "Resume AI",
      // "Interview Coaching",
      // "MERN Stack",
      // "LLM Integration",
    ],
    techStack: [
      // "React",
      // "Node.js",
      // "MongoDB",
      // "Express",
      // "Tailwind CSS",
      // "Google Gemini API",
      // "Canvas API",
      // "JWT Auth",
    ],
    challenges: [
      // "AI prompt optimization",
      // "Canvas rendering with AI data",
      // "LLM response consistency",
      // "Real-time AI generation",
    ],
    achievements: [
      // "Intelligent resume generation",
      // "AI-powered interview prep",
      // "Seamless Gen-AI integration",
      // "Professional document creation",
    ],
  },
  {
    id: 4,
    title: "",
    excerpt:
      "",
    fullDescription:
      "",
    date: "2024-11-20",
    readTime: "9 min read",
    image: "🧠",
    tags: [
      // "AI Healthcare",
      // "Machine Learning",
      // "Gemini API",
      // "Health Tech",
      // "Predictive AI",
      // "Team Project",
    ],
    techStack: [
      // "React",
      // "Flask",
      // "Python",
      // "RandomForest ML",
      // "Gemini API",
      // "Streamlit",
      // "AI Models",
    ],
    challenges: [
      // "AI model accuracy optimization",
      // "Health data processing",
      // "Real-time AI predictions",
      // "Team AI integration workflow",
    ],
    achievements: [
      // "Intelligent health risk prediction",
      // "AI-powered recommendations",
      // "Advanced ML model deployment",
      // "Collaborative AI development",
    ],
  },
];

//contact-page

export const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: import.meta.env.VITE_EMAIL_TO || "shivam2089muz@gmail.com",
    link: `mailto:${
      import.meta.env.VITE_EMAIL_TO || "shivam2089muz@gmail.com"
    }`,
    color: "text-blue-500",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "India",
    link: "#",
    color: "text-red-500",
  },
];

export const socialLinks = [
  {
    icon: <FaGithub />,
    name: "GitHub",
    url: "https://github.com/Student-JSS",
    color: "hover:text-gray-800 dark:hover:text-gray-200",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shivam-kumar-88b154320/",
    color: "hover:text-blue-600",
  },
  // {
  //   icon: <FaTwitter />,
  //   name: "Twitter",
  //   url: "https://x.com/KeshavGilh5995",
  //   color: "hover:text-blue-400",
  // },
  // {
  //   icon: <FaInstagram />,
  //   name: "Instagram",
  //   url: "https://www.instagram.com/keshav_gilhotra_/?hl=en",
  //   color: "hover:text-pink-500",
  // },
];

export const collaborationTypes = [
  {
    icon: <FaRocket />,
    title: "Full Stack Projects",
    description: "MERN stack web applications and modern web solutions",
  },
  {
    icon: <FaHandshake />,
    title: "Open Source",
    description:
      "Contributing to open source projects and community initiatives",
  },
  {
    icon: <FaHeart />,
    title: "Learning Together",
    description: "Knowledge sharing and collaborative learning experiences",
  },
];
