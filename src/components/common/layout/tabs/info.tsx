import React from "react";
import Image from "next/image";

import Tabs, { TabType } from "common/layout/tabs";

type TabInfoPropsType = {
  title: string;
  description: string;
  tabs: TabType[];
};

const TabsInfo = (props: TabInfoPropsType) => {
  return (
    <div>
      <div className="relative">
        <div className="relative h-[230px] w-full">
          <Image src="/images/banner/tab.jpg" alt="탭 배너" fill objectFit="cover" />
        </div>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <h2 className="text-[50px] font-bold text-[#ffffff]">{props.title}</h2>
          <hr className="mb-[12px] h-[4px] w-[22px] border-none bg-[#fbce01]" />
          <p className="text-[#ffffff]">{props.description}</p>
        </div>
      </div>
      <Tabs tabs={props.tabs} />
    </div>
  );
};

export default TabsInfo;
