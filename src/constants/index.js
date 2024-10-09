import {
  frontend,
  backend,
  ux,
  ragbasedchatbot,
  prototyping,
  javascript,
  typescript,
  html,
  ds,
  linux,
  ubuntu,
  genai,
  jenkins,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  giki,
  bytewise,
  git,
  ml,
  streamlit,
  aws,
  figma,
  jupyter,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  python,
  flask,
  kaggle,
  colab,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'ML Engineer',
    icon: ml,
  },
  {
    title: 'Data Scientist',
    icon: ds,
  },
  {
    title: 'GenAI Engineer',
    icon: genai,
  },
  {
    title: 'Content Writing',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Flask',
    icon: flask,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Jupyter',
    icon: jupyter,
  },
  {
    name: 'Colab',
    icon: colab,
  },
  {
    name: 'Kaggle',
    icon: kaggle,
  },
  {
    name: 'Streamlit',
    icon: streamlit,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'Ubuntu',
    icon: ubuntu,
  },
  {
    name: 'Linux',
    icon: linux,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Jenkins',
    icon: jenkins,
  },
  {
    name: 'Docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Advanced AI Bootcamp on DNN',
    company_name: 'GIKI, Sky Electric, Skylabai',
    icon: giki,
    iconBg: '#6FC300',
    date: 'July - Aug. 2024',
    details: [
      'Comprehensive bootcamp covering theory and hands-on practical experience',
      'Focused on core architectures of Deep Neural Networks (DNN)',
      'Weekly projects on Machine Learning, Deep Neural Networks, Computer Vision, and Generative AI (GENAI)',
      'Participated in final competition and secured 1st place'
    ],
  },
  {
    title: 'Data Science Fellow',
    company_name: 'Bytewise',
    icon: bytewise,
    iconBg: '#333333',
    date: 'June - Aug. 2024',
    details: [
      'Self-taught Data Science through structured learning and practical projects',
      'Engaged in monthly projects to apply data science concepts',
      'Developed an AI Career Counselling system as the final project'
    ],
  },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'RAG based Chatbot',
    description: 'Developed a RAG chatbot with Gemini and Chroma for precise, document-based answers.   ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: ragbasedchatbot,
    repo: 'https://github.com/faizrazadec/Chatbots/tree/main/RAG%20Model%20with%20Gemini',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'MLOpenLab',
    description:
      'User-friendly tool, making it easy to learn ML for beginners, powered by Python library tkiner.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/faizrazadec/DNN-Bootcamp-GIKI/tree/main/Projects/MLOpenLAB',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'GuardianEye',
    description: 'Real-time weapon detection powered by custom-trained YOLOv8, ensuring safety with every frame.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/faizrazadec/DNN-Bootcamp-GIKI/tree/main/Projects/wepon_detection_app',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Advancing Age-Linked Analysis through AI (FYP)',
    description: `Advancing early intervention with an AI-driven speech analysis system to detect developmental challenges in children.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Solar Production and Load Prediction',
    description:
      'Forecast the Load and the Generation of PV on the real dataset provided by Sky Electric.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo:'https://github.com/faizrazadec/DNN-Bootcamp-GIKI/tree/main/Projects/Solar%20Production%20and%20Load%20Prediction%20Competition',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
