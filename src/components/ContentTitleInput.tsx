"use client";

import { ProjectTestFormType } from "@/types/projectTestFormType";
import { useFormContext, useWatch } from "react-hook-form";
import TextareaField from "./input/TextareaField";

const ContentTitleInput = () => {
  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = useFormContext<ProjectTestFormType>();

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
      <div className="mt-3 md:mt-4">
        <TextareaField
          registerProps={register("title")}
          value={value}
          onChange={handleChange}
          error={errors.title}
          placeholder="제목을 입력해주세요"
        />
      </div>
    </div>
  );
};

export default ContentTitleInput;
