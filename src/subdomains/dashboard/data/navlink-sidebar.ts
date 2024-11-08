import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

//  no teams tirar depois de por a api e os projects apos criar os projetos
export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Cromometro",
          url: "/dashboard/cronometer",
        },
        {
          title: "Projetos",
          url: "/dashboard/projects",
        },
        {
          title: "Graficos",
          url: "/dashboard/graphics",
        },
      ],
    },
    {
      title: "Tarefas",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "/dashboard/genesis",
        },
        {
          title: "Explorer",
          url: "/dashboard/explorer",
        },
        {
          title: "Quantum",
          url: "/dashboard/quantum",
        },
      ],
    },
    {
      title: "Documentação",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/dashboard/introduction",
        },
        {
          title: "Get Started",
          url: "/dashboard/started",
        },
        {
          title: "Tutorials",
          url: "/dashboard/tutorials",
        },
        {
          title: "Changelog",
          url: "/dashboard/changelog",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Permssões",
          url: "/dashboard/permission",
        },
        {
          title: "Usuarios",
          url: "/dashboard/users",
        },
        {
          title: "Projetos",
          url: "/dashboard/projects",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}
