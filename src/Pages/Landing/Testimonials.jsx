const Testimonials = () => {
  return (
    <div className="wrapper mt-[50px] sm:mt-[90px] xl:mt-[180px]">
      <div className="w-full xl:flex-row flex-col max-w-theme flex justify-between items-center xl:items-start gap-10 md:gap-[130px] xl:gap-5">
        <div className="flex justify-start xl:w-auto w-full items-start flex-col gap-2 sm:gap-5">
          <div className="border-solid pl-5 pt-2 flex justify-start items-start flex-col gap-4 pb-3 border-brightYellow border-l-[4px]">
            <h6 className="text-darkGreen uppercase font-semibold text-[18px] sm:text-[24px] leading-[1]">
              TESTIMONIALS
            </h6>
            <p className="capitalize text-titleBlack sm:leading-[58px] text-[30px] sm:text-title font-semibold ">
              Read what our <br /> customers are <br /> saying
            </p>
          </div>
          <p className="text-titleBlack font-semibold text-[18px] sm:text-[24px] mt-4">
            We have over <span className="text-darkGreen">1000+</span> Happy
            Customers
          </p>
        </div>
        <div className="flex max-w-[700px] justify-start items-start flex-col py-5 px-5 md:px-[45px] bg-[#EDEFF5] rounded-[5px]">
          <div className="flex relative w-full justify-start md:justify-between items-center gap-3">
            <img
              src="/review.png"
              className="w-[120px] sm:w-[185px] object-contain static md:absolute top-0 left-0 md:-translate-x-1/2 md:-translate-y-1/2"
              alt=""
            />
            <div className="flex justify-start items-start md:pl-[120px] flex-col">
              <h4 className="text-titleBlack text-[18px] sm:text-[24px] font-medium">
                John Doe
              </h4>
              <p className="text-darkGreen capitalize text-base sm:text-[18px] font-light ">
                Home Owner
              </p>
            </div>
            <img
              src="/quote.png"
              className="w-[60px] sm:w-[94px] sm:static absolute right-0 object-contain self-end translate-y-[50px] sm:translate-y-[30px]"
              alt=""
            />
          </div>
          <p className="italic text-titleBlack leading-[30px] sm:leading-[34px] font-normal text-base sm:text-xl mt-[50px] sm:mt-[30px]">
            I don’t normally write reviews, but these guys are the real deal! I
            purchased their 50 Amp tier charger and can honestly say, I’ve never
            seen my car charge so fast - it’s a blessing!
          </p>
          <div className="flex justify-between sm:flex-row flex-col sm:gap-0 gap-6 items-center w-full mt-[80px] sm:mt-[130px]">
            <div className="flex justify-start items-center gap-1">
              <img src="star.png" alt="" className="w-[23px] object-contain" />
              <img src="star.png" alt="" className="w-[23px] object-contain" />
              <img src="star.png" alt="" className="w-[23px] object-contain" />
              <img src="star.png" alt="" className="w-[23px] object-contain" />
              <img src="star.png" alt="" className="w-[23px] object-contain" />
            </div>
            <div className="flex justify-start items-center gap-1">
              <p className="text-titleBlack font-medium text-xl mr-5">Social</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
