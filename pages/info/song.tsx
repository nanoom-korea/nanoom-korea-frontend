import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import InfoTabs from "pages/info/tabs";

const Song = () => {
  return (
    <Layout title="나눔코리아송">
      <InfoTabs />
      <Page title="나눔코리아송" path={["나눔코리아", "나눔코리아 소개", "나눔코리아송"]}>
        <div>Song</div>
      </Page>
    </Layout>
  );
};

export default Song;
