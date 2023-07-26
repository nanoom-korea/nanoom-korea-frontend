import React, { ReactNode } from "react";
import { AiOutlineRight } from "react-icons/ai";

type PagePropsType = {
  title: string;
  path: string[];
  children: ReactNode;
  className?: string;
};

const Page = (props: PagePropsType) => {
  return (
    <div className="mt-[50px] flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="flex items-baseline justify-between">
          <h3 className="text-[30px] font-bold text-[#464646]">{props.title}</h3>
          <div className="flex gap-[5px]">
            {props.path.map((el, idx) => (
              <div className="flex items-center gap-[5px]" key={el}>
                <span className="text-[13px] text-[#8f8f8f]">{el}</span>
                {idx !== props.path.length - 1 && <AiOutlineRight className="h-[9px] w-[10px] font-bold" />}
              </div>
            ))}
          </div>
        </div>
        <hr className="mb-[30px] mt-[15px] border-[#dddddd]" />
        <div className={`h-full w-full ${props.className}`}>{props.children}</div>
      </div>
    </div>
  );
};

export default Page;
