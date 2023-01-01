const Hero = () => {
  return (
    <div
      id="home"
      className="wrapper isolate pb-7 pt-[150px] xl:pt-[190px] relative"
    >
      <img
        src="/hero-right.png"
        alt=""
        className="absolute -z-10 right-0 top-0 h-full"
      />
      <img
        src="/plane.png"
        alt=""
        className="absolute -z-10 left-[20%] xl:left-[12%] top-1/2 sm:block hidden -translate-x-1/2 w-[400px] object-contain"
      />
      <div className="w-full xl:flex-row flex-col-reverse max-w-theme flex justify-between items-center xl:items-start gap-[60px]">
        <div className="flex xl:text-left text-center w-full max-w-[650px] justify-start items-center xl:items-start flex-col gap-7">
          <h2 className="title text-[30px] sm:text-[40px] mid:text-title">
            Elevate Your <span className="text-darkGreen">EV Experience</span>{" "}
            With Our <span className="text-brightYellow">Lightning-Fast </span>
            <span className="text-darkGreen">Charging</span> Solutions
          </h2>
          <p className="para text-xl mid:text-[24px]">
            Our fast charging solutions will get your electric vehicle back on
            the road in no time. Schedule an in-home evaluation with one of our
            highly skilled electricians and have your very own charging station
            at the comfort of your home.
          </p>
          <div className="flex justify-start items-center gap-3 sm:gap-8 sm:flex-row flex-col sm:w-auto w-full ">
            <a
              href="#contact"
              className="green-btn w-full sm:w-[240px] grid place-items-center no-underline"
            >
              Contact
            </a>
            <a
              href="#pricing"
              className="yellow-btn  w-full sm:w-[240px] grid place-items-center no-underline"
            >
              Pricing
            </a>
          </div>
          <div className="flex justify-start items-center sm:flex-row flex-col  gap-5 sm:gap-9">
            <div className="flex justify-start items-center flex-col gap-2">
              <img
                src="/ports.png"
                className="w-[82px] object-fill h-[82px]"
                alt=""
              />
              <p className="text-text text-center font-normal text-base leading-[19px]">
                Charging Ports <br /> Worldwide
              </p>
            </div>
            <div className="flex justify-start items-center flex-col gap-2">
              <img
                src="/customers.png"
                className="w-[100px] object-fill h-[100px]"
                alt=""
              />
              <p className="text-text text-center font-normal text-base leading-[19px]">
                Electric Vehicle <br /> Customers
              </p>
            </div>
            <div className="flex justify-start items-center flex-col gap-2">
              <img
                src="/uptime.png"
                className="w-[100px] object-fill h-[100px]"
                alt=""
              />
              <p className="text-text text-center font-normal text-base leading-[19px]">
                Charger <br /> Uptime
              </p>
            </div>
          </div>
        </div>
        <img
          src="/hero.png"
          className="w-full max-w-[650px] object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
