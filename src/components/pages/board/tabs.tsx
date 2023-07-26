import React from "react";

import TabsInfo from "common/layout/tabs/info";

const BoardTabs = () => {
  return (
    <TabsInfo
      title="게시판"
      description="나눔코리아는 여러분과 소통합니다."
      tabs={[
        { name: "자주묻는 질문", route: "/board/faq" },
        { name: "질문답변 게시판", route: "/board/qna" },
        { name: "공지사항", route: "/board/notice" },
        { name: "나눔코리아 자료실", route: "/board/download" },
        { name: "자원봉사대회", route: "/board/contest" },
        { name: "활동소식", route: "/board/activity" },
      ]}
    />
  );
};

export default BoardTabs;
