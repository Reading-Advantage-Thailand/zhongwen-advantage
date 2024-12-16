import { StudentPageConfig } from "@/types";

export const studentPageConfig: StudentPageConfig = {
  mainNav: [
    {
      title: "home",
      href: "/",
    },
    {
      title: "about",
      href: "/about",
    },
    {
      title: "contact",
      href: "/contact",
    },
    {
      title: "authors",
      href: "/authors",
    },
  ],
  sidebarNav: [
    {
      title: "read",
      href: "/student/read",
      icon: "book",
    },
    {
      id: "onborda-sentences",
      title: "sentences",
      href: "/student/sentences",
      icon: "flashcard",
    },
    {
      id: "onborda-vocabulary",
      title: "vocabulary",
      href: "/student/vocabulary",
      icon: "book",
    },
    {
      id: "onborda-reports",
      title: "reports",
      href: "/student/reports",
      icon: "dashboard",
    },
    {
      id: "onborda-history",
      title: "history",
      href: "/student/history",
      icon: "record",
    },
  ],
};
