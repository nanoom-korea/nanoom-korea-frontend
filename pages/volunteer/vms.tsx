import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import VolunteerTabs from "pages/volunteer/tabs";

const VolunteerVMS = () => {
  return (
    <Layout title="VMS등록 안내">
      <VolunteerTabs />
      <Page title="VMS등록 안내" path={["나눔코리아", "봉사 참여하기", "VMS등록 안내"]}>
        <div>VolunteerVMS</div>
      </Page>
    </Layout>
  );
};

export default VolunteerVMS;
