import React from "react";

const BannerNav = () => {
  const navList = [
    {
      name: "정식대원 가입",
      description: "나눔코리아 가족이 되어\n함꼐 활동할 수 있습니다.",
    },
    {
      name: "자원봉사 참여",
      description: "자원봉사 일정을 확인하고\n함께 참여할 수 있습니다.",
    },
    {
      name: "CMS 정기 후원",
      description: "매월 CMS 자동이체로\n정기 후원할 수 있습니다.",
    },
    {
      name: "일시 후원",
      description: "물품, 후원금 등 일시 후원\n방법을 안내합니다.",
    },
  ];

  return (
    <nav className="absolute bottom-[25px] left-1/2 flex max-w-7xl -translate-x-1/2 border-t-2 border-[#000000]">
      {navList.map((el, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <button
            key={el.name}
            className={`flex h-[185px] w-[325px] flex-col items-center justify-center hover:bg-[#ffffff] hover:text-[#000000] ${
              isEven ? "bg-yellow" : "bg-[#4F4F4F] text-[#ffffff]"
            }`}
          >
            <div>아이콘</div>
            <div className="text-[20px] font-semibold">{el.name}</div>
            <p className="whitespace-pre-wrap text-center text-[14px]">{el.description}</p>
          </button>
        );
      })}
    </nav>
  );
};

export default BannerNav;
