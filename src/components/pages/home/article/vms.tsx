import React from "react";
import Image from "next/image";

const Vms = () => {
  return (
    <div className="flex h-[145px] justify-between bg-[#66575a] px-[25px] pb-[15px] pt-[30px] text-[#ffffff]">
      <div className="flex flex-col justify-between">
        <div className="whitespace-pre-wrap text-[22px] font-bold leading-6">{"사회복지 자원봉사\n인증관리(VMS)"}</div>
        <div className="whitespace-pre-wrap font-medium leading-5 text-[#dbdada]">
          {"나눔코리아에 참여한 모든 봉사 이력은\nVMS에 기록됩니다."}
        </div>
      </div>
      <div>
        <Image src="/images/vms-logo.jpg" alt="vms 로고" width={70} height={70} />
      </div>
    </div>
  );
};

export default Vms;
