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

export const BlogPosts = [
  {
    title: "Innovations in Pipeline Monitoring: The Future of LDR Technology",
    summary:
      "Explore the latest advancements in Long Distance Radar (LDR) technology and its transformative impact on pipeline monitoring and safety in the oil and gas industry.",
    image: "/blogs/blog-1.jpg",
    link: "/blog/ldr-technology",
    date: "2024-05-10",
    content: `The oil and gas industry is witnessing a technological revolution with the advent of Long Distance Radar (LDR) technology. This cutting-edge innovation is set to redefine pipeline monitoring, offering unprecedented accuracy and real-time data analysis. LDR technology utilizes advanced radar systems to detect anomalies, leaks, and structural weaknesses in pipelines over vast distances. By providing continuous monitoring capabilities, LDR enhances safety protocols and minimizes environmental risks associated with pipeline failures. As the industry embraces this technology, we can expect significant improvements in operational efficiency and a reduction in maintenance costs. The future of pipeline monitoring is here, and LDR technology is leading the way towards safer and more reliable energy infrastructure.`,
  },
  {
    title: "The Role of ROVs in Subsea Valve Maintenance",
    summary:
      "Discover how Remotely Operated Vehicles (ROVs) are revolutionizing subsea valve maintenance, enhancing safety, efficiency, and operational reliability in offshore oil and gas operations.",
    image: "/blogs/blog-2.jpg",
    link: "/blog/rov-subsea-maintenance",
    date: "2024-06-15",
    content: `Remotely Operated Vehicles (ROVs) have become indispensable tools in the maintenance of subsea valves, playing a crucial role in ensuring the safety and efficiency of offshore oil and gas operations. These sophisticated underwater robots are equipped with high-resolution cameras and specialized tools that allow operators to perform inspections, repairs, and maintenance tasks without the need for human divers. ROVs can access deepwater environments and navigate complex subsea structures, providing real-time data and visual feedback to surface teams. This capability not only enhances safety by reducing the risks associated with human intervention but also improves operational efficiency by enabling quicker response times to potential issues. As the demand for offshore energy resources continues to grow, the use of ROVs in subsea valve maintenance is set to expand, driving advancements in technology and operational practices within the industry.`,
  },
];

export const JobOpenings = [
  {
    title: "Product Designer",
    description:
      "We're looking for a mid-level product designer to join our team.",
    department: "Design",
    slug: "product-designer",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Engineering Manager",
    description:
      "We're looking for an experienced engineering manager to join our team.",
    department: "Development",
    slug: "engineering-manager",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    description:
      "We're looking for a customer success manager to join our team.",
    department: "Customer Service",
    slug: "customer-success-manager",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Account Executive",
    description: "We're looking for an account executive to join our team.",
    department: "Management",
    slug: "account-executive",
    remote: true,
    type: "Full-time",
  },
  {
    title: "SEO Marketing Manager",
    description:
      "We're looking for an experienced SEO marketing manager to join our team.",
    department: "Marketing",
    slug: "seo-marketing-manager",
    remote: true,
    type: "Full-time",
  },
];
