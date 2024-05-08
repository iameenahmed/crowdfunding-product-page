const Stats = () => {
  return (
    <div className="my-6 rounded-xl bg-white px-6 py-8 shadow-md ">
      <ul className="space-y-12 text-center">
        <li className="relative text-DarkGray after:absolute after:-bottom-6 after:left-[36%] after:h-[1px] after:w-20 after:bg-DarkGray/50">
          <span className="mb-2 block text-4xl font-bold text-black">
            $89,914
          </span>
          of $100,000 backed
        </li>
        <li className="relative text-DarkGray after:absolute after:-bottom-6 after:left-[36%] after:h-[1px] after:w-20 after:bg-DarkGray/50">
          <span className="mb-2 block text-4xl font-bold text-black">
            5,007
          </span>
          total backers
        </li>
        <li className="text-DarkGray">
          <span className="mb-2 block text-4xl font-bold text-black">56</span>
          days left
        </li>
      </ul>
      <div className="mt-8">
        <progress value="56" max="80" />
      </div>
    </div>
  );
};

export default Stats;
