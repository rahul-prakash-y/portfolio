// Mock data for MERN Stack Developer Portfolio

export const developerInfo = {
  name: "Rahul Prakash",
  title: "Full Stack MERN Developer",
  tagline: "Building scalable web applications with MongoDB, Express, React & Node.js",
  bio: "Passionate full-stack developer with 5+ years of experience crafting modern web applications. Specializing in the MERN stack, I transform complex problems into elegant, scalable solutions. I thrive on creating seamless user experiences backed by robust server architectures.",
  email: "rahulraiman03@gmail.com",
  phone: "+91 9361212442",
  location: "Erode Tamil Nadu, India",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/rahul-prakash-y",
    linkedin: "https://www.linkedin.com/in/rahul-prakash-61649328b/",
  }
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured online marketplace with real-time inventory management, payment integration, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/alexrivera/ecommerce",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "WebSocket-powered messaging platform with group chats, file sharing, and end-to-end encryption.",
    techStack: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
    liveUrl: "https://chat-app-demo.com",
    githubUrl: "https://github.com/alexrivera/chat-app",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative project management tool with kanban boards, team analytics, and deadline tracking.",
    techStack: ["React", "Express", "MongoDB", "Node.js", "Material-UI"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/alexrivera/task-manager",
    featured: false,
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Restaurant Booking System",
    description: "Smart reservation platform with table management, customer reviews, and automated email confirmations.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Nodemailer"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    liveUrl: "https://booking-demo.com",
    githubUrl: "https://github.com/alexrivera/booking-system",
    featured: false,
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Analytics platform for tracking social media metrics across multiple platforms with AI-powered insights.",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js", "OpenAI API"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    liveUrl: "https://dashboard-demo.com",
    githubUrl: "https://github.com/alexrivera/social-dashboard",
    featured: false,
    category: "Frontend"
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Personal health companion with workout logging, nutrition tracking, and progress visualization.",
    techStack: ["React", "Express", "MongoDB", "Node.js", "D3.js"],
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    liveUrl: "https://fitness-demo.com",
    githubUrl: "https://github.com/alexrivera/fitness-tracker",
    featured: false,
    category: "Full Stack"
  }
];

export const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 95, icon: "component" },
      { name: "Redux", level: 88, icon: "workflow" },
      { name: "Zustand", level: 88, icon: "workflow" },
      { name: "Next.js", level: 85, icon: "layers" },
      { name: "TypeScript", level: 90, icon: "code" },
      { name: "Tailwind CSS", level: 92, icon: "palette" },
      { name: "HTML/CSS", level: 98, icon: "layout" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 93, icon: "server" },
      { name: "Express", level: 95, icon: "route" },
      { name: "MongoDB", level: 90, icon: "database" },
      { name: "REST APIs", level: 96, icon: "api" }
    ]
  },
  {
    category: "DevOps & Tools",
    technologies: [
      { name: "Git", level: 94, icon: "git-commit" },
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: "Crayon'd Digital Pvt Ltd",
    position: "Full Stack Developer Intern",
    period: "Sept 2024 - Apr 2025",
    description: "Working on developing and maintaining web applications using the MERN stack. Collaborating with designers and backend developers to create seamless user experiences and robust server-side logic.",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    company:"Crayon'd Digital Pvt Ltd",
    position: "Full Stack Developer Intern",
    period: "Apr 2025 - Present",
    description: "Developed and maintained full-stack web applications using the MERN stack. Collaborated with cross-functional teams to define project requirements and deliver high-quality solutions on time.",
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechCorp Solutions",
    content: "Alex is an exceptional developer who consistently delivers high-quality code. Their expertise in the MERN stack helped us scale our platform to millions of users.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, StartupHub",
    content: "Working with Alex was a game-changer for our projects. Their ability to translate complex requirements into elegant solutions is remarkable.",
    avatar: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CEO, Digital Agency Pro",
    content: "Alex's attention to detail and problem-solving skills are outstanding. They brought our client's visions to life with precision and creativity.",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];
