import Button from "../Button";

type props = {
  title?: string;
  price?: number;
  description?: string;
  amount?: number;
};

function UnavailablePledge({ title, price, description, amount }: props) {
  return (
    <div className="opacity-55 flex flex-col gap-8 font-commissioner border-zinc-300 border-2 rounded-md px-[1.125rem] md:px-[2.125rem] py-[1.625rem] md:py-[2.625rem]">
      <section className="flex flex-col md:flex-row gap-2 md:justify-between  ">
        <h1 className="text-base md:text-lg font-extrabold">{title}</h1>
        <p className="text-moderate-cyan font-semibold">{`Pledge $${price} or more`} </p>
      </section>
      <section>
        <p className="text-dark-gray">{description}</p>
      </section>
      <section className="flex flex-col md:flex-row items-start md:justify-between md:items-center gap-7 ">
        <div>
          <p className="text-dark-gray flex items-center gap-2">
            <span className="text-gray-950 text-2xl font-bold  ">{amount}</span>{" "}
            left
          </p>
        </div>
        <Button text="Out of Stock" style="0.875rem 2rem" ability={amount==0} color="hsl(0, 0%, 48%)" />
      </section>
    </div>
  );
}

export default UnavailablePledge;
