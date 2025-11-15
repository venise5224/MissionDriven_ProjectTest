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
  return (
    <>
      <div
        className={`w-full h-[118px] max-h-[278px] md:h-[138px] md:max-h-[358px] rounded-lg px-4 flex flex-col justify-between border
        ${
          error
            ? "border-[#E82929]"
            : "border-[#E5E5E5] focus-within:border-[#03C124]"
        }`}
      >
        <textarea
          {...registerProps}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          className="mt-3 md:mt-4 outline-none text-[16px] md:text-[18px] h-full resize-none"
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
