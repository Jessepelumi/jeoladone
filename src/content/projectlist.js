import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";

export const projectlist = [
  {
    id: 1,
    image: "Zimna.png",
    project_title: "Zimna AI",
    description:
      "Zimna AI is an intelligent goal-execution platform that transforms high-level ambitions into clear, structured, and actionable plans. It uses AI to break goals down into manageable tasks, schedule them effectively, and track real progress over time. With its adaptive guidance, Zimna helps individuals and teams stay consistent, focused, and actually achieve what they set out to do.",
    tools: [
      "Python",
      "TypeScript",
      "Django",
      "Next.js",
      "PostgreSQL",
      "Docker",
    ],
    links: [
      {
        icon: <GithubLogo size={24} />,
        link: "https://github.com/Jessepelumi/zimna",
      },
    ],
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    image: "kavodengineering.png",
    project_title: "Kavod Engineering",
    description:
      "A professional website for KAVOD — a leading expert in materials quality assurance and quality control inspection. Built to streamline client engagement, the website features a dynamic service inquiry form, responsive design, and optimized user experience for prospective clients across various industries",
    tools: ["TypeScript", "Next.js", "Tailwind", "AppsScript"],
    links: [
      {
        icon: <GithubLogo size={24} />,
        link: "https://github.com/Jessepelumi/kavodengineering",
      },
      {
        icon: <ArrowSquareOut size={24} />,
        link: "https://www.kavodengineering.com",
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
