const MainImageUploader = () => {
  return (
    <div className="w-[328px] md:w-[510px] mx-auto md:mx-0">
      <h2 className="font-bold text-[22px] md:text-[28px]">대표 이미지</h2>
      <div className="h-[328px] md:h-[510px] mt-3 md:mt-4 flex flex-col items-center justify-center bg-[#F7F7F8] border border-[#E5E5E5] rounded-lg">
        <strong className="font-bold text-[22px] md:text-[28px] text-center">
          콘텐츠 대표 이미지를
          <br /> 등록해 주세요!
        </strong>
        <em className="mt-2 font-medium text-[16px] md:text-[22px] text-[#8F8F8F]">
          1:1 비율의 정사각형 이미지를 추천합니다
        </em>
        <button className="mt-6 w-40 h-12 md:h-[58px] bg-[#323232] rounded-lg text-white font-semibold text-5 cursor-pointer">
          이미지 업로드
        </button>
      </div>
    </div>
  );
};

export default MainImageUploader;
