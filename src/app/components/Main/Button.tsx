type props = {
  text?: string;
  style?: string;
  ability?: boolean;
  color?: string;
  onClick?: React.MouseEventHandler;
};
function Button({ text, style = "", ability = false, color, onClick }: props) {
  return (
    <button
      onClick={onClick}
      disabled={ability}
      style={{ padding: style, backgroundColor: color }}
      className={`
       bg-moderate-cyan px-5 md:px-7 py-3 rounded-full text-white font-medium font-commissioner
       text-sm md:text-base lg:text-xl
        hover:bg-dark-cyan transition-all duration-200 ease-in-out ${style}
        ${ability && `cursor-default bg-dark-gray hover:bg-dark-gray `} `}
    >
      {text}
    </button>
  );
}

export default Button;
