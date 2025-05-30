export type Resource = {
  title: string
  url?: string

}

export type Skill = {
  name: string
  resources: Resource[]
}

export type Level = {
  id: string
  title: string
  skills: Skill[]
}

export type RequestDetails = {
  topic: string
  experience: string
  goals: string
  timeframe: string
}

export type Roadmap = {
  id: string
  title: string
  description: string
  image: string
  slug: string
  popularity?: number
  levels: Level[]
  requestDetails?: RequestDetails
  createdAt?: string
}

export const siteData = {
  siteName: "TechPath",
  navigation: [
    { name: "Roadmaps", href: "/roadmaps", hasDropdown: false },
    { name: "Resources", href: "/resources", hasDropdown: false },
    { name: "Community", href: "/community", hasDropdown: false },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "My Roadmaps", href :"/myroadmaps", hasDropdown:false}
  ],
  hero: {
    tagline: "Free Learning Resources",
    title: {
      part1: "Your Journey to",
      part2: "Becoming a",
      part3: "Tech Professional",
    },
    description:
      "Follow structured roadmaps, access quality resources, and join a community of learners to accelerate your tech career.",
    primaryButton: {
      text: "Explore Roadmaps",
      href: "/roadmaps",
    },
    secondaryButton: {
      text: "Join Community",
      href: "/community",
    },
  },
  featuredSection: {
    title: "Featured Paths",
    subtitle: "Popular Learning Roadmaps",
    description: "Choose from our most popular learning paths and start your journey today",
  },
  roadmaps: [] as any[],
  resources: [
    {
      id: "books",
      title: "Books",
      items: [
        // General Programming & Software Craftsmanship
        {
          title: "Clean Code: A Handbook of Agile Software Craftsmanship",
          author: "Robert C. Martin",
          description: "A classic guide to writing readable, maintainable, and efficient code.",
          tags: ["software craftsmanship", "best practices", "clean code"],
          link: "https://www.pearson.com/en-us/subject-catalog/p/clean-code-a-handbook-of-agile-software-craftsmanship/P200000002565/"
        },
        {
          title: "The Pragmatic Programmer: Your Journey to Mastery",
          author: "Andrew Hunt, David Thomas",
          description: "Timeless tips and best practices for becoming an effective programmer.",
          tags: ["best practices", "software development", "career"],
          link: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/"
        },
        {
          title: "Code Complete",
          author: "Steve McConnell",
          description: "Comprehensive guide to software construction, best practices, and design.",
          tags: ["software construction", "best practices", "design"],
          link: "https://www.microsoftpressstore.com/store/code-complete-9780735619678"
        },

        // JavaScript
        {
          title: "You Don’t Know JS Yet (Series)",
          author: "Kyle Simpson",
          description: "A deep dive into JavaScript's core mechanisms and concepts.",
          tags: ["JavaScript", "advanced", "language fundamentals"],
          link: "https://github.com/getify/You-Dont-Know-JS"
        },
        {
          title: "Eloquent JavaScript",
          author: "Marijn Haverbeke",
          description: "A modern introduction to JavaScript, programming, and web development.",
          tags: ["JavaScript", "beginner", "web development"],
          link: "https://eloquentjavascript.net/"
        },

        // Java
        {
          title: "Head First Java",
          author: "Kathy Sierra & Bert Bates",
          description: "A visually rich beginner's guide to Java, covering classes, objects, threads, collections, and more.",
          tags: ["Java", "beginner", "OOP"],
          link: "https://www.oreilly.com/library/view/head-first-java/0596009208/"
        },
        {
          title: "Effective Java",
          author: "Joshua Bloch",
          description: "A must-read for Java developers, focusing on best practices and advanced Java programming concepts.",
          tags: ["Java", "best practices", "advanced"],
          link: "https://www.pearson.com/en-us/subject-catalog/p/effective-java/P200000002569/"
        },
        {
          title: "Core Java Volume I – Fundamentals",
          author: "Cay S. Horstmann",
          description: "Comprehensive coverage of Java fundamentals for both beginners and advanced learners.",
          tags: ["Java", "fundamentals", "intermediate"],
          link: "https://horstmann.com/corejava/"
        },

        // Python
        {
          title: "Python Crash Course",
          author: "Eric Matthes",
          description: "A hands-on, project-based introduction to programming with Python for beginners.",
          tags: ["Python", "beginner", "project-based"],
          link: "https://nostarch.com/pythoncrashcourse2e"
        },
        {
          title: "Automate the Boring Stuff with Python",
          author: "Al Sweigart",
          description: "Learn Python by automating everyday tasks, ideal for beginners and intermediate programmers.",
          tags: ["Python", "automation", "beginner"],
          link: "https://automatetheboringstuff.com/"
        },
        {
          title: "Fluent Python",
          author: "Luciano Ramalho",
          description: "Advanced guide to Python’s best features and libraries, focusing on writing idiomatic code.",
          tags: ["Python", "advanced", "idiomatic code"],
          link: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/"
        },

        // C & C++
        {
          title: "The C Programming Language",
          author: "Brian W. Kernighan, Dennis M. Ritchie",
          description: "The classic and authoritative guide to C, written by the language’s creators.",
          tags: ["C", "classic", "beginner"],
          link: "https://www.pearson.com/en-us/subject-catalog/p/c-programming-language/P200000002573/"
        },
        {
          title: "Programming: Principles and Practice Using C++",
          author: "Bjarne Stroustrup",
          description: "Comprehensive introduction to C++ by its creator, suitable for beginners and experienced programmers.",
          tags: ["C++", "beginner", "OOP"],
          link: "https://www.stroustrup.com/programming.html"
        },
        {
          title: "Effective Modern C++",
          author: "Scott Meyers",
          description: "Covers best practices and advanced features in modern C++ (C++11/14).",
          tags: ["C++", "modern", "advanced"],
          link: "https://www.oreilly.com/library/view/effective-modern-c/9781491908419/"
        }
      ]
    },
    {
      id: "courses",
      title: "Online Courses",
      items: [
        // General Computer Science
        {
          title: "CS50: Introduction to Computer Science",
          platform: "Harvard/edX",
          description: "Harvard's world-famous introduction to computer science.",
          tags: ["computer science", "beginner", "theory"],
          link: "https://www.edx.org/course/cs50s-introduction-to-computer-science"
        },

        // Web Development
        {
          title: "Full Stack Open",
          platform: "University of Helsinki",
          description: "In-depth course on modern web development with JavaScript, React, Node.js, and more.",
          tags: ["web development", "JavaScript", "React", "Node.js"],
          link: "https://fullstackopen.com/en/"
        },
        {
          title: "The Web Developer Bootcamp 2024",
          platform: "Udemy",
          description: "Comprehensive beginner-to-advanced course covering HTML, CSS, JS, Node, and more.",
          tags: ["web development", "full stack", "beginner"],
          link: "https://www.udemy.com/course/the-web-developer-bootcamp/"
        },
        {
          title: "The Complete 2024 Web Development Bootcamp",
          platform: "Udemy (Angela Yu)",
          description: "Covers HTML, CSS, JavaScript, Node.js, React, MongoDB, and practical projects.",
          tags: ["web development", "full stack", "projects"],
          link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
        },
        {
          title: "Front-End Web Developer Nanodegree",
          platform: "Udacity",
          description: "Career-focused program teaching dynamic, responsive websites with HTML, CSS, and JavaScript.",
          tags: ["front-end", "web development", "career"],
          link: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011"
        },

        // Java
        {
          title: "Java Programming Masterclass for Software Developers",
          platform: "Udemy",
          description: "Comprehensive Java course covering fundamentals, OOP, Java 17, and real-world projects.",
          tags: ["Java", "OOP", "projects"],
          link: "https://www.udemy.com/course/java-the-complete-java-developer-course/"
        },
        {
          title: "Java Programming and Software Engineering Fundamentals",
          platform: "Coursera (Duke University)",
          description: "A beginner-friendly specialization covering Java basics, OOP, and software engineering.",
          tags: ["Java", "software engineering", "beginner"],
          link: "https://www.coursera.org/specializations/java-programming"
        },

        // Python
        {
          title: "Python for Everybody Specialization",
          platform: "Coursera (University of Michigan)",
          description: "Beginner-friendly series covering Python basics, data structures, web data, and databases.",
          tags: ["Python", "beginner", "data structures"],
          link: "https://www.coursera.org/specializations/python"
        },
        {
          title: "100 Days of Code: The Complete Python Pro Bootcamp",
          platform: "Udemy",
          description: "Project-based Python bootcamp from beginner to advanced, including web and data science.",
          tags: ["Python", "projects", "data science"],
          link: "https://www.udemy.com/course/100-days-of-code/"
        },

        // C & C++
        {
          title: "C Programming For Beginners",
          platform: "Udemy",
          description: "Hands-on C course covering basics, pointers, memory management, and more.",
          tags: ["C", "beginner", "pointers"],
          link: "https://www.udemy.com/course/c-programming-for-beginners-/"
        },
        {
          title: "C++ For C Programmers, Part A",
          platform: "Coursera (University of California, Santa Cruz)",
          description: "Transition from C to C++ with a focus on object-oriented programming and algorithms.",
          tags: ["C++", "OOP", "intermediate"],
          link: "https://www.coursera.org/learn/c-plus-plus-a"
        },
        {
          title: "Learn C++",
          platform: "Codecademy",
          description: "Interactive beginner-to-advanced C++ course with hands-on projects.",
          tags: ["C++", "interactive", "projects"],
          link: "https://www.codecademy.com/learn/learn-c-plus-plus"
        }
      ]
    },
    {
      id: "tutorials",
      title: "Tutorials & Guides",
      items: [
        // Web & JavaScript
        {
          title: "MDN Web Docs",
          provider: "Mozilla",
          description: "The most authoritative documentation and tutorials for HTML, CSS, JavaScript, and web APIs.",
          tags: ["web", "JavaScript", "HTML", "CSS"],
          link: "https://developer.mozilla.org/"
        },
        {
          title: "freeCodeCamp",
          provider: "freeCodeCamp.org",
          description: "Free, interactive coding curriculum and certifications in web development and more.",
          tags: ["web development", "interactive", "certification"],
          link: "https://www.freecodecamp.org/"
        },
        {
          title: "The Odin Project",
          provider: "The Odin Project",
          description: "Completely free, open-source full-stack curriculum with hands-on projects.",
          tags: ["full stack", "open source", "projects"],
          link: "https://www.theodinproject.com/"
        },
        {
          title: "JavaScript.info",
          provider: "Ilya Kantor",
          description: "Modern, in-depth JavaScript tutorials from basics to advanced topics.",
          tags: ["JavaScript", "tutorial", "advanced"],
          link: "https://javascript.info/"
        },

        // Java
        {
          title: "Java Tutorials",
          provider: "Oracle",
          description: "Official comprehensive Java tutorials, guides, and reference documentation.",
          tags: ["Java", "official", "tutorial"],
          link: "https://docs.oracle.com/javase/tutorial/"
        },
        {
          title: "Java Tutorial",
          provider: "Programiz",
          description: "Easy-to-follow Java tutorials for beginners with interactive examples.",
          tags: ["Java", "beginner", "interactive"],
          link: "https://www.programiz.com/java-programming"
        },

        // Python
        {
          title: "The Python Tutorial",
          provider: "Python.org",
          description: "Official Python documentation and tutorial for all levels.",
          tags: ["Python", "official", "tutorial"],
          link: "https://docs.python.org/3/tutorial/"
        },
        {
          title: "Real Python",
          provider: "Real Python",
          description: "High-quality Python tutorials, articles, and guides for all levels.",
          tags: ["Python", "tutorial", "articles"],
          link: "https://realpython.com/"
        },

        // C & C++
        {
          title: "Learn-C.org",
          provider: "Learn-C.org",
          description: "Interactive C tutorials for beginners and experienced programmers.",
          tags: ["C", "interactive", "tutorial"],
          link: "https://www.learn-c.org/"
        },
        {
          title: "C++ Tutorial",
          provider: "cplusplus.com",
          description: "Comprehensive C++ reference and tutorials for all levels.",
          tags: ["C++", "reference", "tutorial"],
          link: "https://cplusplus.com/doc/tutorial/"
        },

        // Multi-language & Other Domains
        {
          title: "GeeksforGeeks",
          provider: "GeeksforGeeks",
          description: "Extensive tutorials, guides, and practice problems for Java, Python, C, C++, Data Structures, Algorithms, and more.",
          tags: ["multi-language", "algorithms", "data structures", "practice"],
          link: "https://www.geeksforgeeks.org/"
        },
        {
          title: "W3Schools",
          provider: "W3Schools",
          description: "Beginner-friendly tutorials for Java, Python, C, C++, web development, databases, and more.",
          tags: ["multi-language", "web", "beginner"],
          link: "https://www.w3schools.com/"
        }
      ]
    }
  ],
  community: {
    title: "Join Our Community",
    description: "Connect with fellow learners, share your progress, and get help when you need it.",
    features: [
      {
        title: "Discussion Forums",
        description: "Ask questions and share knowledge with peers and mentors",
        icon: "MessageSquare",
      },
      {
        title: "Study Groups",
        description: "Join virtual study groups focused on specific technologies",
        icon: "Users",
      },
      {
        title: "Project Collaboration",
        description: "Find partners for coding projects and build your portfolio",
        icon: "Code",
      },
      {
        title: "Mentorship",
        description: "Connect with experienced developers for guidance",
        icon: "Compass",
      },
    ],
    joinButton: {
      text: "Join Now",
      href: "/signup",
    },
  },
  about: {
    title: "About TechPath",
    mission:
      "My mission is to solve the problem of fragmented tech learning resources by creating platforms that bring structured, easy-to-follow content together, empowering aspiring developers to learn without barriers.",
    story:
      "I faced the challenge of finding quality resources during my learning journey. Frustrated by the disorganization of tech content across various platforms, I decided to create Techpath under NullSphere dedicated to building products. Techpath is designed to simplify the learning path and help tech enthusiasts navigate their journey effectively.",
    team: [
      {
        name: "Sajal Batra",
        role: "Building NullSphere",
        bio: "Full-stack developer, passionate about making tech education accessible.",
        image: "/placeholder.svg?height=150&width=150",
      },
    ],
  },
  footer: {
        links: [
          { text: "Twitter", href: "https://x.com/sajal_batra" },
          { text: "GitHub", href: "https://github.com/sajalbatra" },
          { text: "Instagram", href: "https://instagram.com/sajalbatra.js" },
        ],
    copyright: "© 2025 NULLSPHERE. All rights reserved.",
  },
  auth: {
    login: {
      title: "Log in to your account",
      description: "Enter your email and password to access your account",
      fields: [
        { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
        { name: "password", label: "Password", type: "password", placeholder: "Enter your password" },
      ],
      submitButton: "Log in",
      alternateLink: { text: "Don't have an account? Sign up", href: "/signup" },
    },
    signup: {
      title: "Create an account",
      description: "Join TechPath to start your learning journey",
      fields: [
        { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
        { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
        { name: "password", label: "Password", type: "password", placeholder: "Create a password" },
        { name: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "Confirm your password" },
      ],
      submitButton: "Sign up",
      alternateLink: { text: "Already have an account? Log in", href: "/login" },
    },
  },
}

siteData.roadmaps = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Learn to build modern web interfaces with HTML, CSS, JavaScript and popular frameworks",
    image: "/illustration/frontend.svg?height=200&width=350",
    slug: "frontend",
    popularity: 95,
    levels: [
      {
        id: "beginner",
        title: "Beginner",
        skills: [
          {
            name: "HTML",
            theoryUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            videoUrl: "https://www.youtube.com/watch?v=iVCzmDwIQpA" // Chai aur Code[2]
          },
          {
            name: "CSS",
            theoryUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            videoUrl: "https://www.youtube.com/watch?v=eiRcOPiNoDs" // Chai aur Code[3]
          },
          {
            name: "JavaScript Basics",
            theoryUrl: "https://javascript.info/",
            videoUrl: "https://www.youtube.com/watch?v=sscX432bMZo" // Chai aur Code[4]
          }
        ]
      },
      {
        id: "intermediate",
        title: "Intermediate",
        skills: [
          {
            name: "React",
            theoryUrl: "https://reactjs.org/docs/getting-started.html",
            videoUrl: "https://www.youtube.com/watch?v=569YZm0X5-0" // Harkirat Singh[5]
          },
          {
            name: "State Management",
            theoryUrl: "https://redux.js.org/introduction/getting-started",
            videoUrl: "https://www.youtube.com/watch?v=569YZm0X5-0" // Harkirat Singh (covers React state)[5]
          },
          {
            name: "CSS Frameworks",
            theoryUrl: "https://tailwindcss.com/docs",
            videoUrl: "https://www.youtube.com/watch?v=HFr4h7WD6Hc" // Harkirat Singh (UI libraries: Tailwind, MUI)[7]
          }
        ]
      },
      {
        id: "advanced",
        title: "Advanced",
        skills: [
          {
            name: "Performance Optimization",
            theoryUrl: "https://developers.google.com/web/fundamentals/performance",
            videoUrl: "https://www.youtube.com/watch?v=0fONene3OIA" // Piyush Garg[8]
          },
          {
            name: "Testing",
            theoryUrl: "https://jestjs.io/docs/getting-started",
            videoUrl: "https://www.youtube.com/watch?v=pAluAXAvL7E" // JS Mastery (React Testing Crash Course)
          },
          {
            name: "Advanced Patterns",
            theoryUrl: "https://www.patterns.dev/posts/",
            videoUrl: "https://www.youtube.com/watch?v=wwZzADqvt7E" // JS Mastery (React Design Patterns & Best Practices)
          }
        ]
      }
    ]
  },  
  {
    id: "backend",
    title: "Backend Development",
    description: "Master server-side programming, databases, and API development",
    image: "/illustration/backend.svg?height=200&width=350",
    slug: "backend",
    popularity: 90,
    levels: [
      {
        id: "beginner",
        title: "Beginner",
        skills: [
          {
            name: "Node.js Basics",
            theoryUrl: "https://nodejs.org/en/docs/",
            videoUrl: "https://www.youtube.com/watch?v=ohIAiuHMKMI&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo" // Harkirat Singh: Node.js Crash Course (2024)
          },
          {
            name: "Express.js",
            theoryUrl: "https://expressjs.com/en/guide/routing.html",
            videoUrl: "https://www.youtube.com/watch?v=zm0-cm5u2ak" // Harkirat Singh: Introduction to Backend, what are HTTP servers [3]
          },
          {
            name: "Database Fundamentals",
            theoryUrl: "https://docs.mongodb.com/manual/introduction/",
            videoUrl: "https://www.youtube.com/watch?v=7fjOw8ApZ1I" // Chai aur Code: Complete Backend Developer course | Part 1 [2]
          }
        ]
      },
      {
        id: "intermediate",
        title: "Intermediate",
        skills: [
          {
            name: "Authentication",
            theoryUrl: "https://jwt.io/",
            videoUrl: "https://www.youtube.com/watch?v=OWeruyqhiTo" // Piyush Garg: Building Node.js Authentication from Scratch [7]
          },
          {
            name: "API Design",
            theoryUrl: "https://restfulapi.net/",
            videoUrl: "https://www.youtube.com/watch?v=7fjOw8ApZ1I" // Chai aur Code: Complete Backend Developer course | Part 1 (API design section) [2]
          },
          {
            name: "Database Design",
            theoryUrl: "https://use-the-index-luke.com/",
            videoUrl: "https://www.youtube.com/watch?v=8k-kK3tsJFY" // Chai aur Code: Complete backend developer course part 2 (covers MongoDB aggregation and schema) [11]
          }
        ]
      },
      {
        id: "advanced",
        title: "Advanced",
        skills: [
          {
            name: "Microservices",
            theoryUrl: "https://microservices.io/",
            videoUrl: "https://www.youtube.com/watch?v=7fjOw8ApZ1I" // Chai aur Code: Complete Backend Developer course | Part 1 (advanced topics, scalable backend) [2]
          },
          {
            name: "Performance",
            theoryUrl: "https://www.youtube.com/watch?v=V4GVp2Gk_zA",
            videoUrl: "https://www.youtube.com/watch?v=Vx2zPMPvmug" // Piyush Garg: Redis Crash Course (caching/performance) [10]
          },
          {
            name: "Security",
            theoryUrl: "https://owasp.org/www-project-top-ten/",
            videoUrl: "https://www.youtube.com/watch?v=OWeruyqhiTo" // Piyush Garg: Node.js Authentication (JWT, security best practices) [7]
          }
        ]
      }
    ]
  },  
  {
    id: "devops",
    title: "DevOps & Cloud",
    description: "Learn infrastructure automation, CI/CD, and cloud platforms",
    image: "/illustration/devops.svg?height=200&width=350",
    slug: "devops",
    popularity: 85,
    levels: [
      {
        id: "beginner",
        title: "Beginner",
        skills: [
          {
            name: "Linux Fundamentals",
            theoryUrl: "https://ryanstutorials.net/linuxtutorial/",
            videoUrl: "https://www.youtube.com/watch?v=CLh2ACdXNbc" // 13 Linux Commands Every Engineer Should Know (TechWorld with Nana)
          },
          {
            name: "Git & GitHub",
            theoryUrl: "https://guides.github.com/introduction/git-handbook/",
            videoUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk" // FreeCodeCamp Git & GitHub (best public intro, Nana does not have a dedicated Git intro)
          },
          {
            name: "Docker Basics",
            theoryUrl: "https://docs.docker.com/get-started/",
            videoUrl: "https://www.youtube.com/watch?v=3c-iBn73dDE" // Docker Tutorial for Beginners [FULL COURSE] (TechWorld with Nana)
          }
        ]
      },
      {
        id: "intermediate",
        title: "Intermediate",
        skills: [
          {
            name: "CI/CD",
            theoryUrl: "https://docs.github.com/en/actions",
            videoUrl: "https://www.youtube.com/watch?v=ifN3mmPOSa0" // CI/CD Explained (TechWorld with Nana)
          },
          {
            name: "Infrastructure as Code",
            theoryUrl: "https://learn.hashicorp.com/terraform",
            videoUrl: "https://www.youtube.com/watch?v=SLB_c_ayRMo" // Terraform Tutorial for Beginners (TechWorld with Nana)
          },
          {
            name: "Cloud Platforms",
            theoryUrl: "https://aws.amazon.com/getting-started/",
            videoUrl: "https://www.youtube.com/watch?v=ulprqHHWlng" // AWS in 10 Minutes (TechWorld with Nana)
          }
        ]
      },
      {
        id: "advanced",
        title: "Advanced",
        skills: [
          {
            name: "Kubernetes",
            theoryUrl: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
            videoUrl: "https://www.youtube.com/watch?v=X48VuDVv0do" // Kubernetes Tutorial for Beginners (TechWorld with Nana)
          },
          {
            name: "Monitoring & Logging",
            theoryUrl: "https://prometheus.io/",
            videoUrl: "https://www.youtube.com/watch?v=h4Sl21AKiDg" // Prometheus Monitoring Tutorial (TechWorld with Nana)
          },
          {
            name: "Site Reliability Engineering",
            theoryUrl: "https://sre.google/sre-book/introduction/",
            videoUrl: "https://www.youtube.com/watch?v=KFZjl1gofXs" // SRE Explained (TechWorld with Nana)
          }
        ]
      }
    ]
  }
,  
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Build native and cross-platform mobile applications",
    image: "/illustration/mobiledev.svg?height=200&width=350",
    slug: "mobile",
    popularity: 80,
    levels: [
      {
        id: "beginner",
        title: "Beginner",
        skills: [
          {
            name: "React Native Basics",
            theoryUrl: "https://reactnative.dev/docs/getting-started",
            videoUrl: "https://www.youtube.com/watch?v=wbj-DuaL748" // The Ultimate React Native Course 2025[2]
          },
          {
            name: "Flutter Basics",
            theoryUrl: "https://flutter.dev/docs",
            videoUrl: "https://www.youtube.com/watch?v=3kaGC_DrUnw" // Ultimate Flutter Tutorial for Beginners 2025[3]
          },
          {
            name: "Mobile UI/UX",
            theoryUrl: "https://www.nngroup.com/articles/mobile-ux/",
            videoUrl: "https://www.youtube.com/watch?v=18lRk9qQe9Y" // Mobile UI/UX Design 2024 (public, relevant)
          }
        ]
      },
      {
        id: "intermediate",
        title: "Intermediate",
        skills: [
          {
            name: "State Management",
            theoryUrl: "https://redux.js.org/usage/structuring-reducers/beyond-combinereducers",
            videoUrl: "https://www.youtube.com/watch?v=-bEzt5ISACA" // React Native State Management Tutorial (public, covers Redux, Context)
          },
          {
            name: "Native Modules",
            theoryUrl: "https://reactnative.dev/docs/native-modules-intro",
            videoUrl: "https://www.youtube.com/watch?v=mL1LFMK_myY" // Native Modules in React Native (public)
          },
          {
            name: "Offline Support",
            theoryUrl: "https://developers.google.com/web/fundamentals/architecture/app-shell",
            videoUrl: "https://syndelltech.com/guide-to-create-react-native-offline-first-applications/" // Offline-First Mobile Apps (public, covers strategies)
          }
        ]
      },
      {
        id: "advanced",
        title: "Advanced",
        skills: [
          {
            name: "Performance Optimization",
            theoryUrl: "https://developer.android.com/topic/performance",
            videoUrl: "https://www.netguru.com/glossary/mobile-app-performance-optimization" // Mobile App Performance Optimization (public, relevant)
          },
          {
            name: "Testing",
            theoryUrl: "https://www.browserstack.com/guide/mobile-testing-strategy",
            videoUrl: "https://www.youtube.com/watch?v=HmQv8Z4om4I" // Mobile App Testing Tutorial (public)
          },
          {
            name: "App Store Deployment",
            theoryUrl: "https://developer.apple.com/app-store/review/guidelines/",
            videoUrl: "https://www.youtube.com/watch?v=EiLkDd7DruA" // App Store Submission Tutorial 2024 (public, up-to-date)
          }
        ]
      }
    ]
  },  
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "Learn to design intuitive and engaging user interfaces",
    image: "/illustration/uiux.svg?height=200&width=350",
    slug: "uiux",
    popularity: 82,
    levels: [
      {
        id: "beginner",
        title: "Beginner",
        skills: [
          {
            name: "Design Principles",
            theoryUrl: "https://www.interaction-design.org/literature/topics/design-thinking",
            videoUrl: "https://www.youtube.com/watch?v=QfkZOGSKNp8" // UI UX Full Course 2025 | Simplilearn[2]
          },
          {
            name: "UI Design Basics",
            theoryUrl: "https://www.smashingmagazine.com/2010/01/the-principles-of-beautiful-web-design/",
            videoUrl: "https://www.youtube.com/watch?v=QfkZOGSKNp8" // Same course covers UI basics[2]
          },
          {
            name: "UX Design Basics",
            theoryUrl: "https://www.nngroup.com/articles/ux-research-cheat-sheet/",
            videoUrl: "https://www.youtube.com/watch?v=QfkZOGSKNp8" // Same course covers UX basics[2]
          }
        ]
      },
      {
        id: "intermediate",
        title: "Intermediate",
        skills: [
          {
            name: "Design Tools",
            theoryUrl: "https://www.figma.com/resources/learn-design/",
            videoUrl: "https://www.youtube.com/watch?v=FTFaQWZBqQ8" // Figma Crash Course 2025[2]
          },
          {
            name: "Wireframing",
            theoryUrl: "https://www.uxpin.com/studio/blog/low-fidelity-vs-high-fidelity-wireframes/",
            videoUrl: "https://www.youtube.com/watch?v=iyrEStiTZh0" // Balsamiq Wireframing Tutorial[6]
          },
          {
            name: "Prototyping",
            theoryUrl: "https://www.invisionapp.com/inside-design/interactive-prototyping/",
            videoUrl: "https://www.youtube.com/watch?v=FTFaQWZBqQ8" // Figma Crash Course 2025[2]
          }
        ]
      },
      {
        id: "advanced",
        title: "Advanced",
        skills: [
          {
            name: "Usability Testing",
            theoryUrl: "https://www.usability.gov/how-to-and-tools/methods/usability-testing.html",
            videoUrl: "https://www.youtube.com/watch?v=EYUL0N1Fjhg" // Usability Testing Tutorial 2024 (public, relevant)[8]
          },
          {
            name: "Accessibility",
            theoryUrl: "https://www.w3.org/WAI/fundamentals/",
            videoUrl: "https://www.youtube.com/watch?v=3f31oufqFSM" // Web Accessibility for Designers (public)
          },
          {
            name: "Mobile UX",
            theoryUrl: "https://www.nngroup.com/articles/mobile-ux/",
            videoUrl: "https://www.youtube.com/watch?v=QqDXDXd9y5k" // Mobile UI/UX Design 2024 (public)
          }
        ]
      }
    ]
  },  
  {
    id: "machinelearning",
    title: "Machine Learning",
    description: "Learn to create predictive models and intelligent systems",
    image: "/illustration/ml.svg?height=200&width=350",
    slug: "machinelearning",
    popularity: 78,
    levels: [
      {
        id: "beginner",
        title: "Beginner",
        skills: [
          {
            name: "Python Basics",
            theoryUrl: "https://docs.python.org/3/",
            videoUrl: "https://www.youtube.com/watch?v=zg5BLwcjk6I" // Introduction to Python for ML[2]
          },
          {
            name: "NumPy",
            theoryUrl: "https://numpy.org/doc/stable/",
            videoUrl: "https://www.youtube.com/watch?v=YqUcT-BFUM0" // NumPy Tutorial for Beginners 2025[3]
          },
          {
            name: "Pandas",
            theoryUrl: "https://pandas.pydata.org/docs/",
            videoUrl: "https://www.youtube.com/watch?v=1cjSyTxholM" // Pandas Tutorial for Beginners to Advanced 2025[4]
          }
        ]
      },
      {
        id: "intermediate",
        title: "Intermediate",
        skills: [
          {
            name: "Supervised Learning",
            theoryUrl: "https://scikit-learn.org/stable/modules/linear_model.html",
            videoUrl: "https://www.youtube.com/watch?v=KAkOmoGs-74" // ML Tutorial for Beginners (covers supervised)[5]
          },
          {
            name: "Unsupervised Learning",
            theoryUrl: "https://scikit-learn.org/stable/modules/clustering.html",
            videoUrl: "https://www.youtube.com/watch?v=5yeJ03crTrI" // Unsupervised Learning - AI Basics[6]
          },
          {
            name: "Model Evaluation",
            theoryUrl: "https://scikit-learn.org/stable/modules/model_evaluation.html",
            videoUrl: "https://www.youtube.com/watch?v=LbX4X71-TFI" // How to evaluate ML models[7]
          }
        ]
      },
      {
        id: "advanced",
        title: "Advanced",
        skills: [
          {
            name: "Neural Networks",
            theoryUrl: "https://www.tensorflow.org/tutorials",
            videoUrl: "https://www.youtube.com/watch?v=KiW-W4v0nBo" // Neural Network Tutorial For Beginners[8]
          },
          {
            name: "Deep Learning",
            theoryUrl: "https://www.deeplearningbook.org/",
            videoUrl: "https://www.youtube.com/watch?v=KAkOmoGs-74" // ML Tutorial for Beginners (Deep Learning section)[5]
          },
          {
            name: "Model Deployment",
            theoryUrl: "https://mlflow.org/docs/latest/model-registry.html",
            videoUrl: "https://www.youtube.com/watch?v=4asA2Ble1XE" // Python Full Course 2025 (includes deployment)[9]
          }
        ]
      }
    ]
  }
  
]