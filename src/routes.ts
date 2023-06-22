import { Albums } from "~/pages/Albums";
import { Album } from "~/pages/Album";

export const routes = [
  {
    path: "/",
    component: Albums,
  },
  {
    path: "/albums",
    component: Albums,
  },
  {
    path: "/albums/:albumId",
    component: Album,
  },
];
