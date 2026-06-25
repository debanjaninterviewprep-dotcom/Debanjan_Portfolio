// Centralized resume content. Update this file to change site copy.
export const profile = {
  name: 'Debanjan Mukherjee',
  role: 'Full Stack Software Developer',
  tagline: '.NET • C# • Angular • Web API — building scalable, secure enterprise applications.',
  intro:
    "I'm a Full Stack Software Developer at Wipro, focused on engineering reliable enterprise applications on a .NET and Angular stack. I work in an AI-augmented way — leveraging tools like GitHub Copilot, ChatGPT, Gemini, and Claude across nearly every daily task to dramatically accelerate delivery and free up time for higher-value engineering. I'm also actively expanding into low-code and AI platforms (Power Apps, Power Platform, Copilot Studio) to deliver business value even faster.",
  location: 'India',
  email: 'mukherjeedebanjan051@gmail.com',
  linkedin: 'https://www.linkedin.com/in/debanjan-mukherjee-773a3221a',
  github: 'https://github.com/debanjaninterviewprep-dotcom',
  // Vite prepends BASE_URL automatically so this works locally ('/') and
  // on GitHub Pages ('/Debanjan_Portfolio/').
  cvUrl: `${import.meta.env.BASE_URL}cv.html`,
  resumeUrl: `${import.meta.env.BASE_URL}resume.html`,
  photoUrl: `${import.meta.env.BASE_URL}profile.jpg`,
};

export const skills = {
  Frontend: ['Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  Backend: ['.NET', 'C#', 'ASP.NET Web API', 'Entity Framework', 'REST APIs'],
  Databases: ['SQL Server', 'T-SQL'],
  Scripting: ['PowerShell', 'Bash'],
  Tools: ['Git', 'Azure DevOps', 'Visual Studio', 'VS Code', 'Postman', 'JIRA'],
  'AI Tools': ['GitHub Copilot', 'ChatGPT', 'Gemini', 'Claude'],
  Languages: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'PowerShell'],
  Learning: ['React', 'Power Apps', 'Power Platform', 'Copilot Studio', 'Power Automate'],
};

export const experience = [
  {
    company: 'Wipro',
    role: 'Full Stack Software Developer',
    duration: '2022 — Present',
    location: 'India',
    points: [
      'Lead developer on the INPAT enterprise application, working alongside the solution architect to drive end-to-end design, development, and delivery on a .NET and Angular stack.',
      'Drove backend modernization to improve maintainability, performance, and long-term scalability while ensuring application stability.',
      'Supported the operations team by resolving production issues with minimal business disruption.',
      'Delivered two high-impact initiatives with 100% accuracy and zero downtime.',
      'Practice AI-augmented development — use GitHub Copilot, ChatGPT, Gemini, and Claude across nearly every daily task to accelerate delivery, reduce manual effort by up to ~90%, and focus engineering time on design, quality, and impact.',
      'Recognized with the Europe Excellence Award (Rising Star) for ownership, delivery quality, and impact on the INPAT application.',
    ],
  },
];

export const projects = [
  {
    title: 'INPAT — Enterprise Inventory Platform',
    description:
      'Critical enterprise inventory and scheduling platform delivered on .NET, Web API, Angular, and SQL Server. Owned end-to-end as lead developer, including architecture decisions, feature delivery, and production support.',
    tech: ['.NET', 'C#', 'Web API', 'Angular', 'SQL Server'],
    achievements: [
      'Drove backend modernization for improved maintainability and performance.',
      'Maintained application stability while delivering new functionality.',
      'Resolved cross-team dependencies to accelerate delivery cycles.',
    ],
  },
  {
    title: 'Automated Migration Initiative',
    description:
      'Designed and implemented a .NET Web API–based automation to migrate inventory host and schedule records from Ansible Tower to AAP, fully validated across Dev and QA before production cutover.',
    tech: ['.NET', 'Web API', 'C#', 'Ansible Tower', 'AAP'],
    achievements: [
      'Migrated ~10,200 host and schedule records with 100% accuracy.',
      'Executed an 11-hour production run with zero downtime and no business impact.',
      'Fully automated and tested across Dev and QA environments.',
    ],
  },
  {
    title: 'Angular Upgrade Initiative',
    description:
      'Led the upgrade of the INPAT frontend from Angular 6 to Angular 18 within a one-month window, including extensive refactoring and dependency realignment.',
    tech: ['Angular 18', 'TypeScript', 'RxJS'],
    achievements: [
      'Completed end-to-end upgrade in one month.',
      'Performed extensive refactoring and dependency realignment.',
      'Validated across environments, resulting in a more secure and scalable frontend.',
    ],
  },
  {
    title: '.NET Full Stack Course',
    description:
      'Self-designed, AI-augmented .NET full stack learning track — a curated, hands-on curriculum covering C#, ASP.NET Web API, Entity Framework, and modern frontend integration. Built and refined with the help of GitHub Copilot, ChatGPT, Gemini, and Claude.',
    tech: ['.NET', 'C#', 'ASP.NET Web API', 'Entity Framework', 'AI-augmented'],
    link: 'https://github.com/debanjaninterviewprep-dotcom/DotNet-Full-Stack-Course',
    achievements: [
      'Designed end-to-end with AI-assisted research and content generation.',
      'Demonstrates AI-integrated coding workflow used in daily engineering work.',
      'Open-sourced on GitHub for ongoing iteration.',
    ],
  },
  {
    title: 'BlogSpot — Full Stack Blogging Platform',
    description:
      'End-to-end blogging platform built on a Clean Architecture .NET backend (API / Application / Domain / Infrastructure layers) with an Angular 17 + Angular Material client, JWT-based auth, SignalR for real-time updates, SQL Server persistence, and Docker-based local orchestration.',
    tech: [
      '.NET',
      'C#',
      'Clean Architecture',
      'ASP.NET Web API',
      'JWT',
      'SignalR',
      'Angular 17',
      'Angular Material',
      'SQL Server',
      'Docker',
    ],
    link: 'https://github.com/debanjaninterviewprep-dotcom/BlogSpot',
    achievements: [
      'Implemented Clean Architecture across Domain, Application, Infrastructure, and API layers.',
      'JWT-secured REST APIs consumed by an Angular 17 SPA with Angular Material UI.',
      'Real-time updates via SignalR; containerized with Docker Compose for one-command local setup.',
      'Cloud-deployable via render.yaml.',
    ],
  },
  {
    title: 'React Portfolio (this site)',
    description:
      'A modern responsive portfolio built with React, Vite, and Tailwind CSS as part of actively upskilling on modern frontend tooling.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    achievements: ['Fully responsive with light and dark modes.', 'Deployed via GitHub Actions to GitHub Pages.'],
  },
];

export const education = [
  {
    degree: 'M.Tech (Software Engineering)',
    school: 'BITS Pilani — Work Integrated Learning Program (WILP)',
    duration: 'In progress',
    details: 'Pursuing M.Tech alongside full-time engineering work at Wipro.',
  },
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    school: 'Techno India Hooghly College',
    duration: '—',
    details: 'Foundational coursework in computer science, software development, and database systems.',
  },
];

export const achievements = [
  {
    title: 'Europe Excellence Award — Rising Star',
    issuer: 'Wipro',
    description:
      'Recognized for outstanding ownership, delivery quality, and measurable impact on the INPAT application across the European business unit.',
    imageUrl: `${import.meta.env.BASE_URL}rising-star-award.jpg`,
    certificateUrl: `${import.meta.env.BASE_URL}rising-star-award.pdf`,
  },
];
