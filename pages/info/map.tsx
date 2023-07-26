import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import InfoTabs from "pages/info/tabs";

const Map = () => {
  return (
    <Layout title="찾아오시는 길">
      <InfoTabs />
      <Page title="찾아오시는 길" path={["나눔코리아", "나눔코리아 소개", "찾아오시는 길"]}>
        <div>찾아오시는 길</div>
      </Page>
    </Layout>
  );
};

export default Map;
