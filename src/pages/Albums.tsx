import { Link, Navbar, Page } from "framework7-react";

export const Albums = () => {
  return (
    <Page name="albums">
      <Navbar title="Albums" />
      <Link href="/albums/1">About Page</Link>albums
    </Page>
  );
};
