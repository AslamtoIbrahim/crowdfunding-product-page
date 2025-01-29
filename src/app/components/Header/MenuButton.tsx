type Props = {
  handleClick?: React.MouseEventHandler;
};
function MenuButton({ handleClick }: Props) {
  return (
    <div
      onClick={handleClick}
      className="w-4 h-4  flex md:hidden flex-col gap-[0.1875rem] cursor-pointer"
    >
      <span className="bg-white h-[0.1875rem] w-full inline-block"></span>
      <span className="bg-white h-[0.1875rem] w-full inline-block"></span>
      <span className="bg-white h-[0.1875rem] w-full inline-block"></span>
    </div>
  );
}

export default MenuButton;
