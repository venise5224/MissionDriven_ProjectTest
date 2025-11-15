"use client";

import useCategoryStore from "@/stores/useCategoryStore";
import toast from "react-hot-toast";

const categories = [
  "용돈벌기",
  "디지털",
  "그림",
  "글쓰기/독서",
  "건강/운동",
  "동기부여/성장",
  "취미힐링",
  "외국어",
];

const CategoryPage = () => {
  const selectedCategories = useCategoryStore((state) => state.categories);
  const toggleCategory = useCategoryStore((state) => state.toggleCategory);

  const handleToggle = (category: string) => {
    if (
      !selectedCategories.includes(category) &&
      selectedCategories.length >= 2
    ) {
      toast("최대 2개까지만 선택 가능해요");
      return;
    }
    toggleCategory(category);
  };

  return (
    <main className="max-w-[360px] md:max-w-[1100px] mx-auto mt-10 px-4 md:px-5">
      <h2 className="font-bold text-[22px] md:text-[28px] text-[#121212]">
        어떤 카테고리의
        <br />
        콘텐츠를 만드시나요?
      </h2>
      <em className="mt-2 text-[18px] md:text-[20px] text-[#767676] block">
        최대 2개까지 선택 가능합니다.
      </em>
      <div className="grid grid-cols-2 gap-2 md:gap-3 mt-4 md:mt-6">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleToggle(category)}
            className={`w-40 h-[47px] md:w-[524px] md:h-[58px] font-semibold text-[18px] md:text-[20px] border rounded-lg cursor-pointer
              ${
                selectedCategories.includes(category)
                  ? "bg-[#E6F9E9] border-[#03C124] text-[#03C124]"
                  : "bg-[#F7F7F8] border-[#E5E5E5] text-[#323232] hover:bg-[#E5E5E5] hover:border-[#BABABA]"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
