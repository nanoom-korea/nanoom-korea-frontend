import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex h-16 justify-center border-b-[1px] border-t-2 border-b-grey-10 border-t-yellow">
      <div className="flex w-full max-w-7xl items-center justify-between px-2">
        <Image
          src="/images/logo.jpg"
          alt="나눔코리아_로고"
          width={120}
          height={1}
        />
        <nav className="flex gap-5 text-sm font-medium text-grey-30">
          <button>로그인</button>
          <button>회원가입</button>
          <button>아이디/비밀번호 찾기</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
