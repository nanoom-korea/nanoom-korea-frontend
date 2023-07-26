import React from "react";

import Layout from "common/layout";
import Page from "common/layout/page";
import BoardTabs from "pages/board/tabs";

const NoticeBoard = () => {
  return (
    <Layout title="공지사항">
      <BoardTabs />
      <Page title="공지사항" path={["나눔코리아", "게시판", "공지사항"]}>
        <div>NoticeBoard</div>
      </Page>
    </Layout>
  );
};

export default NoticeBoard;
