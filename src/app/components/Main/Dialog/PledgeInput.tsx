import { use, useEffect, useRef } from "react";

type props = {
  initalValue?: number;
  onInpuChange?: (value : number) => void;
};
function PledgeInput({ initalValue = 0, onInpuChange }: props) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect( () => {
    if (inputRef.current) {
      inputRef.current.value = initalValue.toString();
    }
  }, [initalValue])

  const handleInput = () =>{
    const input = parseFloat(inputRef.current?.value || '0');
    if (onInpuChange) {
      onInpuChange(input); // 🤔 Call parent's handler with current value
    }
  }
  return (
    <div
      className="border-dark-gray border-[1px]  font-commissioner px-9 py-[1.275rem] md:py-[1.2375rem] rounded-full
    flex items-center gap-[0.625rem] "
    >
      <span className="text-dark-gray ">$</span>
      <input
        ref={inputRef}
        onChange={handleInput}
        className="w-12 text-base border-none outline-none  ont-commissioner font-bold"
        type="text"
      />
    </div>
  );
}

export default PledgeInput;
