import ReviewBox from "../../Components/ReviewBox";
//slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Testimonials = () => {
  return (
    <div className="wrapper mt-[50px] sm:mt-[90px] xl:mt-[180px]">
      <div className="w-full xl:flex-row flex-col max-w-theme flex justify-between items-center xl:items-start gap-10 md:gap-[130px] xl:gap-5">
        <div className="flex xl:m-0 md:-mb-[80px] justify-start  w-full items-start flex-col gap-2 sm:gap-5">
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
        <Splide
          options={{
            arrows: false,
            pagination: false,
            autoplay: true,
            drag: true,
            gap: "60px",
            perPage: 1,
            width: "100%",
            perMove: 1,
            rewind: true,
          }}
        >
          <SplideSlide>
            <ReviewBox
              name="John Doe"
              owner="Home Owner"
              img="/review.png"
              review="I don’t normally write reviews, but these guys are the real deal! I purchased their 50 Amp tier charger and can honestly say, I’ve never seen my car charge so fast - it’s a blessing!"
              rating={5}
              socials={{ fb: "#", insta: "#", linkedin: "#", twitter: "#" }}
            />
          </SplideSlide>
          <SplideSlide>
            <ReviewBox
              name="John Doe"
              owner="Home Owner"
              img="/review.png"
              review="I don’t normally write reviews, but these guys are the real deal! I purchased their 50 Amp tier charger and can honestly say, I’ve never seen my car charge so fast - it’s a blessing!"
              rating={5}
              socials={{ fb: "#", insta: "#", linkedin: "#", twitter: "#" }}
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;
