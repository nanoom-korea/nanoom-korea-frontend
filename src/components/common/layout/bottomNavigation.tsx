import React from "react";
import { v4 as uuidv4 } from "uuid";

const BottomNavigation = () => {
  const navigationList = [
    {
      title: "홀몸어르신 돌봄",
      route: "/",
      innerNav: [{ name: "프로그램 소개", route: "/" }],
    },
    {
      title: "무연고자 사랑의 장례식",
      route: "/",
      innerNav: [{ name: "프로그램 안내", route: "/" }],
    },
    {
      title: "봉사 참여하기",
      route: "/",
      innerNav: [
        { name: "활동 참여 안내", route: "/" },
        { name: "봉사 참여 신청", route: "/" },
        { name: "VMS 등록 안내", route: "/" },
      ],
    },
    {
      title: "후원하기",
      route: "/",
      innerNav: [
        { name: "정기후원 신청", route: "/" },
        { name: "일시후원 안내", route: "/" },
      ],
    },
    {
      title: "게시판",
      route: "/",
      innerNav: [
        { name: "자주묻는 질문", route: "/" },
        { name: "질문답변 게시판", route: "/" },
        { name: "공지사항", route: "/" },
        { name: "나눔코리아 자료실", route: "/" },
        { name: "자원봉사대회", route: "/" },
        { name: "활동소식", route: "/" },
      ],
    },
    {
      title: "나눔코리아 소개",
      route: "/",
      innerNav: [
        { name: "중앙회장 인사말", route: "/" },
        { name: "나눔코리아 연혁", route: "/" },
        { name: "나눔코리아송", route: "/" },
        { name: "찾아오시는 길", route: "/" },
      ],
    },
    {
      title: "나눔코리아 파트너",
      route: "/",
      innerNav: [],
    },
  ];

  const SideBackground = () => (
    <div className="w-[calc((100vw-1280px)/2)] border-r border-[#5d5d5d]">
      <div className="h-[55px] bg-[#464646]" />
      <div className="h-[245px] bg-[#4F4F4F]" />
    </div>
  );

  return (
    <nav className="mt-[60px] flex">
      <SideBackground />
      <div className="flex w-full max-w-7xl">
        {navigationList.map((el) => (
          <div className="h-[300px] w-full border-r border-[#5d5d5d]" key={uuidv4()}>
            <div className="flex h-[55px] items-center justify-center bg-[#464646] font-bold text-[#ffffff]">
              {el.title}
            </div>
            <div className="flex h-[245px] flex-col items-center gap-[10px] bg-[#4F4F4F] pt-[20px] text-[#bbbbbb]">
              {el.innerNav.map((item) => (
                <div key={uuidv4()}>{item.name}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <SideBackground />
    </nav>
  );
};

export default BottomNavigation;
