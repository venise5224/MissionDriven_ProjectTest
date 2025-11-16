"use client";

import { ProjectTestFormType } from "@/types/projectTestFormType";
import { useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

interface TimeFieldProps {
  index: number;
  type: "startTime" | "endTime";
}

const TimeField = ({ index, type }: TimeFieldProps) => {
  const { setValue, getValues } = useFormContext<ProjectTestFormType>();
  const time = getValues(`sessionDetails.${index}.${type}`);
  const startTime = getValues(`sessionDetails.${index}.startTime`);

  // 종료 시간 자동 보정
  const updateEndTime = (
    hour: string,
    minute: string,
    ampm: "오전" | "오후"
  ) => {
    if (type !== "startTime") return;

    let endHour = Number(hour) + 1;
    let endAmPm = ampm;
    if (endHour > 12) {
      endHour -= 12;
      endAmPm = ampm === "오전" ? "오후" : "오전";
    }
    setValue(`sessionDetails.${index}.endTime`, {
      hour: String(endHour).padStart(2, "0"),
      minute,
      ampm: endAmPm,
    });
  };

  // 종료 시간 검증
  const validateEndTime = () => {
    if (type !== "endTime") return;

    const endTime = getValues(`sessionDetails.${index}.endTime`);
    const start = startTime;

    const startTotal =
      (start.ampm === "오전"
        ? Number(start.hour) % 12
        : (Number(start.hour) % 12) + 12) *
        60 +
      Number(start.minute);

    const endTotal =
      (endTime.ampm === "오전"
        ? Number(endTime.hour) % 12
        : (Number(endTime.hour) % 12) + 12) *
        60 +
      Number(endTime.minute);

    if (endTotal <= startTotal) {
      toast("시작 시간보다 종료 시간은 빠를 수 없습니다.");

      let newEndHour = Number(start.hour) + 1;
      let newAmPm = start.ampm;
      if (newEndHour > 12) {
        newEndHour -= 12;
        newAmPm = start.ampm === "오전" ? "오후" : "오전";
      }

      setValue(`sessionDetails.${index}.endTime`, {
        hour: String(newEndHour).padStart(2, "0"),
        minute: start.minute,
        ampm: newAmPm,
      });
    }
  };

  const handleHourChange = (value: string) => {
    const num = Math.min(
      Math.max(Number(value.replace(/\D/g, "")) || 1, 1),
      12
    );
    setValue(
      `sessionDetails.${index}.${type}.hour`,
      String(num).padStart(2, "0")
    );

    if (type === "startTime") {
      updateEndTime(
        String(num).padStart(2, "0"),
        time.minute,
        time.ampm as "오전" | "오후"
      );
    }
  };

  const handleMinuteChange = (value: string) => {
    const num = Math.min(
      Math.max(Number(value.replace(/\D/g, "")) || 0, 0),
      59
    );
    setValue(
      `sessionDetails.${index}.${type}.minute`,
      String(num).padStart(2, "0")
    );

    if (type === "startTime") {
      updateEndTime(
        time.hour,
        String(num).padStart(2, "0"),
        time.ampm as "오전" | "오후"
      );
    }
  };

  const handleAmPmToggle = () => {
    const newAmPm = time.ampm === "오전" ? "오후" : "오전";
    setValue(`sessionDetails.${index}.${type}.ampm`, newAmPm);

    if (type === "startTime") updateEndTime(time.hour, time.minute, newAmPm);
    if (type === "endTime") validateEndTime();
  };

  return (
    <div className="flex gap-6 items-center">
      {/* 라벨 */}
      <label className="font-semibold text-[16px] md:text-[18px] text-[#565656]">
        {type === "startTime" ? "시작 시간" : "종료 시간"}
      </label>

      {/* 입력 영역 */}
      <div className="flex flex-1 items-center px-2.5 md:px-4 h-[60px] bg-white border border-[#E5E5E5] rounded-lg">
        {/* 오전/오후 토글 버튼 */}
        <button
          type="button"
          onClick={handleAmPmToggle}
          className="w-[52px] h-[38px] bg-[#F7F7F8] border border-[#E5E5E5] rounded-sm font-semibold text-[16px]"
        >
          {time.ampm}
        </button>

        {/* 시 */}
        <input
          type="text"
          value={time.hour}
          onChange={(e) => handleHourChange(e.target.value)}
          onBlur={validateEndTime}
          className="w-16 md:w-[140px] text-center placeholder:text-center text-[18px] md:text-[20px] placeholder:text-[#121212] outline-none"
        />

        <p className="text-[20px] text-[#121212]">:</p>

        {/* 분 */}
        <input
          type="text"
          value={time.minute}
          onChange={(e) => handleMinuteChange(e.target.value)}
          onBlur={validateEndTime}
          className="w-16 md:w-[140px] text-center placeholder:text-center text-[18px] md:text-[20px] placeholder:text-[#121212] outline-none"
        />
      </div>
    </div>
  );
};

export default TimeField;
