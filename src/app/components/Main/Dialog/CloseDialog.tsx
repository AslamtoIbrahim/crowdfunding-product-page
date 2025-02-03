type Props = {
    handleClick?: React.MouseEventHandler;
  };

function CloseDialog({ handleClick }: Props){

    return (
        <div
        onClick={handleClick}
        className="w-4 h-4  cursor-pointer hover:fill-black">
        {/* <span className="bg-dark-gray hover:bg-gray-950 w-[0.1875rem] h-full inline-block rotate-45 translate-x-[50%] rounded-sm"></span>
        <span className="bg-dark-gray hover:bg-gray-950 w-[0.1875rem] h-full inline-block -rotate-45 translate-x-[-50%] rounded-sm"></span> */}
        <svg className="hover:fill-black " width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="black" fill-rule="evenodd" opacity=".4"/></svg>
      </div>
    );
}

export default CloseDialog;