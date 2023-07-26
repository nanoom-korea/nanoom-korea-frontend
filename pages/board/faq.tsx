import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import BoardTabs from "pages/board/tabs";

const FaqBoard = () => {
  return (
    <Layout title="자주묻는 질문">
      <BoardTabs />
      <Page title="자주묻는 질문" path={["나눔코리아", "게시판", "자주묻는 질문"]}>
        <div>FaqBoard</div>
      </Page>
    </Layout>
  );
};

export default FaqBoard;
