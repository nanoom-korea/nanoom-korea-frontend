import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import BoardTabs from "pages/board/tabs";

const QnaBoard = () => {
  return (
    <Layout title="질문답변 게시판">
      <BoardTabs />
      <Page title="질문답변 게시판" path={["나눔코리아", "게시판", "질문답변 게시판"]}>
        <div>QnaBoard</div>
      </Page>
    </Layout>
  );
};

export default QnaBoard;
