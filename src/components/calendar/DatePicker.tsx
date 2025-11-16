"use client";

import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { addDays, isBefore, isAfter, startOfDay } from "date-fns";
import { format } from "date-fns";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/calendar/ui/popover";
import { Calendar } from "@/components/calendar/ui/calendar";
import { ko } from "date-fns/locale";

export type ProjectTestFormType = {
  sessionDetails: {
    date: Date | null;
    startTime: { ampm: string; hour: string; minute: string };
    endTime: { ampm: string; hour: string; minute: string };
    description: string;
  }[];
};

interface DateFieldProps {
  index: number;
}

export function DatePicker({ index }: DateFieldProps) {
  const { control, setValue } = useFormContext<ProjectTestFormType>();
  const [open, setOpen] = useState(false);

  // 단일 필드 구독
  const value = useWatch({
    control,
    name: `sessionDetails.${index}.date`,
  });

  const [tempDate, setTempDate] = useState<Date | null>(value || null);

  const allDates = useWatch({
    control,
    name: "sessionDetails",
    defaultValue: [],
  });

  const prevDate = index > 0 ? allDates?.[index - 1]?.date ?? null : null;
  const nextDate =
    index < (allDates?.length ?? 0) - 1
      ? allDates?.[index + 1]?.date ?? null
      : null;

  const minDate = prevDate
    ? addDays(startOfDay(prevDate), 1)
    : startOfDay(new Date());
  const maxDate = nextDate ? addDays(startOfDay(nextDate), -1) : undefined;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex-1 h-[60px] bg-white border border-[#E5E5E5] rounded-lg 
                     px-4 text-[16px] md:text-[20px] text-center cursor-pointer"
        >
          <span className={value ? "text-[#121212]" : "text-[#8F8F8F]"}>
            {value
              ? format(value, "yyyy년 MM월 d일", { locale: ko })
              : "날짜를 선택해주세요"}
          </span>
        </button>
      </PopoverTrigger>

      <PopoverContent className="p-4 w-[330px] bg-white rounded-lg">
        <Calendar
          mode="single"
          selected={tempDate || undefined}
          onSelect={(date) => setTempDate(date || null)}
          disabled={(date: Date) =>
            Boolean(
              (minDate && isBefore(date, startOfDay(minDate))) ||
                (maxDate && isAfter(date, startOfDay(maxDate)))
            )
          }
          className="w-full"
          classNames={{
            today: "bg-[#03C124] text-white font-bold rounded-lg",
          }}
        />
        <button
          type="button"
          className="mt-2 w-full py-2 bg-[#03C124] text-white text-[18px] font-semibold rounded-lg cursor-pointer"
          onClick={() => {
            setValue(`sessionDetails.${index}.date`, tempDate || null, {
              shouldValidate: true,
            });
            setOpen(false);
          }}
        >
          선택 완료
        </button>
      </PopoverContent>
    </Popover>
  );
}
