import { useState } from "react";
import Button from "../Button";
import PledgeInput from "./PledgeInput";

type props = {
  title?: string;
  price?: number;
  description?: string;
  amount?: number;
  isAvailble?: boolean;
  groupName: string;
  onselect: (title: string) => void;
  onlick?: () => void;
  selected?: boolean;
  disabled?: boolean;
};

function BackPledge({
  title,
  price,
  description,
  amount = -1,
  groupName,
  onselect,
  onlick,
  selected,
  disabled = false,
}: props) {
  const [pledgePrice, setpledgePrice] = useState(price);
  const handleChange = (input: number) => {
    setpledgePrice(Number(input)); // Update pledgeAmount whenever input changes
  };
  return (
    <div className={`${amount == 0 ? `opacity-55 ` : `group`}`}>
      <label
        htmlFor={`options-${title}`}
        className="cursor-pointer md:relative flex flex-col gap-3 md:gap-6 font-commissioner border-slate-400 border-2 rounded-md 
         group-has-[input:checked]:border-dark-cyan
         group-has-[input:checked]:border-2 group-has-[input:checked]:rounded-md
         px-3 md:px-4 lg:px-6 py-[1.625rem] md:py-[2.625rem]"
      >
        <section className="flex items-center gap-3 md:gap-5 lg:gap-6">
          <input
            id={`options-${title}`}
            type="radio"
            className="hidden"
            name={groupName}
            value={title}
            checked={selected}
            onChange={() => !disabled && onselect(title!)}
            disabled={disabled}
          />
          <div className="w-5 h-5 md:w-6 lg:w-7 md:h-6 lg:h-7 border-dark-cyan border-2 rounded-full flex justify-center items-center ">
            <span className="w-3 h-3 rounded-full group-has-[input:checked]:bg-dark-cyan"></span>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4 md:items-center  ">
            <h1 className="text-sm md:text-lg font-extrabold">{title}</h1>
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
                {amount >= 0 && amount}
              </span>
              {amount >= 0 ? "left" : ""}
            </p>
          </div>
        </section>
        <section
          className={`hidden ${
            amount > 0 && `group-has-[input:checked]:block`
          }`}
        >
          <hr className="mb-[1.625rem] md:mb-[2.625rem]" />
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
            <p className="text-dark-gray">{price && "Enter your pledge"}</p>
            <div className="flex gap-4 ">
              {price && (
                <PledgeInput
                  initalValue={pledgePrice}
                  onInpuChange={handleChange}
                />
              )}
              <Button text="Continue" onClick={onlick} />
            </div>
          </div>
        </section>
      </label>
    </div>
  );
}

export default BackPledge;
