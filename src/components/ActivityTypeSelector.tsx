"use client";

import { useFormContext } from "react-hook-form";

const ActivityTypeSelector = () => {
  const { watch, setValue } = useFormContext();
  const activityType = watch("activityType"); // "online" | "offline" | ""

  const buttons: { label: string; value: "online" | "offline" }[] = [
    { label: "온라인", value: "online" },
    { label: "직접 만나기", value: "offline" },
  ];

  const handleSelect = (type: "online" | "offline") => {
    setValue("activityType", type, { shouldDirty: true });
  };

  return (
    <div className="w-[328px] md:w-[510px] mx-auto md:mx-0">
      <h2 className="font-bold text-[22px] md:text-[28px]">활동 방식 선택</h2>
      <em className="mt-2 text-[18px] md:text-[20px] text-[#767676] block">
        만남을 어떤 방식으로 진행하시겠어요?
      </em>
      <div className="mt-3 md:mt-4 flex gap-2">
        {buttons.map((button) => (
          <button
            key={button.label}
            type="button"
            onClick={() => handleSelect(button.value)}
            className={`w-40 h-[47px] md:w-[251px] md:h-[58px] border font-semibold text-[18px] md:text-[20px] rounded-md md:rounded-lg cursor-pointer 
            ${
              activityType === button.value
                ? "bg-[#E6F9E9] border-[#03C124] text-[#03C124]"
                : "bg-[#F7F7F8] border-[#E5E5E5] text-[#323232] hover:bg-[#E5E5E5]"
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActivityTypeSelector;
