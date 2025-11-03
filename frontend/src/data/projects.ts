import sampleImg from "@/assets/profile-pic.avif";

export const projects = [
  {
    id: "task-manager",
    title: "Task Manager API",
    description:
      "High-performance .NET API with JWT auth, background jobs and PostgreSQL.",
    tech: [".NET", "PostgreSQL", "Docker"],
    image: sampleImg,
    link: "/projects/task-manager",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Vite and Tailwind — fast and accessible.",
    tech: ["React", "Vite", "Tailwind"],
    image: sampleImg,
    link: "/projects/portfolio",
  },
  {
    id: "realtime-chat",
    title: "Realtime Chat",
    description:
      "Lightweight realtime chat using WebSockets and a small .NET SignalR service.",
    tech: ["SignalR", "WebSockets", "Redis"],
    image: sampleImg,
    link: "/projects/realtime-chat",
  },
];
