import React, { ReactNode } from "react";
import Head from "next/head";

import Header from "common/layout/header";
import Navigation from "common/layout/navigation";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      <Navigation />
      {props.children}
    </>
  );
};

export default Layout;
