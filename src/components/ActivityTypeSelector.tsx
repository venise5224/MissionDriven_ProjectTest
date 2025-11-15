const ActivityTypeSelector = () => {
  return (
    <div className="w-[328px] md:w-[510px] mx-auto md:mx-0">
      <h2 className="font-bold text-[22px] md:text-[28px]">활동 방식 선택</h2>
      <em className="mt-2 text-[18px] md:text-[20px] text-[#767676] block">
        만남을 어떤 방식으로 진행하시겠어요?
      </em>
      <div className="mt-3 md:mt-4 flex gap-2">
        <button className={buttonStyles}>온라인</button>
        <button className={buttonStyles}>직접 만나기</button>
      </div>
    </div>
  );
};

export default ActivityTypeSelector;

const buttonStyles =
  "w-40 h-[47px] md:w-[251px] md:h-[58px] bg-[#F7F7F8] border border-[#E5E5E5] font-semibold text-[18px] md:text-[20px] text-[#323232] rounded-md md:rounded-lg";
