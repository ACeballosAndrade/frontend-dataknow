import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-black">
      <div className="max-w-6xl mx-auto px-6 flex justify-between h-14 items-center">
        <div className="text-white flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 20.625C13.97 20.625 13.75 19.4425 13.75 19.25H11C11 20.515 11.9075 22.7563 15.125 23.265V24.75H17.875V23.265C20.625 22.7975 22 21.0238 22 19.25C22 17.71 21.285 15.125 16.5 15.125C13.75 15.125 13.75 14.2587 13.75 13.75C13.75 13.2413 14.7125 12.375 16.5 12.375C18.2875 12.375 18.4112 13.255 18.425 13.75H21.175C21.1564 12.8133 20.8195 11.9108 20.2197 11.1911C19.6199 10.4713 18.793 9.97719 17.875 9.79V8.25H15.125V9.74875C12.375 10.2025 11 11.9763 11 13.75C11 15.29 11.715 17.875 16.5 17.875C19.25 17.875 19.25 18.81 19.25 19.25C19.25 19.69 18.3975 20.625 16.5 20.625Z"
              fill="#D0BCFF"
            />
            <path
              d="M6.875 2.75H2.75V5.5H5.5V28.875C5.5 29.2397 5.64487 29.5894 5.90273 29.8473C6.16059 30.1051 6.51033 30.25 6.875 30.25H26.125C26.4897 30.25 26.8394 30.1051 27.0973 29.8473C27.3551 29.5894 27.5 29.2397 27.5 28.875V5.5H30.25V2.75H6.875ZM24.75 27.5H8.25V5.5H24.75V27.5Z"
              fill="url(#paint0_linear_3_23)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_23"
                x1="16.5"
                y1="2.75"
                x2="16.5"
                y2="30.25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6750A4" />
                <stop offset="1" stopColor="#D0BCFF" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-bold size-5">FACTURATE</span>
        </div>
        <div className="flex h-full text-white gap-3">
          <NavLink to={"/"} href="#" className="flex-1 text-sm h-full flex items-center justify-center border-b-2 border-transparent focus:border-primary-200 focus:text-primary-200">
            Clientes
          </NavLink>
          <NavLink to={"facturas"} href="#" className="flex-1 text-sm h-full flex items-center justify-center border-b-2 border-transparent focus:border-primary-200 focus:text-primary-200">
            Facturas
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
