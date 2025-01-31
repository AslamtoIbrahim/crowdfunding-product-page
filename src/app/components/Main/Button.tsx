type props = {
  text?: string;
  style?: string;
};
function Button({ text, style }: props) {
  return (
    <button
      className={`${style}
       bg-moderate-cyan px-[2.8125rem] md:px-[2.5rem] py-[1.375rem] md:py-[1.4375rem] rounded-full text-white text-sm 
        md:text-base font-bold font-commissioner
        hover:bg-dark-cyan transition-all duration-200 ease-in-out`}
    >
      {text}
    </button>
  );
}

export default Button;
