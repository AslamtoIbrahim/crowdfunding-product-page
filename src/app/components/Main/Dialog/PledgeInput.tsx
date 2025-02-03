type props = {
  value?: number;
  onchange?: React.ChangeEventHandler;
};
function PledgeInput({ value, onchange }: props) {
  return (
    <div
      className="border-dark-gray border-[1px]  font-commissioner px-9 py-[1.275rem] md:py-[1.2375rem] rounded-full
    flex items-center gap-[0.625rem] "
    >
      <span className="text-dark-gray ">$</span>
      <input
        onChange={onchange}
        className="w-6 border-none outline-none  ont-commissioner font-bold"
        type="text"
        value={value}
      />
    </div>
  );
}

export default PledgeInput;
