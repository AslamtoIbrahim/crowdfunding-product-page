import Button from "../Button";
import PledgeInput from "./PledgeInput";

type props = {
  title?: string;
  price?: number;
  description?: string;
  amount?: number;
  isAvailble?: boolean;
};

function BackPledge({
  title,
  price,
  description,
  amount = -1,
}: props) {
  return (
    <div className={`${(amount == 0) ? `opacity-55 ` : `group`}`}>
      <label
        htmlFor="options"
        className="cursor-pointer md:relative flex flex-col gap-8 font-commissioner border-slate-400 border-2 rounded-md px-[1.125rem]
         group-has-[input:checked]:border-dark-cyan
         group-has-[input:checked]:border-2 group-has-[input:checked]:rounded-md
         md:px-[2.125rem] py-[1.625rem] md:py-[2.625rem]"
      >
        <section className="flex items-center gap-4">
          <input id="option" type="radio" className="hidden" name="options" />
          <div className="w-6 h-6 border-dark-cyan border-2 rounded-full flex justify-center items-center ">
            <span className="w-3 h-3 rounded-full group-has-[input:checked]:bg-dark-cyan"></span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:items-center  ">
            <h1 className="text-base md:text-lg font-extrabold">{title}</h1>
            <p className="text-moderate-cyan font-semibold">
              {price && `Pledge $${price} or more`}
            </p>
          </div>
        </section>
        <section>
          <p className="text-dark-gray">{description}</p>
        </section>
        <section className=" flex flex-col md:flex-row items-start md:justify-between md:items-center gap-7 ">
          <div className="md:absolute top-[2.625rem] right-[2.125rem] ">
            <p className="text-dark-gray flex items-center gap-2 ">
              <span className="text-gray-950 text-2xl font-bold font-commissioner  ">
                {(amount >= 0) && amount}
              </span>
              {(amount >= 0) ? "left" : ""}
            </p>
          </div>
        </section>
        <section className="hidden group-has-[input:checked]:block">
          <hr className="mb-[1.625rem] md:mb-[2.625rem]" />
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
            <p className="text-dark-gray">{price && "Enter your pledge"}</p>
            <div className="flex gap-4 ">
              {price && <PledgeInput value={price} />}
              <Button text="Continue" />
            </div>
          </div>
        </section>
      </label>
    </div>
  );
}

export default BackPledge;
