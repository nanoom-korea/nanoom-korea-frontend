import React from "react";
import { useRouter } from "next/router";

const Navigation = () => {
  // TODO: route에 값 넣어 버튼 클릭 시 그 페이지로 이동하도록 설정
  const navList = [
    { route: "/info/greeting", title: "나눔코리아 소개" },
    { route: "", title: "봉사활동 프로그램" },
    { route: "", title: "봉사 참여하기" },
    { route: "", title: "후원하기" },
    { route: "", title: "게시판" },
    { route: "", title: "나눔코리아 파트너" },
  ];

  const { push } = useRouter();

  return (
    <nav className="flex h-14 justify-center">
      <div className="flex w-full max-w-7xl items-center gap-5 px-2">
        {navList.map((el) => (
          <button onClick={() => push(el.route)} className="font-semibold" key={el.title}>
            {el.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
