import React from "react";

import TabsInfo from "common/layout/tabs/info";

const InfoTabs = () => {
  return (
    <TabsInfo
      description="나눔코리아를 소개합니다."
      title="나눔코리아 소개"
      tabs={[
        { name: "중앙회장 인사말", route: "/info/greeting" },
        { name: "나눔코리아 연혁", route: "/info/history" },
        { name: "나눔코리아송", route: "/info/song" },
        { name: "찾아오시는 길", route: "/info/map" },
      ]}
    />
  );
};

export default InfoTabs;
