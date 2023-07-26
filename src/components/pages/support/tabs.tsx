import React from "react";

import TabsInfo from "common/layout/tabs/info";

const SupportTabs = () => {
  return (
    <TabsInfo
      title="후원하기"
      description="여러분의 작은 관심은 어려운 이웃에게 큰 힘이 됩니다."
      tabs={[
        { name: "정기후원 신청", route: "/support/regular" },
        { name: "일시후원 안내", route: "/support/temporary" },
      ]}
    />
  );
};

export default SupportTabs;
