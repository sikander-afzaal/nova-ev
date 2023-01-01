const ReviewBox = ({
  img,
  name,
  owner,
  review,
  rating,
  socials: { fb, twitter, linkedin, insta },
}) => {
  return (
    <div className="w-full md:px-12 flex justify-center items-center  md:py-[80px]">
      <div className="flex max-w-[700px] justify-start items-start flex-col py-5 px-5 md:px-[45px] bg-[#EDEFF5] rounded-[5px]">
        <div className="flex relative w-full justify-start md:justify-between items-center gap-3">
          <img
            src={img}
            className="w-[120px] sm:w-[185px] object-contain static md:absolute top-0 left-0 md:-translate-x-1/2 md:-translate-y-1/2"
            alt=""
          />
          <div className="flex justify-start items-start md:pl-[120px] flex-col">
            <h4 className="text-titleBlack text-[18px] sm:text-[24px] font-medium">
              {name}
            </h4>
            <p className="text-darkGreen capitalize text-base sm:text-[18px] font-light ">
              {owner}
            </p>
          </div>
          <img
            src="/quote.png"
            className="w-[60px] sm:w-[94px] sm:static absolute right-0 object-contain self-end translate-y-[50px] sm:translate-y-[30px]"
            alt=""
          />
        </div>
        <p className="italic text-titleBlack leading-[30px] sm:leading-[34px] font-normal text-base sm:text-xl mt-[50px] sm:mt-[30px]">
          {review}
        </p>
        <div className="flex justify-between sm:flex-row flex-col sm:gap-0 gap-6 items-center w-full mt-[80px] sm:mt-[130px]">
          <div className="flex justify-start items-center gap-1">
            {Array(rating)
              .fill(false)
              .map((elem, idx) => {
                return (
                  <img
                    src="star.png"
                    key={"star" + idx + name}
                    alt=""
                    className="w-[23px] object-contain"
                  />
                );
              })}
          </div>
          <div className="flex justify-start items-center gap-1">
            <p className="text-titleBlack font-medium text-xl mr-5">Social</p>
            <a href={fb} target={"blank"}>
              <img src="/fb.png" className="w-[38px] object-contain" alt="" />
            </a>
            <a href={twitter} target={"blank"}>
              <img
                src="/twitter.png"
                className="w-[38px] object-contain"
                alt=""
              />
            </a>
            <a href={insta} target={"blank"}>
              <img
                src="/insta.png"
                className="w-[38px] object-contain"
                alt=""
              />
            </a>
            <a href={linkedin} target={"blank"}>
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
  );
};

export default ReviewBox;
