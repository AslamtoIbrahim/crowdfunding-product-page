import './MobileMenu.css'
function MobileMenu() {
  return (
    <div className="absolute bg-white w-[calc(95%-2.1875rem)] left-[50%] translate-x-[-50%]  top-[5.5rem] rounded-md">
      <ul className="mobile-list">
        <li>
          <a href="#">About</a>
        </li>
        <hr />
        <li>
          <a href="#">Discover</a>
        </li>
        <hr />
        <li>
          <a href="#">Get Started</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
