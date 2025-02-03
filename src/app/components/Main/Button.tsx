type props = {
  text?: string;
  style?: string;
  ability?: boolean;
  color?: string;
};
function Button({ text, style = "", ability = false , color}: props) {
  return (
    <button
      disabled={ability}
      style={{ padding: style, backgroundColor: color }}
      className={`
       bg-moderate-cyan px-[2.8125rem] md:px-[2.5rem] py-3 rounded-full text-white text-sm 
        md:text-base font-bold font-commissioner
        hover:bg-dark-cyan transition-all duration-200 ease-in-out ${style}
        ${ability && `cursor-default bg-dark-gray hover:bg-dark-gray `} `}
    >
      {text}
    </button>
  );
}

export default Button;
