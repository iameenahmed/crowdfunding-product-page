const Stats = () => {
  return (
    <div className="my-7 rounded-xl bg-white px-6 py-8 shadow-md md:px-12 md:py-14">
      <ul className="space-y-12 text-center md:grid md:grid-cols-3 md:gap-12 md:space-y-0 md:text-start">
        <li className="relative text-DarkGray after:absolute after:-bottom-6 after:left-1/2 after:h-[1px] after:w-20 after:-translate-x-1/2 after:bg-DarkGray/50 md:after:bottom-0 md:after:left-auto md:after:right-0 md:after:h-20 md:after:w-[1px]">
          <span className="mb-1 block text-[2rem] font-bold text-black">
            $89,914
          </span>
          of $100,000 backed
        </li>
        <li className="relative text-DarkGray after:absolute after:-bottom-6 after:left-1/2 after:h-[1px] after:w-20 after:-translate-x-1/2 after:bg-DarkGray/50 md:after:bottom-0 md:after:left-auto md:after:right-0 md:after:h-20 md:after:w-[1px]">
          <span className="mb-1 block text-[2rem] font-bold text-black">
            5,007
          </span>
          total backers
        </li>
        <li className="text-DarkGray">
          <span className="mb-1 block text-[2rem] font-bold text-black">
            56
          </span>
          days left
        </li>
      </ul>
      <div className="mt-7">
        <progress value="56" max="72" />
      </div>
    </div>
  );
};

export default Stats;
