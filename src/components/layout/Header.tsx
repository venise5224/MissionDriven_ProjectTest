"use client";

import useCategoryStore from "@/stores/useCategoryStore";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const selectedCategories = useCategoryStore((state) => state.categories);
  const clearCategories = useCategoryStore((state) => state.clearCategories);

  const titleMap: Record<string, string> = {
    "/": "과제",
    "/category": "카테고리",
  };

  const handleNext = () => {
    if (selectedCategories.length === 0) return;
    router.push("/");
  };

  const handleExit = () => {
    clearCategories();
    router.push("/");
  };

  return (
    <header className="h-[47px] md:h-16 sticky top-0 z-50 bg-white border border-[#D7D7D7]">
      <div className="relative max-w-[360px] md:max-w-[1100px] mx-auto h-full flex justify-center items-center">
        {/* 카테고리 페이지 나가기 버튼 */}
        {pathname === "/category" && (
          <>
            <button
              onClick={handleExit}
              className="absolute left-5 hidden md:flex w-[120px] h-[38px] items-center justify-center bg-[#F7F7F8] font-semibold text-[16px] text-[#323232] border border-[#E5E5E5] rounded cursor-pointer"
            >
              나가기
            </button>

            <button
              onClick={handleExit}
              className="absolute left-4 flex md:hidden cursor-pointer"
            >
              <Image src="/x.png" alt="닫기" width={28} height={28} />
            </button>
          </>
        )}

        {/* 페이지 제목 */}
        <h1 className="font-bold text-[18px] md:text-[24px]">
          {titleMap[pathname]}
        </h1>

        {/* 다음으로 버튼 */}
        <div className="absolute right-5 hidden md:block">
          <button
            onClick={handleNext}
            disabled={selectedCategories.length === 0}
            className={`w-[120px] h-[38px] text-[16px] font-semibold rounded 
            ${
              selectedCategories.length === 0
                ? "bg-[#D7D7D7] text-white cursor-not-allowed"
                : "bg-[#03C124] text-white cursor-pointer hover:bg-[#02891A]"
            }
          `}
          >
            다음으로
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
