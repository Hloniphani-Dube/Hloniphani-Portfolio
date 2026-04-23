/**
 * ============================================================
 *  PORTFOLIO DATA — Minimal, signal-heavy version
 * ============================================================
 */
const PORTFOLIO = {

  name:     "Hloniphani Dube",
  email:    "hloniphanidube.info@gmail.com",
  phone:    "060 253 3242",
  github:   "https://github.com/Hloniphani-Dube",
  linkedin: "https://linkedin.com/in/hloniphani-dube-mlambo-39591b404",

  /* Profile photo */
  profileImage: "assets/img_profile.jpeg",

  /* Quick tagline — recruiters see this in 2 seconds */
  tagline:  "Computer Science Student | Software Developer | AI & Cybersecurity Enthusiast",

  /* One sentence about what you build */
  heroDescription: "I build authentication systems, backend logic, and scalable applications. Focused on clean architecture and real-world problems.",

  /* About section — full paragraphs */
  about: [
    "I am a Computer Science student with a strong interest in Software Development, Artificial Intelligence, and Cybersecurity. I focus on building real-world projects that solve practical problems and I am committed to improving my skills every day.",
    "I enjoy working across the full stack and exploring how technology can be applied to create meaningful solutions."
  ],

  /* Skills */
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Kotlin",
    "Java (Beginner)"
  ],

  /* About section — 2-3 sentences max */
  aboutShort: "Computer Science student focused on backend development and AI engineering. I build systems that prioritize clean structure, validation, and scalability. I enjoy solving complex problems through well-designed code.",

  /* Tools & languages you use */
  tools: "Java, JavaScript, Kotlin, Git, JUnit, REST APIs",

  /* ==================================================
     EDUCATION & CERTIFICATES
  ================================================== */
  education: [
    {
      title:  "Higher Certificate in Mobile Application and Web Development",
      meta:   "Higher Certificate",
      image:  "assets/img_highercert.png"
    },
    {
      title:  "Google Cybersecurity",
      meta:   "Certificate",
      image:  "assets/img_certgooglecyber.jpeg"
    },
    {
      title:  "Meta Back-End Developer Professional Certificate",
      meta:   "In Progress · Coursera",
      image:  ""
    },
    {
      title:  "IBM Java Developer Professional Certificate",
      meta:   "In Progress · Coursera",
      image:  ""
    },
  ],

  /* ==================================================
     PROJECTS — Show decision-making, not just features
     
     Each project should explain:
     - What problem it solved
     - Key decisions made
     - Technical depth
     
     This is what makes you NOT look AI-generated.
  ================================================== */
  projects: [
    {
      title: "Quiz Gamification Website",
      features: [
        "Designed user competition system with real-time scoring",
        "Built leaderboard ranking algorithm with tiebreak logic",
        "Implemented badge unlock system for engagement",
        "Structured database schema for scalability",
        "Deployed to production with responsive design"
      ],
      tech: "JavaScript, Frontend/Backend, Database Design",
      demo: "https://quiz-gamification.vercel.app",
      github: "https://github.com/Hloniphani-Dube/Quiz-Gamification"
    },
    {
      title: "Phroneo Threads Website",
      features: [
        "Simple daily devotional content system for clothing QR codes.",
        "Three URLs that automatically change content at midnight."
      ],
      tech: "HTML, CSS, JavaScript",
      demo: "https://www.phroneothreads.co.za",
      github: "https://github.com/Hloniphani-Dube/phroneo-threads-website"
    },
    {
      title: "UBUHLE-Decorative-Projects-Construction-Website",
      features: [
        "Made a website for a company that deals with expert painting, tiling and renovation services with guaranteed quality workmanship. Transform your home with Johannesburg's trusted decorative painters."
        
      ],
      tech: "HTML, CSS, JavaScript",
      demo: "https://www.ubuhledecorativepainters.co.za",
      github: "https://github.com/Hloniphani-Dube/UBUHLE-Decorative-Projects-Construction-Website"
    }
  ],

  /* ==================================================
     EXPERIENCE
  ================================================== */
  experience: [
    {
      title: "Cyberm8 | volunteer. Junior Front-end Developer",
      period: "Ongoing",
      description: "Designing and creating Front-end software. https://www.cyberm8.org.za"
    }
  ]
};
