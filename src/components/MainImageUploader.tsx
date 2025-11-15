"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const MainImageUploader = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 파일 확장자 검사 (JPG, PNG)
    const validTypes = ["image/jpeg", "image/png"];
    if (!validTypes.includes(file.type)) {
      alert("JPG 또는 PNG 파일만 업로드할 수 있습니다.");
      return;
    }

    // 파일 크기 검사 (15MB 이하)
    const maxSize = 15 * 1024 * 1024;
    if (file.size > maxSize) return;

    const url = URL.createObjectURL(file);
    setImage(url);
  };

  return (
    <div className="w-[328px] md:w-[510px] mx-auto md:mx-0">
      <h2 className="font-bold text-[22px] md:text-[28px]">대표 이미지</h2>

      <div
        className="h-[328px] md:h-[510px] mt-3 md:mt-4 flex flex-col items-center justify-center bg-[#F7F7F8] border border-[#E5E5E5] rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        {image ? (
          <Image
            src={image}
            alt="대표 이미지"
            width={510}
            height={510}
            className="object-cover w-full h-full rounded-lg"
          />
        ) : (
          <>
            <strong className="font-bold text-[22px] md:text-[28px] text-center">
              콘텐츠 대표 이미지를
              <br /> 등록해 주세요!
            </strong>
            <em className="mt-2 font-medium text-[16px] md:text-[22px] text-[#8F8F8F] block">
              1:1 비율의 정사각형 이미지를 추천합니다
            </em>
            <button
              className="mt-6 w-40 h-12 md:h-[58px] bg-[#323232] rounded-lg text-white font-semibold text-5 cursor-pointer"
              type="button"
            >
              이미지 업로드
            </button>
          </>
        )}

        {/* file input (hidden)*/}
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          ref={fileInputRef}
          onChange={handleChange}
          hidden
        />
      </div>
    </div>
  );
};

export default MainImageUploader;
