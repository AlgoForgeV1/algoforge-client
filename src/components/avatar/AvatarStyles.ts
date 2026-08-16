import {
  initials,
  micah,
  notionists,
  openPeeps,
} from "@dicebear/collection";

export type AvatarStyle =
  | "initials"
  | "micah"
  | "open-peeps"
  | "notionists";

export const avatarStyles = {
  initials,
  micah,
  "open-peeps": openPeeps,
  notionists, 
};

export const avatarInfo = [
  {
    id: "initials" as const,
    title: "Initials",
    description: "Minimal & Professional",
  },
  {
    id: "micah" as const,
    title: "Micah",
    description: "Friendly & Modern",
  },
  {
    id: "open-peeps" as const,
    title: "Open Peeps",
    description: "Fun & Expressive",
  },
  {
    id: "notionists" as const,
    title: "Notionists",
    description: "Creative & Illustrated",
  },
];