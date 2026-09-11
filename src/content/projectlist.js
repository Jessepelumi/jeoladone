import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import { Globe } from "@phosphor-icons/react/dist/ssr";

export const projectlist = [
  {
    id: 1,
    image: "yiyara.png",
    project_title: "Yiyara",
    description:
      "Yiyara is an AI-powered goal-planning platform that transforms open-ended ambitions into structured SMART goals and calendar-ready tasks with clear due dates. Users can refine their plans through contextual conversations, review AI-proposed changes before approving them, and track progress as their goals evolve. Versioned plan history and rollback keep planning flexible while ensuring users remain in control",
    tools: [
      "Python",
      "TypeScript",
      "Django",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "Gemini API",
    ],
    links: [
      {
        icon: <GithubLogo size={24} />,
        link: "https://github.com/Jessepelumi/yiyara",
      },
      {
        icon: <Globe size={24} />,
        link: "https://github.com/Jessepelumi/yiyara_",
      },
    ],
  },
  {
    id: 2,
    image: "syrax.png",
    project_title: "Syrax",
    description:
      "A secure, mobile-first platform for collecting large files directly into cloud storage. Senders can upload through a shared link without registering, while resumable transfers and automatic recovery provide reliable delivery across unstable connections",
    tools: ["TypeScript", "Next.js", "PostgreSQL", "Google Cloud"],
    links: [
      {
        icon: <GithubLogo size={24} />,
        link: "https://github.com/Jessepelumi/syrax",
      },
    ],
  },
  {
    id: 3,
    image: "Segmentor.png",
    project_title: "Segmentor",
    description:
      "Segmentor is a Go-based video processing and streaming system that ingests uploaded videos, transcodes them into HLS format using FFmpeg, and delivers them through a segmented streaming pipeline for efficient playback. The system demonstrates how modern video platforms optimize startup time and buffering by serving media in small chunks rather than as a single file.",
    tools: ["Go", "FFmpeg", "HLS"],
    links: [
      {
        icon: <GithubLogo size={24} />,
        link: "https://github.com/Jessepelumi/segmentor",
      },
    ],
  },
  {
    id: 4,
    image: "eclipsered.png",
    project_title: "EclipseRed",
    description:
      "A custom Visual Studio Code theme designed for developers who love dark interfaces, featuring a striking red accent inspired by the beauty of an eclipse. EclipseRed offers a visually immersive coding experience and has garnered over 400 downloads",
    tools: ["JSON", "YAML"],
    links: [
      {
        icon: <GithubLogo size={24} />,
        link: "https://github.com/Jessepelumi/eclipseRed",
      },
      {
        icon: <ArrowSquareOut size={24} />,
        link: "https://marketplace.visualstudio.com/items?itemName=AdesinaJesse.eclipseRed",
      },
    ],
  },
  {
    id: 5,
    image: "",
    project_title: "FundCare",
    description:
      "FundCare is a health fundraising dashboard designed to help users track, manage, and visualize health-related fundraising campaigns in a clear and intuitive way. It provides a structured interface for monitoring donations, campaign progress, and key health metrics in real time.",
    tools: ["JSON", "YAML"],
    links: [
      {
        icon: <GithubLogo size={24} />,
        link: "https://github.com/Jessepelumi/eclipseRed",
      },
      {
        icon: <ArrowSquareOut size={24} />,
        link: "https://marketplace.visualstudio.com/items?itemName=AdesinaJesse.eclipseRed",
      },
    ],
  },
  {
    id: 6,
    image: "EmployeeRecords.png",
    project_title: "Employee Record Manager",
    description:
      "Employee records manager to properly store necessary info about employees, with functionalities that help search by selected filters, modify employee data and also delete employee records",
    tools: ["Java"],
    links: [
      {
        icon: <GithubLogo size={24} />,
        link: "https://github.com/Jessepelumi/EmployeeRecordManager",
      },
    ],
  },
];
