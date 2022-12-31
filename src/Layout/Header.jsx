import { useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="wrapper pt-[30px]">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed top-0 left-0 w-full h-full z-[88] bg-black opacity-60"
        ></div>
      )}
      <header className="w-full max-w-theme flex justify-between items-center">
        <img src="/logo.png" className="w-[125px] object-contain" alt="" />
        <nav
          className={`flex z-[89] md:static fixed top-0 transition-all duration-1000 ${
            headerToggle ? "right-0" : "-right-[900px]"
          } md:flex-row flex-col justify-start items-center sm:items-start md:p-0 py-28 px-8 overflow-y-auto md:w-auto md:h-auto w-full md:max-w-none max-w-full sm:max-w-[400px] md:bg-transparent bg-white border-solid border-l-[4px] md:border-none border-darkGreen h-full md md:items-center gap-10 md:gap-4 lg:gap-10 xl:gap-[70px]`}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            className="text-titleBlack font-medium text-xl md:text-[18px]  xl:text-xl"
            href="#"
          >
            Home
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-titleBlack font-medium text-xl md:text-[18px]  xl:text-xl"
          >
            Service
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-titleBlack font-medium text-xl md:text-[18px]  xl:text-xl"
          >
            About Us
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-titleBlack font-medium text-xl md:text-[18px]  xl:text-xl"
          >
            How does It work?
          </a>
          <button className="green-btn w-[166px]">Contact</button>
        </nav>
        {headerToggle ? (
          <svg
            onClick={() => setHeaderToggle(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#1E2736"
            className="w-7 cursor-pointer h-7 relative z-[90] md:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setHeaderToggle(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#1E2736"
            className="w-7 cursor-pointer h-7 relative z-[90] md:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </header>
    </div>
  );
};

export default Header;
