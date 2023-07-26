import React from "react";
import { useRouter } from "next/router";

export type TabType = { name: string; route: string };

const Tabs = (props: { tabs: TabType[] }) => {
  const { push, pathname } = useRouter();

  return (
    <div className="flex justify-center border-b border-[#dddddd]">
      {props.tabs.map((el, idx) => (
        <button
          onClick={() => push(el.route)}
          className={`h-[60px] border-r border-[#dddddd] px-[42px] hover:bg-[#585858] hover:font-bold hover:text-[#ffffff] ${
            idx === 0 && "border-l"
          } ${pathname === el.route ? "bg-[#585858] font-bold text-[#ffffff]" : "text-[#4e4e4e]"}`}
          key={el.name}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
