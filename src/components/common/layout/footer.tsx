import React from "react";
import Image from "next/image";

const Footer = () => {
  // TODO: 각 페이지 연결
  const linkList = [
    { name: "나눔코리아 소개", route: "/" },
    { name: "홈페이지 이용약관", route: "/" },
    { name: "정식대원 약관", route: "/" },
    { name: "개인정보취급방침", route: "/" },
    { name: "찾아오시는 길", route: "/" },
    { name: "1:1 문의하기", route: "/" },
  ];

  const infoList = [
    { title: "단체명", description: "나눔코리아" },
    { title: "대표자", description: "조현두" },
    {
      title: "주소",
      description: "중앙회본부-서울특별시 강북구 한천로 1091 3층",
    },
    { title: "전화번호", description: "중앙회본부-02-992-8904" },
    { title: "팩스", description: "중앙회본부-02-992-8914" },
    { title: "이메일", description: "nanoom7979@naver.com" },
    { title: "단체고유번호", description: "210-82-65885" },
    { title: "후원계좌", description: "신한은행 100-028-636564 나눔코리아" },
    { title: "개인정보관리책임자", description: "박찬영" },
  ];

  return (
    <footer className="flex justify-center bg-[#f7f7f7] px-[200px]">
      <div className="flex max-w-7xl items-center gap-[40px]">
        <Image src="/images/logo.jpg" alt="나눔코리아 로고" width={200} height={80} />
        <div className="flex flex-col gap-[20px] py-[15px]">
          <div className="flex gap-[20px] text-[14px] font-medium">
            {linkList.map((el) => (
              <button key={el.name}>{el.name}</button>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 text-[14px]">
            {infoList.map((el) => (
              <div className="flex gap-2" key={el.title}>
                <span className="font-bold">{el.title}</span>
                <span className="text-[#888787]">{el.description}</span>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-[#bebebe]">Coipyright (c) NANOOM KOREA All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
