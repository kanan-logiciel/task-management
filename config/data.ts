import { FaProjectDiagram, FaTasks, FaCalendarAlt } from "react-icons/fa";
import { IconType } from "react-icons";

export interface QuickAccessLink {
  title: string;
  link: string;
  description: string;
  icon: IconType;
}

export const quickAccessLinks: QuickAccessLink[] = [
  {
    title: "Projects",
    link: "/projects",
    description: "View & manage projects",
    icon: FaProjectDiagram,
  },
  {
    title: "Tasks",
    link: "/tasks",
    description: "Track & complete tasks",
    icon: FaTasks,
  },
  {
    title: "Calendar",
    link: "/calendar",
    description: "Check deadlines",
    icon: FaCalendarAlt,
  },
];

export const recentProjects = [
  { name: "Project Alpha", deadline: "March 15, 2025" },
  { name: "Project Beta", deadline: "April 10, 2025" },
];

export const recentTasks = [
  { name: "Fix UI Bug", status: "Pending" },
  { name: "Update Docs", status: "Completed" },
];
