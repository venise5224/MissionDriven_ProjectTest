"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const SubImageUploader = () => {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleUploaderClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageClick = (index: number) => {
    setEditingIndex(index);
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const validImages: string[] = [];

    for (const file of files) {
      // 파일 확장자 검사 (JPG, PNG)
      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(file.type)) {
        alert("JPG 또는 PNG 파일만 업로드할 수 있습니다.");
        return;
      }

      // 파일 크기 검사 (15MB 이하)
      const maxSize = 15 * 1024 * 1024;
      if (file.size > maxSize) return;

      validImages.push(URL.createObjectURL(file));
    }

    if (validImages.length === 0) return;

    // 재업로드(이미지 교체)
    if (editingIndex !== null) {
      setImages((prev) => {
        const updated = [...prev];
        updated[editingIndex] = validImages[0];
        return updated;
      });
      setEditingIndex(null);
      return;
    }

    setImages((prev) => [...validImages, ...prev].slice(0, 4)); // 최대 4장까지만 저장
  };

  return (
    <div className="w-[328px] md:w-[510px] mx-auto md:mx-0">
      <h2 className="font-bold text-[22px] md:text-[28px]">
        추가 이미지 (선택)
      </h2>
      <em className="mt-2 font-medium text-[18px] md:text-[20px] text-[#767676]">
        최대 4장까지 등록할 수 있어요
      </em>

      {/* PC: 2x2 grid / Mobile: 수평 */}
      <div className="mt-3 md:mt-4 grid grid-flow-col auto-cols-max md:grid-flow-row md:grid-cols-2 gap-2 overflow-x-auto flex-nowrap hide-scrollbar">
        {/* 이미지 미리보기 */}
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative w-[120px] h-[120px] md:w-[251px] md:h-[251px] shrink-0 rounded-lg border border-[#E5E5E5] cursor-pointer"
            onClick={() => handleImageClick(idx)}
          >
            <Image src={img} alt="서브 이미지" fill className="object-cover" />
          </div>
        ))}

        {/* 업로드 버튼 */}
        {images.length < 4 && (
          <div
            onClick={handleUploaderClick}
            className="w-[120px] h-[120px] md:w-[251px] md:h-[251px] flex items-center justify-center bg-[#F7F7F8] border border-[#E5E5E5] rounded-lg cursor-pointer"
          >
            <div className="relative w-8 h-8 md:w-15 md:h-15">
              <Image
                src="/image-plus-x3.png"
                alt="추가 이미지"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* file input (hidden) */}
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          ref={fileInputRef}
          onChange={handleChange}
          multiple
          hidden
        />
      </div>
    </div>
  );
};

export default SubImageUploader;
