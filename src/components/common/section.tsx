import React, { ReactNode } from "react";

export type SectionWithTitleType = {
  title: string;
  children: ReactNode;
  route: string;
};

const SectionWithTitle = (props: SectionWithTitleType) => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h3 className="text-[18px] font-bold">{props.title}</h3>
        <button className="rounded-xl bg-[#f4f4f4] px-2 text-[14px] font-semibold text-[#8f8f8f]">more +</button>
      </div>
      <hr className="border-[#dddddd]" />
      <div>{props.children}</div>
    </section>
  );
};

export default SectionWithTitle;
