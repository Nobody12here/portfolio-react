export const profile = {
  name: "Muhammad Auzair",
  title: "Backend & Blockchain Developer",
  location: "Islamabad, Pakistan",
  phone: "+92 303 5622496",
  email: "muhammad.auzair3@gmail.com",
  github: "https://github.com/Nobody12here",
  githubHandle: "Nobody12here",
  linkedin: "https://www.linkedin.com/in/auzair-raja1",
  linkedinHandle: "auzair-raja1",
  summary:
    "Backend and blockchain developer with 2+ years of hands-on experience building Django APIs, Solidity smart contracts, and Web3-integrated platforms. Focused on secure architecture, scalable workflows, and product-ready delivery.",
} as const;

export const highlights = [
  { label: "Years of Experience", value: "2+" },
  { label: "Student Requests Scaled", value: "1000+" },
  { label: "Office Visit Reduction", value: "90%" },
  { label: "Processing Time Cut", value: "70%" },
] as const;

export const experiences = [
  {
    role: "Blockchain Developer",
    company: "Fiverr",
    period: "2023 - Present",
    points: [
      "Designed and deployed Solidity smart contracts for DeFi and NFT products.",
      "Built secure and gas-optimized architecture with Hardhat and Truffle.",
      "Integrated dApps using Ethers.js, wagmi, and viem with wallet flows.",
    ],
  },
  {
    role: "Internee Developer (Backend & Blockchain)",
    company: "Baboons Netherland (Remote)",
    period: "2024 - Present",
    points: [
      "Built Django-based Web3 backends connecting on-chain and off-chain data.",
      "Deployed Solidity contracts and performed manual QA for DeFi modules.",
      "Collaborated with frontend teams for smooth integration and delivery.",
    ],
  },
  {
    role: "Django Backend Developer",
    company: "CUST",
    period: "2025 - Present",
    points: [
      "Developed secure REST APIs for student service automation.",
      "Implemented PDF letter generation and role-based access workflows.",
      "Contributed to modular, maintainable backend architecture.",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Backend",
    items: ["Python", "Django", "Django REST Framework", "REST APIs", "GraphQL (basic)"]
  },
  {
    title: "Blockchain",
    items: ["Solidity", "Ethers.js", "Web3.js", "wagmi", "viem", "OpenZeppelin", "Foundry", "Hardhat"]
  },
  {
    title: "Frontend & Integration",
    items: ["React", "TypeScript", "WalletConnect", "Next.js (basic)"]
  },
  {
    title: "Data, DevOps & Cloud",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "GitHub Actions", "AWS EC2", "Azure (basic)"]
  },
] as const;

export const projects = [
  {
    name: "CUST App",
    stack: "Django, DRF, PostgreSQL",
    summary:
      "Student application management backend automating official letter and certificate workflows with secure role-based access.",
    impact: "Reduced physical office visits by 90% and processing time by 70%.",
  },
  {
    name: "DIORA Wallet",
    stack: "React, TypeScript, Solidity, WalletConnect",
    summary:
      "Multi-chain Web3 wallet supporting Ethereum, BSC, and Polygon with portfolio tracking and NFT gallery features.",
    impact: "Integrated cross-chain swap flows and secure wallet connectivity.",
  },
  {
    name: "DeFi Investment Tracker",
    stack: "Django, React, Solidity",
    summary:
      "Crypto investment platform with automated profit/loss, payout, and liquidation logic plus transaction-aware dashboards.",
    impact: "Delivered end-to-end backend logic and deployed on AWS EC2 for testing.",
  },
  {
    name: "LayerX",
    stack: "React, TypeScript, Solidity, Django",
    summary:
      "Web3 platform with meme-token launch modules, NFT marketplace, IXO flows, and wallet-connected on-chain actions.",
    impact: "Unified DeFi, NFT, and launchpad capabilities in one modular app.",
  },
] as const;

export const education = {
  degree: "BS Software Engineering",
  school: "Capital University of Science and Technology (CUST)",
  year: "2025",
} as const;
