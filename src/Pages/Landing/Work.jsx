import WorkBox from "../../Components/WorkBox";

const Work = () => {
  return (
    <div
      id="work"
      className="wrapper py-[110px] isolate bg-work-pattern bg-cover relative"
    >
      <img
        src="/grid.png"
        alt=""
        className="absolute left-[5%] bottom-[2%] sm:bottom-[5%] -z-10"
      />
      <img
        src="/charger.png"
        alt=""
        className="absolute right-[2%] top-[2%] sm:top-[20%] -z-10"
      />
      <div className="flex justify-center gap-12 xl:gap-[80px] items-center max-w-theme w-full flex-col">
        <h2 className="title">How does it work?</h2>
        <div className="xl:flex justify-between grid grid-cols-1 grid-rows-3 place-items-center  w-full items-center xl:items-stretch gap-5">
          <WorkBox
            name="Evaluation"
            img="/eval.png"
            desc="Schedule an evaluation in the comfort of your home, where one of our certified electricians will evaluate your systems."
          />
          <WorkBox
            name="installation"
            img="/install.png"
            desc="After evaluation, one of our agents will reach out to the customer to discuss the current possible charging solutions, and if we'll need to fix/upgrade their current electrical system. Once all is decided, we will schedule an installation appointment."
          />
          <WorkBox
            name="Congratulations"
            img="/congrats.png"
            desc="During the day of the appointment, an electrician will be at your house and install the charging system."
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
