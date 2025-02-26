import type { IconType } from "react-icons/lib";

import DashboardProject from "assets/projects/dashboard-project.png?url";
import KredilyProject from "assets/projects/kredily-project.png?url";
import TodoProject from "assets/projects/todo-project.png?url";
import ZohoCloneProject from "assets/projects/zoho-clone-project.png?url";
import AirtableIcon from "icons/AirtableIcon";
import AwsIcon from "icons/AwsIcon";
import BuildIcon from "icons/BuildIcon";
import NextjsIcon from "icons/NextjsIcon";
import PrismaIcon from "icons/PrismaIcon";
import ReactIcon from "icons/ReactIcon";
import ReduxIcon from "icons/ReduxIcon";
import StorybookIcon from "icons/StorybookIcon";
import StyledComponentsIcon from "icons/StyledComponentsIcon";
import TailwindIcon from "icons/TailwindIcon";
import TestIcon from "icons/TestIcon";
import GraphqlIcon from "icons/TrpcIcon";
import trpcIcon from "icons/TrpcIcon";
import TypescriptIcon from "icons/TypescriptIcon";

const techTypes = [
  "Next.js",
  "TypeScript",
  "Vite",
  "Jest + RTL",
  "React",
  "Redux",
  "Prisma",
  "Styled Components",
  "TanStack Query",
  "Storybook",
  "Airtable",
  "AWS",
  "@craftjs/core",
  "Tailwind CSS",
  "tRPC",
  "Svelte",
  "GraphQL",
  "TypeGraphQL"
] as const;

type TechTuple = typeof techTypes;

export type ProjectTech = { tech: TechTuple[number]; icon: IconType };

export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  githubUrl?: string;
  techs: ProjectTech[];
  isPinned?: boolean;
};

const nextjsTech: ProjectTech = { tech: "Next.js", icon: NextjsIcon };
const typeScriptTech: ProjectTech = { tech: "TypeScript", icon: TypescriptIcon };
const prismaTech: ProjectTech = { tech: "Prisma", icon: PrismaIcon };
const styledComponentsTech: ProjectTech = { tech: "Styled Components", icon: StyledComponentsIcon };
const reactTech: ProjectTech = { tech: "React", icon: ReactIcon };
const reduxTech: ProjectTech = { tech: "Redux", icon: ReduxIcon };
const testTech: ProjectTech = { tech: "Jest + RTL", icon: TestIcon };
const tanStackQueryTech: ProjectTech = { tech: "TanStack Query", icon: ReactIcon };
const storybookTech: ProjectTech = { tech: "Storybook", icon: StorybookIcon };
const airtableTech: ProjectTech = { tech: "Airtable", icon: AirtableIcon };
const awsTech: ProjectTech = { tech: "AWS", icon: AwsIcon };
const craftjsTech: ProjectTech = { tech: "@craftjs/core", icon: BuildIcon };
const tailwindCssTech: ProjectTech = { tech: "Tailwind CSS", icon: TailwindIcon };
const trpcTech: ProjectTech = { tech: "tRPC", icon: trpcIcon };
const graphqlTech: ProjectTech = { tech: "GraphQL", icon: GraphqlIcon };
const typeGraphqlTech: ProjectTech = { tech: "TypeGraphQL", icon: GraphqlIcon };
// const viteReactTech: ProjectTech = { tech: "Vite", icon: ViteIcon };
// const svelteTech: ProjectTech = { tech: "Svelte", icon: SvelteIcon };

export const projects: Project[] = [
  {
    title: "React Todo Application",
    description: "Here You can see the Fully completed React Todo Project with attractive UI",
    image: TodoProject,
    url: "https://react-todo-application-webpage.netlify.app/",
    githubUrl: "https://github.com/DhakshinaMoorthi-Techee/React_Todo_Project",
    techs: [],
    isPinned: true
  },
  {
    title: "Kredily Invoice Application",
    description:
      "List Invoice - Here we have 3 sections, late invoice, unpaid Invoice & paid invoice, I have already inbuild 5 dummy records on this project, so you can understand the application clearly",
    image: KredilyProject,
    url: "https://kredilyapp-invoice-application.netlify.app/",
    githubUrl: "https://github.com/DhakshinaMoorthi-Techee/kredilyapp",
    techs: [],
    isPinned: true
  },
  {
    title: "Zoho Clone Webpage",
    description: "Here you can find the Zoho clone webpage",
    image: ZohoCloneProject,
    url: "https://zoho-client-clone-website.netlify.app/",
    githubUrl: "https://github.com/DhakshinaMoorthi-Techee/zoho-website-clone",
    techs: [],
    isPinned: true
  },
  {
    title: "Dashboard Webpage",
    description: "Here you can find the Dashboard webpage",
    image: DashboardProject,
    url: "https://dashboard-website-weather.netlify.app/",
    githubUrl: "https://github.com/DhakshinaMoorthi-Techee/Dashboard-website",
    techs: []
  }
];
