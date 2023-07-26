import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import VolunteerTabs from "pages/volunteer/tabs";

const VolunteerInfo = () => {
  return (
    <Layout title="활동참여 안내">
      <VolunteerTabs />
      <Page title="활동참여 안내" path={["나눔코리아", "봉사 참여하기", "활동참여 안내"]}>
        <div>VolunteerInfo</div>
      </Page>
    </Layout>
  );
};

export default VolunteerInfo;
