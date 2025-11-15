"use client";

import { useState } from "react";

const ContentTitleInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-[328px] md:w-[510px] mx-auto md:mx-0">
      <h2 className="font-bold text-[22px] md:text-[28px]">콘텐츠 제목</h2>

      <div className="mt-3 md:mt-4 w-full h-[138px] border border-[#E5E5E5] rounded-lg px-4 flex flex-col justify-between">
        {/* 입력 영역 */}
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={80}
          placeholder="제목을 입력해주세요"
          className="mt-3 md:mt-4 outline-none text-[16px] md:text-[18px] h-full resize-none"
        />

        {/* 글자수 표시 */}
        <p className="pb-3 text-sm text-[#8F8F8F] text-right">
          {value.length}/80자 (최소 8자)
        </p>
      </div>
    </div>
  );
};

export default ContentTitleInput;
