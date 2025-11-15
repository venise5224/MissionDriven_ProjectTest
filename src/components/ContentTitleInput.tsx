"use client";

import { TitleFormType, titleSchema } from "@/schema/titleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";

const ContentTitleInput = () => {
  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = useForm<TitleFormType>({
    resolver: zodResolver(titleSchema),
    defaultValues: {
      title: "",
    },
  });

  const value = useWatch({
    control,
    name: "title",
    defaultValue: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let input = e.target.value;

    // 80자 제한 (붙여넣기 포함)
    if (input.length > 80) {
      input = input.slice(0, 80);
    }

    // 연속 공백 자동 치환
    input = input.replace(/\s{2,}/g, " ");

    setValue("title", input, { shouldValidate: true });
  };

  return (
    <div className="w-[328px] md:w-[510px] mx-auto md:mx-0">
      <h2 className="font-bold text-[22px] md:text-[28px]">콘텐츠 제목</h2>

      <div
        className={`mt-3 md:mt-4 w-full h-[138px] rounded-lg px-4 flex flex-col justify-between border
      ${errors.title ? "border-[#E82929]" : "border-[#E5E5E5]"}
      ${
        !errors.title && value.length >= 8
          ? "focus-within:border-[#03C124]"
          : ""
      }`}
      >
        {/* 입력 영역 */}
        <textarea
          {...register("title")}
          value={value}
          onChange={handleChange}
          maxLength={80}
          placeholder="제목을 입력해주세요"
          className="mt-3 md:mt-4 outline-none text-[16px] md:text-[18px] h-full resize-none"
        />

        {/* 글자수 표시 */}
        <p className="pb-3 text-sm text-[#8F8F8F] text-right">
          {value.length} / 80자 (최소 8자)
        </p>
      </div>

      {/* 에러 메시지 */}
      {errors.title && (
        <p className="text-[#E82929] mt-1 text-[16px]">
          {errors.title.message}
        </p>
      )}
    </div>
  );
};

export default ContentTitleInput;
