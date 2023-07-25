import React, { ReactNode } from "react";
import { AiOutlineRight } from "react-icons/ai";

type ButtonType = {
  name: string;
  rotues: string;
  style: string;
};

export type ExportArticleType = {
  topChildren: ReactNode;
  buttons: {
    first: ButtonType;
    second: ButtonType;
  };
};

const ExportArticle = (props: ExportArticleType) => {
  return (
    <div className="w-full">
      <div>{props.topChildren}</div>
      <div className="grid h-[45px] grid-cols-2">
        <button
          className={`flex items-center justify-between px-[20px] text-[14px] font-medium ${props.buttons.first.style}`}
        >
          <span>{props.buttons.first.name}</span>
          <AiOutlineRight color="#b5b3b1" />
        </button>
        <button
          className={`flex items-center justify-between px-[20px] text-[14px] font-medium ${props.buttons.second.style}`}
        >
          <span>{props.buttons.second.name}</span>
          <AiOutlineRight color="#b5b3b1" />
        </button>
      </div>
    </div>
  );
};

export default ExportArticle;
