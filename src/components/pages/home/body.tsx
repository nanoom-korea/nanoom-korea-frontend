import React from "react";

import SectionWithTitle from "common/section";
import ExportArticle from "common/article";
import Contact from "pages/home/contact";
import HappyBean from "pages/home/article/happyBean";
import Vms from "pages/home/article/vms";

const HomeBody = () => {
  return (
    <div className="grid w-full max-w-7xl grid-cols-3 gap-[20px] place-self-center">
      <div className="flex flex-col gap-[30px]">
        {/* TODO: route 수정 및 들어갈 콘텐츠 연결 */}
        <SectionWithTitle title="새로운 소식" route="/" children={<div>소식소식</div>} />
        <Contact />
      </div>
      {/* TODO: route 수정 및 들어갈 콘텐츠 연결 */}
      <SectionWithTitle title="페이스북 최신글" route="/" children={<div>페북페북</div>} />
      <div className="flex flex-col gap-[20px]">
        <ExportArticle
          children={<HappyBean />}
          buttons={{
            first: {
              name: "콩 기부하러 가기",
              rotues: "/",
              style: "bg-[#ebe9e7]",
            },
            second: {
              name: "해피로그 바로가기",
              rotues: "/",
              style: "bg-[#e1dfdd]",
            },
          }}
        />
        <ExportArticle
          children={<Vms />}
          buttons={{
            first: {
              name: "VMS 등록 안내",
              rotues: "/",
              style: "bg-[#5c4d50] text-[#ffffff]",
            },
            second: {
              name: "VMS 등록하러 가기",
              rotues: "/",
              style: "bg-[#4c3f42] text-[#ffffff]",
            },
          }}
        />
      </div>
    </div>
  );
};

export default HomeBody;
