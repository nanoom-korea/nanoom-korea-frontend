import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import BoardTabs from "pages/board/tabs";

const ContestBoard = () => {
  return (
    <Layout title="자원봉사대회">
      <BoardTabs />
      <Page title="자원봉사대회" path={["나눔코리아", "게시판", "자원봉사대회"]}>
        <div>ContestBoard</div>
      </Page>
    </Layout>
  );
};

export default ContestBoard;
