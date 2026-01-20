import { companies } from "./public/companies";

export const projects = [
  {
    title: "Long distance radar (LDR) scan for pipeline monitoring at TOR",
    description:
      "Deployed advanced LDR scanning technology for comprehensive pipeline monitoring at Tema Oil Refinery, ensuring operational safety through real-time anomaly detection.",
    companyUrl: companies[4],
    image: "/company.jpg",
    link: "/projects/tor",
    startDate: "January 2024",
    endDate: "June 2024",
    achievements: [
      "Successfully deployed LDR technology covering 50km of critical pipeline infrastructure",
      "Reduced incident response time by 75% through real-time anomaly detection",
      "Achieved zero pipeline failures during the monitoring period",
    ],
  },
  {
    title: "Inspection and maintenance of subsea valves at Yinson",
    description:
      "Conducted comprehensive inspection and maintenance on critical subsea valves using advanced ROV technology, ensuring optimal performance and extending asset lifespan significantly.",
    companyUrl: companies[6],
    image: "/engineering.jpg",
    link: "/projects/yinson",
    startDate: "March 2024",
    endDate: "August 2024",
    achievements: [
      "Completed inspection and maintenance of 24 subsea valves without production downtime",
      "Extended valve operational lifespan by 40% through preventive maintenance protocols",
      "Reduced future maintenance costs by 30% through early issue identification",
    ],
  },
];
