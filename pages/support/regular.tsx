import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import SupportTabs from "pages/support/tabs";

const RegularSupport = () => {
  return (
    <Layout title="정기후원 신청">
      <SupportTabs />
      <Page title="정기후원 신청" path={["나눔코리아", "후원하기", "정기후원 신청"]}>
        <div>RegularSupport</div>
      </Page>
    </Layout>
  );
};

export default RegularSupport;
