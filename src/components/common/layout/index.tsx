import React, { ReactNode } from "react";
import Head from "next/head";

import Header from "common/layout/header";
import Navigation from "common/layout/navigation";
import BottomNavigation from "common/layout/bottomNavigation";
import Footer from "common/layout/footer";

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
      <div className="min-w-[1280px]">
        <Header />
        <Navigation />
        <main className="min-h-screen">{props.children}</main>
        <BottomNavigation />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
