import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import BoardTabs from "pages/board/tabs";

const ActivityBoard = () => {
  return (
    <Layout title="활동소식">
      <BoardTabs />
      <Page title="활동소식" path={["나눔코리아", "게시판", "활동소식"]}>
        <div>ActivityBoard</div>
      </Page>
    </Layout>
  );
};

export default ActivityBoard;
