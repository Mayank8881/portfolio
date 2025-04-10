import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "InvestyGram",
    href: "/projects",
    tags: ["Nextjs" ,"Typescript" ,"Gemini-API" ,"MongoDB" ,"Startups"  ,"Shadcn ui" , "Tailwindcss" , "Vercel"],
    image: {
      LIGHT: "/images/projects/investygram.png",
      DARK: "/images/projects/investygram.png",
    },
  },
  {
    index: 1,
    title: "SmartHire",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/smarthire.png",
      DARK: "/images/projects/smarthire.png",
    },
  },
  {
    index: 2,
    title: "DocuTrace",
    href: "/projects",
    tags: ["Reactjs", "Blockchain", "Tailwindcss", "Vercel", "React DND"],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "InvestyGram",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/investygram.png",
      "/images/projects/investygram.png",
    ],
    description:
      "Developed a startup-investor matchmaking platform using Next.js, MongoDB, and AI-driven algorithms, optimizing funding accessibility and investor discovery.Implemented a real-time funding system with secure authentication using JWT, enhancing transparency and reducing inefficiencies in startup investments.Engineered a scalable backend with MongoDB, enabling structured investment data storage and seamless investor-startup interactions.Designed an intuitive UI with Tailwind CSS, improving user experience and engagement for both investors and startups.",
    sourceCodeHref: "https://github.com/Code4Both/InvestyGram",
    liveWebsiteHref: "https://investygram.vercel.app/",
  },
  {
    name: "SmartHire",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/smarthire2.png",
      "/images/projects/smarthire2.png",
      "/images/projects/smarthire2.png",
    ],
    description:
      "Developed a resume shortlisting and interview preparation platform, utilizing machine learning for automated resume filtering. Built with Next.js, Clerk,NextAuth, and PostgreSQL.Achieved an increase in user satisfaction scores from new features by gathering feedback from 200 users during testing phases.",
          sourceCodeHref: "https://github.com/Mayank8881/SmartHire",
    liveWebsiteHref: "https://smart-hire-ebon.vercel.app/",
  },
  {
    name: "ShareFile",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/fileshare.png",
      "/images/projects/fileshare.png",
      "/images/projects/fileshare.png",
      "/images/projects/fileshare.png",
      // "/images/projects/manyGamesWordle.webp",
    ],
    description:
      "ShareFile is a secure and user-friendly file-sharing platform that allows users to upload, store, and share files via Cloudinary. Designed for seamless collaboration, the platform generates shareable links for quick and efficient file distribution. It prioritizes security, ease of use, and reliability to enhance file management for individuals and businesses.",
    sourceCodeHref: "https://github.com/Mayank8881/sharefile",
    liveWebsiteHref: "https://sharefile-three.vercel.app/",
  },
  // {
  //   name: "My portfolio",
  //   favicon: "/favicon.ico",
  //   imageUrl: [
  //     "/images/projects/portfolioDark.webp",
  //     "/images/projects/portfolioLight.webp",
  //   ],
  //   description:
  //     "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
  //   sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
  //   liveWebsiteHref: siteMetadata.siteUrl,
  // },
  // {
  //   name: "Covid Tracker",
  //   favicon: "/images/projects/logos/covidtracker.ico",
  //   imageUrl: [
  //     "/images/projects/covidTracker.webp",
  //     "/images/projects/covidTrackerMap.webp",
  //     "/images/projects/covidTrackerTable.webp",
  //   ],
  //   description:
  //     "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
  //   sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
  //   liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  // },
  // {
  //   name: "Stock predictor",
  //   favicon: "/images/projects/logos/stockpredictor.ico",
  //   imageUrl: [
  //     "/images/projects/stockPredictor.webp",
  //     "/images/projects/stockPredictorCandleChart.webp",
  //     "/images/projects/stockPredictorCompareChart.webp",
  //     "/images/projects/stockPredictorLineChart.webp",
  //   ],
  //   description:
  //     "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
  //   sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  // },
];
