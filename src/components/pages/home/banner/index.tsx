import React from "react";
import Image from "next/image";

import BannerNav from "pages/home/banner/nav";

const Banner = () => {
  return (
    <div className="relative">
      <div className="relative h-[700px] w-full">
        <Image src="/images/banner/index.jpeg" alt="배너" fill={true} className="object-cover" />
      </div>
      <BannerNav />
    </div>
  );
};

export default Banner;
