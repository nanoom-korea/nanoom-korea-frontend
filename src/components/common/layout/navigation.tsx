import React from "react";

const Navigation = () => {
  // TODO: route에 값 넣어 버튼 클릭 시 그 페이지로 이동하도록 설정
  const navList = [
    { route: "", title: "홀몸어르신 돌봄" },
    { route: "", title: "무연고자 사랑의 장례식" },
    { route: "", title: "봉사 참여하기" },
    { route: "", title: "후원하기" },
    { route: "", title: "게시판" },
    { route: "", title: "나눔코리아 소개" },
    { route: "", title: "나눔코리아 파트너" },
  ];

  return (
    <nav className="flex h-14 justify-center">
      <div className="flex w-full max-w-7xl items-center gap-5 px-2">
        {navList.map((el) => (
          <button className="font-semibold" key={el.title}>
            {el.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
