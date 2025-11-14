const Header = () => {
  return (
    <header className="h-[47px] md:h-16 sticky top-0 z-50 bg-white border border-[#D7D7D7]">
      <div className="relative max-w-[1100px] mx-auto h-full flex justify-center items-center">
        <h1 className="font-bold text-[18px] md:text-[24px]">과제</h1>
        <div className="absolute right-5 hidden md:block">
          <button className="w-[120px] h-[38px] bg-[#D7D7D7] text-white text-4 font-semibold rounded-sm cursor-pointer">
            다음으로
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
