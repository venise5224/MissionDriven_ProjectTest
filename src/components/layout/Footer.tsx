"use client";

import useCategoryStore from "@/stores/useCategoryStore";
import { useFormStore } from "@/stores/useFormStore";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const selectedCategories = useCategoryStore((state) => state.categories);
  const isValid = useFormStore((state) => state.isValid);

  const handleNext = () => {
    if (selectedCategories.length === 0) return;
    router.push("/");
  };

  return (
    <footer className="w-full h-[73px] fixed bottom-0 z-50 bg-white border border-[#D7D7D7] flex justify-center">
      {/* CategoryPage 다음으로 버튼 */}
      {pathname === "/category" && (
        <button
          type="button"
          onClick={handleNext}
          disabled={selectedCategories.length === 0}
          className={`mt-2 w-[328px] h-12 rounded-md font-semibold text-[18px] cursor-pointer
            ${
              selectedCategories.length === 0
                ? "bg-[#D7D7D7] text-white cursor-not-allowed"
                : "bg-[#03C124] text-white cursor-pointer hover:bg-[#02891A]"
            }
          `}
        >
          다음으로
        </button>
      )}

      {/* HomePage 다음으로 버튼 */}
      {pathname === "/" && (
        <button
          type="submit"
          form="projectForm"
          disabled={!isValid}
          className={`mt-2 w-[328px] h-12 rounded-md font-semibold text-[18px] cursor-pointer
            ${
              !isValid
                ? "bg-[#D7D7D7] text-white cursor-not-allowed"
                : "bg-[#03C124] text-white cursor-pointer hover:bg-[#02891A]"
            }
          `}
        >
          다음으로
        </button>
      )}
    </footer>
  );
};

export default Footer;
