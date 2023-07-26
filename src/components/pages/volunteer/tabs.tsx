import React from "react";

import TabsInfo from "common/layout/tabs/info";

const VolunteerTabs = () => {
  return (
    <TabsInfo
      title="봉사 참여하기"
      description="나눔코리아 가족이 되어 뜻 깊은 활동에 함께 동참해 주세요!"
      tabs={[
        { name: "활동참여 안내", route: "/volunteer/info" },
        { name: "봉사 참여 신청", route: "/volunteer/register" },
        { name: "VMS등록 안내", route: "/volunteer/vms" },
      ]}
    />
  );
};

export default VolunteerTabs;
