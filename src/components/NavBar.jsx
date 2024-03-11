/* eslint-disable jsx-a11y/anchor-is-valid */
const NavBar = () => {
  const handleClick = (event) => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };
  return (
    <nav className="bg-gray-800 p-6 px-24">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Ankit Srivastava</div>
        <ul className="hidden md:flex">
          <li className="mr-6 text-white hover:text-gray-300">
            <a href="#">About Me</a>
          </li>
          <li className="mr-6 text-white hover:text-gray-300">
            <a href="#">Skills</a>
          </li>
          <li className="mr-6 text-white hover:text-gray-300">
            <a href="#">Portfolio</a>
          </li>
          <li className="mr-6 text-white hover:text-gray-300">
            <a href="#">Services</a>
          </li>
          <li className="mr-6 text-white hover:text-gray-300">
            <a href="#">Contact</a>
          </li>
        </ul>
        {/* Mobile Button */}
        <div className="md:hidden flex items-center text-white">
          <button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="text-white hidden mobile-menu md:hidden">
        <a href="#" className="block py-2 px-4  hover:text-gray-300">
          About Me
        </a>
        <a href="#" className="block py-2 px-4  hover:text-gray-300">
          Skills
        </a>
        <a href="#" className="block py-2 px-4  hover:text-gray-300">
          Portfolio
        </a>
        <a href="#" className="block py-2 px-4 hover:text-gray-300">
          Services
        </a>
        <a href="#" className="block py-2 px-4  hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
