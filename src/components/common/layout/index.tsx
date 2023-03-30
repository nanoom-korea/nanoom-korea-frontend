import React, { ReactNode } from "react";
import Head from "next/head";

import Header from "common/layout/header";

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
      {props.children}
    </>
  );
};

export default Layout;
