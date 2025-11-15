"use client";

import Image from "next/image";
import useCategoryStore from "@/stores/useCategoryStore";
import Link from "next/link";

const CategorySelector = () => {
  const selectedCategory = useCategoryStore((state) => state.categories);

  return (
    <div className="w-[328px] md:w-[510px] mx-auto md:mx-0">
      <h2 className="font-bold text-[22px] md:text-[28px]">카테고리</h2>

      <Link href="/category">
        <div className="relative mt-3 md:mt-4 w-full h-12 md:h-[60px] border border-[#E5E5E5] px-4 rounded-lg flex items-center">
          {selectedCategory.length === 0 ? (
            <span className="text-[16px] md:text-[18px] text-[#8F8F8F]">
              주제를 선택해주세요
            </span>
          ) : (
            <span className="text-[16px] md:text-[18px] text-[#121212]">
              {selectedCategory.join(", ")}
            </span>
          )}

          <Image
            src="/chevron-right.png"
            alt="카테고리 선택"
            width={28}
            height={28}
            className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-7 md:h-7"
          />
        </div>
      </Link>
    </div>
  );
};

export default CategorySelector;
