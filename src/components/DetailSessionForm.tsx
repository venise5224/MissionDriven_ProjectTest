"use client";

import useModalStore from "@/stores/useModalStore";
import Image from "next/image";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import TextareaField from "./input/TextareaField";
import { ProjectTestFormType } from "@/types/projectTestFormType";

const DetailSessionForm = () => {
  const {
    control,
    register,
    setValue,
    formState: { errors },
  } = useFormContext<ProjectTestFormType>();
  const openModal = useModalStore((state) => state.openModal);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sessionDetails",
  });

  const handleDelete = (index: number) => {
    remove(index);
  };

  const value = useWatch({
    control,
    name: "sessionDetails",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    let input = e.target.value;

    // 800자 제한 (붙여넣기 포함)
    if (input.length > 800) {
      input = input.slice(0, 800);
    }

    // 연속 공백 자동 치환
    input = input.replace(/\s{2,}/g, " ");

    setValue(`sessionDetails.${index}.description`, input, {
      shouldValidate: true,
    });
  };

  return (
    <div className="w-[328px] md:w-[510px] mx-auto md:mx-0">
      <h2 className="font-bold text-[22px] md:text-[28px]">상세 정보</h2>

      <div className="mt-3 md:mt-4 flex flex-col gap-3 md:gap-5">
        {/* 회차 정보 */}
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="relative px-4 py-6 md:px-5 md:py-7 bg-[#F7F7F7] rounded-lg"
          >
            {/* 회차 헤더 */}
            <h3 className="font-bold text-[20px] md:text-[24px] text-[#121212]">
              {fields.length === 1 ? "회차 정보" : `${index + 1}회차 정보`}
            </h3>

            {/* 날짜 및 시간 선택 */}
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex gap-6 items-center">
                <label className="font-semibold text-[16px] md:text-[18px] text-[#565656]">
                  날짜 선택
                </label>
                <input
                  placeholder="날짜를 선택해주세요"
                  className="flex-1 h-[60px] bg-white border border-[#E5E5E5] rounded-lg placeholder:text-[16px] md:placeholder:text-[20px] placeholder:text-center"
                />
              </div>
              <div className="flex gap-6 items-center">
                <label className="font-semibold text-[16px] md:text-[18px] text-[#565656]">
                  시작 시간
                </label>
                <div className="flex flex-1 items-center px-2.5 md:px-4 h-[60px] bg-white border border-[#E5E5E5] rounded-lg">
                  <button className="w-[52px] h-[38px] bg-[#F7F7F8] border border-[#E5E5E5] rounded-sm font-semibold text-[16px]">
                    오전
                  </button>
                  <input
                    placeholder="10"
                    className="w-16 md:w-[140px] text-center placeholder:text-center placeholder:text-[18px] md:placeholder:text-[20px] placeholder:text-[#121212]"
                  />
                  <p className="text-[20px] text-[#121212]">:</p>
                  <input
                    placeholder="00"
                    className="w-16 md:w-[140px] text-center placeholder:text-center placeholder:text-[18px] md:placeholder:text-[20px] placeholder:text-[#121212]"
                  />
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <label className="font-semibold text-[16px] md:text-[18px] text-[#565656]">
                  종료 시간
                </label>
                <div className="flex flex-1 items-center px-2.5 md:px-4 h-[60px] bg-white border border-[#E5E5E5] rounded-lg">
                  <button className="w-[52px] h-[38px] bg-[#F7F7F8] border border-[#E5E5E5] rounded-sm font-semibold text-[16px]">
                    오전
                  </button>
                  <input
                    placeholder="11"
                    className="w-16 md:w-[140px] text-center placeholder:text-center placeholder:text-[18px] md:placeholder:text-[20px] placeholder:text-[#121212]"
                  />
                  <p className="text-[20px] text-[#121212]">:</p>
                  <input
                    placeholder="00"
                    className="w-16 md:w-[140px] text-center placeholder:text-center placeholder:text-[18px] md:placeholder:text-[20px] placeholder:text-[#121212]"
                  />
                </div>
              </div>
            </div>

            {/* 활동 내용 */}
            <div className="mt-8">
              <h3 className="font-bold text-[20px] md:text-[24px] text-[#121212]">
                활동 내용
              </h3>
              <em className="mt-2 text-[16px] md:text-[18px] text-[#767676] block">
                날짜별 활동 내용을 간단히 적어주세요
              </em>
              <div className="mt-3 md:mt-4">
                <TextareaField
                  registerProps={register(
                    `sessionDetails.${index}.description`
                  )}
                  value={value[index]?.description || ""}
                  onChange={(e) => handleChange(e, index)}
                  error={errors.sessionDetails?.[index]?.description}
                  maxLength={800}
                  placeholder="활동 내용을 간단히 입력해주세요"
                />
              </div>
            </div>

            {/* 회차 삭제 버튼 */}
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  openModal("deleteDetailSession", {
                    onConfirm: () => handleDelete(index),
                  })
                }
                className="absolute top-3.5 right-3.5"
              >
                <Image src="/x.png" alt="삭제" width={28} height={28} />
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() =>
          append({
            date: "",
            startTime: { ampm: "오전", hour: "", minute: "" },
            endTime: { ampm: "오전", hour: "", minute: "" },
            description: "",
          })
        }
        className="mt-6 w-full h-[58px] bg-[#323232] rounded-lg font-semibold text-[20px] text-white"
      >
        회차 추가하기
      </button>
    </div>
  );
};

export default DetailSessionForm;
