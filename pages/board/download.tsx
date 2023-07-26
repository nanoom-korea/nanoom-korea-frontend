import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import BoardTabs from "pages/board/tabs";

const DownloadBoard = () => {
  return (
    <Layout title="나눔코리아 자료실">
      <BoardTabs />
      <Page title="나눔코리아 자료실" path={["나눔코리아", "게시판", "나눔코리아 자료실"]}>
        <div>DownloadBoard</div>
      </Page>
    </Layout>
  );
};

export default DownloadBoard;
