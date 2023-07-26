import React from "react";
import Image from "next/image";

import Layout from "common/layout";
import Page from "common/layout/page";
import SupportTabs from "pages/support/tabs";

const TemporarySupport = () => {
  return (
    <Layout title="일시후원 안내">
      <SupportTabs />
      <Page title="일시후원 안내" path={["나눔코리아", "후원하기", "일시후원 안내"]} className="flex flex-col">
        <div>
          <p className="text-[40px] font-medium">일시 후원 방법을 안내합니다.</p>
          <p>작은 손길이 모여 더 큰 희망을 만듭니다.</p>
        </div>
        <hr className="my-[40px] w-[65px] border-yellow" />
        <div className="flex border-4 border-[#f1f1f1] py-[50px]">
          <div className="w-1/2 border-r border-[#dddddd] px-[55px]">
            <h4 className="mb-[40px] text-[28px] font-semibold">후원 전용 계좌</h4>
            <div className="mb-[28px] flex flex-col">
              <span className="font-bold">신한은행</span>
              <span className="text-[20px] font-bold">100-028-636564</span>
            </div>
            <div>
              <div className="flex gap-[12px]">
                <span className="font-medium">예금주</span>
                <span>나눔코리아</span>
              </div>
              <div className="flex gap-[12px]">
                <span className="font-medium">후원 문의</span>
                <span>02-992-8904</span>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 justify-between px-[55px]">
            <div>
              <h4 className=" mb-[40px] text-[28px] font-semibold">해피빈 콩 기부</h4>
              <Image src="/images/bean-title.jpg" alt="해피빈" width={77} height={26} className="mb-[28px]" />
              <div className="flex gap-[12px]">
                <button className="rounded-3xl border px-[15px] py-[7px]">콩 기부하러 가기 +</button>
                <button className="rounded-3xl border px-[15px] py-[7px]">나눔코리아 해피로그 +</button>
              </div>
            </div>
            <div>
              <Image src="/images/bean-char.jpeg" alt="해피빈 캐릭터" width={56} height={79} />
            </div>
          </div>
        </div>
      </Page>
    </Layout>
  );
};

export default TemporarySupport;
