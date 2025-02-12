import StatsCard from "./StatsCard";
import StatsRange from "./StatsRange";

function BackStatics() {
  return (
    <div className="bg-white w-card px-5 md:px-7 lg:px-9 shadow-md pt-[3.5rem] pb-[2.4375rem]  md:py-8 rounded-md  flex flex-col justify-center items-center">

      <section className="w-full h-full flex  md:gap-[2.75rem] items-center flex-col md:flex-row  ">

        <StatsCard amount="$89,914" text="of $100,000 backed" />
        <hr className="bg-stone-300 md:rotate-0 h-[0.125rem] md:w-[0.125rem] w-[5rem] md:h-[4rem] my-[2.425rem] md:mx-[2.425rem] lg:mx-[3.425rem]  " />
        <StatsCard amount="5,007" text="total backers" />
        <hr className="bg-stone-300 md:rotate-0 h-[0.125rem] md:w-[0.125rem] w-[5rem] md:h-[4rem] my-[2.425rem] md:mx-[2.425rem] lg:mx-[3.425rem]" />
        <StatsCard amount="56" text="days left" />
      </section>

      <section className="w-full pt-[2.4rem] md:pt-[2.5rem]">
        <StatsRange value={76} />
      </section>
    </div>
  );
}

export default BackStatics;
