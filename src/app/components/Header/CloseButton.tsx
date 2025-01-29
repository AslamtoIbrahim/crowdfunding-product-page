type Props = {
    handleClick?: React.MouseEventHandler;
  };
  function CloseButton({ handleClick }: Props) {
    return (
      <div
        onClick={handleClick}
        className="w-4 h-4  flex md:hidden cursor-pointer"
      >
        <span className="bg-white w-[0.1875rem] h-full inline-block rotate-45 translate-x-[50%] rounded-sm"></span>
        <span className="bg-white w-[0.1875rem] h-full inline-block -rotate-45 translate-x-[-50%] rounded-sm"></span>
      </div>
    );
  }
  
  export default CloseButton;