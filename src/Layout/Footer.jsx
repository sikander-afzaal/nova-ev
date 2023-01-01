const Footer = () => {
  return (
    <div className="w-full justify-start items-center flex-col bg-black pt-[60px] pb-[30px] mt-[100px]">
      <footer className="flex justify-start items-center flex-col w-full ">
        <div className="border-solid border-b-[1px] border-text pb-[60px] px-5 w-full justify-center items-center flex">
          <div className="flex xl:flex-row flex-col  justify-between items-center xl:items-stretch max-w-theme gap-[40px] sm:gap-8 xl:gap-2 w-full">
            <div className="flex justify-start xl:w-auto w-full items-center gap-5 sm:flex-row flex-col sm:text-left text-center">
              <img src="/pin.png" alt="" className="w-[65px] object-contain" />
              <p className="text-white text-[20px] font-semibold leading-[29px]">
                2257 Lynn Avenue <br /> Land O Lakes, WI 54540
              </p>
            </div>
            <div className="w-[1px] bg-white xl:block hidden"></div>
            <div className="flex justify-start xl:w-auto w-full items-center gap-5 sm:flex-row flex-col sm:text-left text-center">
              <img src="/mail.png" alt="" className="w-[65px] object-contain" />
              <p className="text-white text-[20px] font-semibold leading-[29px]">
                contact@novaevsystems.com <br /> info@novaevs.com
              </p>
            </div>
            <div className="w-[1px] bg-white xl:block hidden"></div>
            <div className="flex justify-start xl:w-auto w-full items-center gap-5 sm:flex-row flex-col sm:text-left text-center  ">
              <img
                src="/phone.png"
                alt=""
                className="w-[65px] object-contain"
              />
              <p className="text-white text-[20px] font-semibold leading-[29px]">
                715-547-9391 <br /> 24/7 Emergency Services
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-16 px-5 max-w-theme flex-col gap-[60px] justify-center items-center">
          <div className="flex justify-start items-center w-full gap-6 sm:justify-center">
            <a href="#" target={"blank"}>
              <img src="/fb.png" className="w-[38px] object-contain" alt="" />
            </a>
            <a href="#" target={"blank"}>
              <img
                src="/twitter.png"
                className="w-[38px] object-contain"
                alt=""
              />
            </a>
            <a href="#" target={"blank"}>
              <img
                src="/insta.png"
                className="w-[38px] object-contain"
                alt=""
              />
            </a>
            <a href="#" target={"blank"}>
              <img
                src="/linkedin.png"
                className="w-[38px] object-contain"
                alt=""
              />
            </a>
          </div>
          <div className="flex justify-center items-start w-full gap-8 sm:gap-12 sm:flex-row flex-col sm:items-center">
            <a
              href="#home"
              className="text-white no-underline font-medium text-xl"
            >
              Home
            </a>
            <a
              href="#service"
              className="text-white no-underline font-medium text-xl"
            >
              Service
            </a>
            <a
              href="#about"
              className="text-white no-underline font-medium text-xl"
            >
              About Us
            </a>
            <a
              href="#work"
              className="text-white no-underline font-medium text-xl"
            >
              How does It work?
            </a>
          </div>
          <p className="text-white  font-medium text-center text-sm sm:text-xl">
            Copyright ©2022 Nova EV Systems. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
