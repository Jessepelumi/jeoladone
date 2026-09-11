export const companies = [
  {
    id: 1,
    companyName: "Hanoled",
    link: "https://www.hanoled.com/",
    title: "Software Engineer",
    startDate: "Jun 2026",
    endDate: "Present",
    details: [
      "Built an offline-capable CBT exam system using PWA and IndexedDB, preserving candidate answers during network outages and synchronizing them without duplicate submissions within a 48-hour recovery window.",
      "Architected a central PostgreSQL-backed data platform across 2 products, unifying student, staff, subscription, assessment, and grading records while retiring 14 redundant tables and preventing duplicate or inconsistent records.",
      "Implemented OIDC/PKCE-based secure sign-on and data synchronization across Node.js 3 services, enforcing school-specific access controls and automatically recovering failed updates without disrupting other services",
    ],
  },
  {
    id: 2,
    companyName: "Kavod Engineering Services",
    link: "https://www.kavodengineering.com/",
    title: "Software Engineer Intern",
    startDate: "Mar 2025",
    endDate: "May 2025",
    details: [
      "Built the company's web platform using Next.js and automated consultation workflows with Google Apps Script, capturing enquiries, storing lead data, and triggering user and admin email notifications.",
      "Prototyped a Go-based video processing system for a proprietary LMS platform, automatically preparing videos at multiple quality levels for reliable playback across different network conditions.",
    ],
  },
];
