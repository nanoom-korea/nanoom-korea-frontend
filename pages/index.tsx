import React from "react";

import Layout from "common/layout";
import Banner from "pages/home/banner";
import HomeBody from "pages/home/body";

const Home = () => {
  return (
    <Layout title="나눔코리아">
      <div className="flex flex-col gap-[60px]">
        <Banner />
        <HomeBody />
      </div>
    </Layout>
  );
};

export default Home;
