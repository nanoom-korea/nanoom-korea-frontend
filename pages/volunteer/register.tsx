import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import VolunteerTabs from "pages/volunteer/tabs";

const VolunteerRegsiter = () => {
  return (
    <Layout title="봉사 참여 신청">
      <VolunteerTabs />
      <Page title="봉사 참여 신청" path={["나눔코리아", "봉사 참여하기", "봉사 참여 신청"]}>
        <div>VolunteerRegsiter</div>
      </Page>
    </Layout>
  );
};

export default VolunteerRegsiter;
