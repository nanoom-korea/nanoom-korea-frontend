import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col border-[3px] border-[#f0f0f0]">
      <div className="flex h-[120px] items-center px-[20px]">
        <div className="flex w-[120px] flex-col items-center gap-[10px]">
          <Image src="/icons/contact.jpg" alt="contact" width={31} height={28} />
          <span className="font-bold">문의 연락처</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[22px] font-extrabold">02-992-8904</span>
          <span className="font-bold">FAX 02-992-8914</span>
          <span className="text-[14px] font-medium text-[#919191]">상담가능시간: AM 09:00 ~ PM 06:00</span>
        </div>
      </div>
      <div className="flex h-[120px] items-center bg-[#f7f7f7] px-[20px]">
        <div className="flex w-[120px] flex-col items-center gap-[10px]">
          <Image src="/icons/bank.jpg" alt="contact" width={31} height={28} />
          <span className="font-bold">후원계좌</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] font-bold">신한은행</span>
          <span className="text-[20px] font-bold">100-028-636564</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
