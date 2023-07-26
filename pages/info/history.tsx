import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import InfoTabs from "pages/info/tabs";

const History = () => {
  return (
    <Layout title="나눔코리아 연혁">
      <InfoTabs />
      <Page title="나눔코리아 연혁" path={["나눔코리아", "나눔코리아 소개", "나눔코리아 연혁"]}>
        <div>나눔코리아 연혁</div>
      </Page>
    </Layout>
  );
};

export default History;
