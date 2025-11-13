import Image from "next/image";

const CategorySelector = () => {
  return (
    <div className="w-[328px] md:w-[510px]">
      <h2 className="font-bold text-[22px] md:text-[28px]">카테고리</h2>
      <div className="relative mt-3 md:mt-4">
        <input
          type="text"
          placeholder="주제를 선택해주세요"
          className="w-full h-12 md:h-[60px] border border-[#E5E5E5] px-4 rounded-lg placeholder:font-medium placeholder:text-4 md:placeholder:text-[18px]"
        />
        <Image
          src="/chevron-right.png"
          alt="카테고리 선택"
          width={28}
          height={28}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-7 md:h-7"
        />
      </div>
    </div>
  );
};

export default CategorySelector;
