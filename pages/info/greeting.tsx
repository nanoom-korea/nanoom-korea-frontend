import React from "react";
import Image from "next/image";

import Layout from "common/layout";
import Page from "common/layout/page";
import InfoTabs from "pages/info/tabs";

const Greeting = () => {
  return (
    <Layout title="나눔코리아 소개">
      <InfoTabs />
      <Page title="중앙회장 인사말" path={["나눔코리아", "나눔코리아 소개", "중앙회장 인사말"]}>
        <div className="relative h-[1000px] w-full border border-[#dddddd]">
          <Image src="/images/greeting.png" alt="인사말" fill />
        </div>
      </Page>
    </Layout>
  );
};

export default Greeting;
