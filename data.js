/**
 * ============================================================
 *  PORTFOLIO DATA — edit everything here
 *  The page rebuilds itself from this file automatically.
 * ============================================================
 */
const PORTFOLIO = {

  /* ----------------------------------------------------------
     PERSONAL INFO
  ---------------------------------------------------------- */
  name:     "Hloniphani Dube Mlambo",
  initials: "HDM",
  tagline:  "Computer Science Student | Software Development | AI & Cybersecurity Enthusiast",
  email:    "hloniphanidube.info@gmail.com",
  phone:    "060 253 3242",
  linkedin: "https://linkedin.com/in/hloniphani-dube-mlambo-39591b404",
  github:   "https://github.com/Hloniphani-Dube",

  /* Profile photo — place file in assets/ and update the path */
  profileImage: "assets/img_quz.png",

  /* Hero background — place file in assets/ and update the path */
  heroBg: "assets/img_quz.png",

  /* ----------------------------------------------------------
     ABOUT
     Write as many paragraphs as you like — each string = one <p>
  ---------------------------------------------------------- */
  about: [
    "I am a Computer Science student with a strong interest in Software Development, Artificial Intelligence, and Cybersecurity. I focus on building real-world projects that solve practical problems and I am committed to improving my skills every day.",
    "I enjoy working across the full stack and exploring how technology can be applied to create meaningful solutions."
  ],

  /* ----------------------------------------------------------
     SKILLS
     Each entry: { label, icon }
     icon = any valid Lucide icon name (https://lucide.dev/icons)
  ---------------------------------------------------------- */
  skills: [
    { label: "HTML",            icon: "code"        },
    { label: "CSS",             icon: "paintbrush"  },
    { label: "JavaScript",      icon: "code"        },
    { label: "Kotlin",          icon: "smartphone"  },
    { label: "Java (Beginner)", icon: "coffee"      },
  ],

  /* ----------------------------------------------------------
     EDUCATION & CERTIFICATES
     type: "degree" | "cert"
     image: path to your certificate/degree image in assets/
            leave as "" to show the placeholder
  ---------------------------------------------------------- */
  education: [
    {
      title:  "Higher Certificate in Mobile Application and Web Development",
      meta:   "Higher Certificate",
      type:   "cert",
      icon:   "book-open",
      image:  ""
    },
    {
      title:  "Google Cybersecurity",
      meta:   "Certificate",
      type:   "cert",
      icon:   "award",
      image:  "assets/img_certgooglecyber.jpeg"
    },
  ],

  /* ----------------------------------------------------------
     PROJECTS
     image:   path in assets/ — leave "" for placeholder
     demo:    live URL — leave "" to hide the button
     github:  repo URL — leave "" to hide the button
  ---------------------------------------------------------- */
  projects: [
    {
      title:       "Quiz Gamification App",
      description: "The ultimate gamified quiz competition where knowledge meets excitement. Compete against others, earn points, unlock badges, and climb the leaderboard.",
      image:       "assets/img_quiz.png",
      demo:        "https://quiz-gamification.vercel.app",
      github:      "https://github.com/Hloniphani-Dube/Quiz-Gamification"
    },
  ],

  /* ----------------------------------------------------------
     EXPERIENCE
     icon = any valid Lucide icon name
  ---------------------------------------------------------- */
  experience: [
    {
      title:       "Junior Front-end Developer For Cyberm8",
      period:      "Ongoing",
      icon:        "laptop",
      description: "Designing and create Front-end software. <br> https://www.cyberm8.org.za"
    },
  ],

};
