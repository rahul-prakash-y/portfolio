// Mock data for MERN Stack Developer Portfolio

export const developerInfo = {
  name: "Alex Rivera",
  title: "Full Stack MERN Developer",
  tagline: "Building scalable web applications with MongoDB, Express, React & Node.js",
  bio: "Passionate full-stack developer with 5+ years of experience crafting modern web applications. Specializing in the MERN stack, I transform complex problems into elegant, scalable solutions. I thrive on creating seamless user experiences backed by robust server architectures.",
  email: "alex.rivera@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/alexrivera",
    linkedin: "https://linkedin.com/in/alexrivera",
    twitter: "https://twitter.com/alexrivera"
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
      { name: "PostgreSQL", level: 82, icon: "hard-drive" },
      { name: "GraphQL", level: 80, icon: "git-branch" },
      { name: "REST APIs", level: 96, icon: "api" }
    ]
  },
  {
    category: "DevOps & Tools",
    technologies: [
      { name: "Git", level: 94, icon: "git-commit" },
      { name: "Docker", level: 85, icon: "package" },
      { name: "AWS", level: 78, icon: "cloud" },
      { name: "CI/CD", level: 82, icon: "refresh-cw" },
      { name: "Jest", level: 88, icon: "check-circle" },
      { name: "Webpack", level: 80, icon: "box" }
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    period: "2022 - Present",
    description: "Leading development of enterprise-grade web applications. Architected microservices infrastructure serving 1M+ users. Mentoring junior developers and conducting code reviews.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
  },
  {
    id: 2,
    company: "StartupHub Inc",
    position: "MERN Stack Developer",
    period: "2020 - 2022",
    description: "Developed multiple MVPs for startup clients. Built real-time features using WebSockets. Optimized database queries reducing response time by 60%.",
    technologies: ["React", "Express", "MongoDB", "Socket.io", "Redux"]
  },
  {
    id: 3,
    company: "Digital Agency Pro",
    position: "Frontend Developer",
    period: "2019 - 2020",
    description: "Created responsive web applications for various clients. Implemented modern UI/UX designs. Collaborated with design teams to deliver pixel-perfect interfaces.",
    technologies: ["React", "JavaScript", "CSS3", "REST APIs"]
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
