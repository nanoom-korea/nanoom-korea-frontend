import React from "react";
import Image from "next/image";

const HappyBean = () => {
  return (
    <div className="flex h-[145px] justify-between bg-[#f4f3f1] px-[25px] pb-[15px] pt-[30px]">
      <div className="flex flex-col justify-between">
        <Image src="/images/bean-title.jpg" alt="해피빈" width={77} height={26} />
        <div className="whitespace-pre-wrap font-medium">
          {"네이버 해피빈 콩으로도 후원이 가능합니다.\n해피빈 후원 방법이 궁금하시다면 클릭!"}
        </div>
      </div>
      <div>
        <Image src="/images/bean-char.jpeg" alt="해피빈 캐릭터" width={56} height={79} />
      </div>
    </div>
  );
};

export default HappyBean;
