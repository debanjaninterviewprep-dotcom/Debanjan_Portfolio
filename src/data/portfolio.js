// Centralized data sourced from the resume. Update placeholders as needed.
export const profile = {
  name: 'Debanjan Mukherjee',
  role: 'Full Stack Software Developer',
  tagline: '.NET + Angular • Building scalable, reliable enterprise apps',
  intro:
    "I'm a Full Stack Developer at Wipro specializing in .NET, C#, Angular, and Web API. I lead delivery on enterprise applications, design zero-downtime data migrations, and mentor teams through structured KT. Currently upskilling in React to expand my modern frontend toolkit.",
  location: 'India',
  email: 'debanjan.mukherjee@example.com', // placeholder
  linkedin: 'https://www.linkedin.com/in/debanjan-mukherjee/', // placeholder
  github: 'https://github.com/debanjan-mukherjee', // placeholder
  cvUrl: '/cv.html', // served from public/ — replace with PDF if available
};

export const skills = {
  Frontend: ['Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'React (learning)'],
  Backend: ['.NET', 'C#', 'ASP.NET Web API', 'Entity Framework', 'REST APIs'],
  Databases: ['SQL Server', 'T-SQL'],
  Tools: ['Git', 'Azure DevOps', 'Visual Studio', 'VS Code', 'Postman', 'JIRA'],
  Languages: ['C#', 'TypeScript', 'JavaScript', 'SQL'],
};

export const experience = [
  {
    company: 'Wipro',
    role: 'Full Stack Software Developer',
    duration: '2022 — Present',
    location: 'India',
    points: [
      'Lead developer on the INPAT application — own end-to-end design, development, and delivery on a .NET + Angular stack.',
      'Automated migration of 10,200+ inventory records with a zero-downtime cutover strategy.',
      'Delivered structured Knowledge Transfer (KT) to the CTS team; received positive feedback for clarity and depth.',
      'Collaborated with stakeholders to translate business requirements into scalable technical solutions.',
    ],
  },
  // Add earlier roles here if available
];

export const projects = [
  {
    title: 'INPAT — Enterprise Inventory Platform',
    description:
      'Lead developer on a critical enterprise inventory and tracking application. Drove architecture decisions, feature delivery, and production support.',
    tech: ['.NET', 'C#', 'Web API', 'Angular', 'SQL Server'],
    achievements: [
      'Migrated 10,200+ inventory records with zero downtime',
      'Reduced manual operational effort through automation',
      'Owned end-to-end delivery as lead developer',
    ],
  },
  {
    title: 'Knowledge Transfer Program — CTS Handover',
    description:
      'Designed and delivered a structured KT program covering architecture, codebase walkthroughs, and operational runbooks.',
    tech: ['Documentation', 'Architecture', 'Mentoring'],
    achievements: ['Positive feedback from CTS team', 'Smooth handover with zero blocker escalations'],
  },
  {
    title: 'React Portfolio (this site)',
    description:
      'A modern responsive portfolio built with React, Vite, and Tailwind CSS as part of actively upskilling on modern frontend tooling.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    achievements: ['Fully responsive', 'Deployed on GitHub Pages'],
  },
];

export const education = [
  {
    degree: 'M.Tech (Software Engineering)',
    school: 'BITS Pilani — Work Integrated Learning Program (WILP)',
    duration: 'In progress',
    details: 'Pursuing M.Tech alongside full-time work at Wipro.',
  },
  {
    degree: 'B.Tech',
    school: 'Undergraduate Engineering', // placeholder
    duration: '—',
    details: 'Foundational coursework in computer science and engineering.',
  },
];

export const achievements = [
  {
    title: 'Europe Excellence Award — Rising Star',
    issuer: 'Wipro',
    description:
      'Recognized for outstanding contribution and impact on the European business unit as an emerging high performer.',
  },
];
