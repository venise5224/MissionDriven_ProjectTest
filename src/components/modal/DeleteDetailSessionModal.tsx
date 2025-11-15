"use client";

import useModalStore from "@/stores/useModalStore";
import Image from "next/image";
import { useEffect } from "react";

const DeleteDetailSessionModal = () => {
  const { closeModal, modalProps } = useModalStore();

  // 모달 열렸을 때 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleConfirm = () => {
    modalProps?.onConfirm?.(); // 부모 콜백 호출
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-100">
      <div className="relative w-[328px] md:w-[430px] bg-white rounded-xl md:rounded-2xl p-5 pt-14 md:p-6 md:pt-14">
        <h2 className="font-bold text-[20px] md:text-[24px] text-[#121212] text-center">
          작성된 내용을
          <br className="hidden md:block" />
          삭제하시겠어요?
        </h2>
        <em className="mt-2 text-[16px] md:text-[18px] font-medium text-center text-[#565656] block">
          삭제한 내용은 복구할 수 없습니다.
        </em>

        <div className="mt-8 flex justify-center gap-2">
          <button
            onClick={closeModal}
            className="flex-1 h-12 md:h-[58px] bg-[#E5E5E5] rounded-md md:rounded-lg font-semibold text-[18px] md:text-[20px] text-[#323232] cursor-pointer"
          >
            취소
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 h-12 md:h-[58px] bg-[#323232] rounded-md md:rounded-lg font-semibold text-[18px] md:text-[20px] text-white cursor-pointer"
          >
            삭제하기
          </button>
        </div>

        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-3 md:right-4 cursor-pointer"
        >
          <Image
            src="/x.png"
            alt="닫기"
            width={32}
            height={32}
            className="w-7 h-7 md:w-8 md:h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default DeleteDetailSessionModal;
