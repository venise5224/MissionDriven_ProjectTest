import Image from "next/image";

const SubImageUploader = () => {
  return (
    <div className="w-[328px] md:w-[510px] mx-auto md:mx-0">
      <h2 className="font-bold text-[22px] md:text-[28px]">
        추가 이미지 (선택)
      </h2>
      <em className="mt-2 font-medium text-[18px] md:text-[20px] text-[#767676]">
        최대 4장까지 등록할 수 있어요
      </em>
      <div className="w-[120px] h-[120px] md:w-[251px] md:h-[251px] mt-3 md:mt-4 flex items-center justify-center bg-[#F7F7F8] border border-[#E5E5E5] rounded-lg">
        <div className="relative w-8 h-8 md:w-15 md:h-15">
          <Image
            src="/image-plus-x3.png"
            alt="추가 이미지"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SubImageUploader;
