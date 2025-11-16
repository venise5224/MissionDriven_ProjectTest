import useViewport from "@/hooks/useViewport";
import { useEffect, useRef } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextareaFieldProps {
  registerProps: UseFormRegisterReturn;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: FieldError;
  maxLength?: number;
  placeholder?: string;
}

const TextareaField = ({
  registerProps,
  value,
  onChange,
  error,
  maxLength = 80,
  placeholder,
}: TextareaFieldProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { isPC } = useViewport();

  const minHeight = isPC ? 138 : 118;
  const maxHeight = isPC ? 358 : 278;

  // 컨텐츠에 맞게 높이 자동 조절
  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [value]);

  return (
    <>
      <div
        className={`w-full bg-white rounded-lg px-4 flex flex-col justify-between border
        ${
          error
            ? "border-[#E82929]"
            : "border-[#E5E5E5] focus-within:border-[#03C124]"
        }`}
        style={{
          minHeight,
          maxHeight,
        }}
      >
        <textarea
          {...registerProps}
          ref={textareaRef}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          className="mt-3 md:mt-4 outline-none text-[16px] md:text-[18px] resize-none"
        />
        <p className="pb-3 text-sm text-[#8F8F8F] text-right">
          {value.length} / {maxLength}자 (최소 8자)
        </p>
      </div>
      {error?.message && (
        <p className="text-[#E82929] mt-1 text-[16px]">{error.message}</p>
      )}
    </>
  );
};

export default TextareaField;
