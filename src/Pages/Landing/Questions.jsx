const Questions = () => {
  return (
    <div className="wrapper bg-center bg-question-pattern py-[140px] sm:py-[190px]">
      <div className="flex justify-center items-center text-center gap-[40px] sm:gap-[50px] xl:gap-[80px] flex-col">
        <h3 className="text-titleBlack leading-[1] text-[20px] sm:text-[25px] xl:text-[32px] font-semibold">
          HAVE ANY QUESTIONS?
        </h3>
        <h2 className="text-titleBlack leading-[1.3] text-[25px] sm:text-[32px] xl:text-[48px] font-semibold">
          Reach out to us and our team will be happy to assist.{" "}
        </h2>
        <button className="yellow-btn w-[240px]">Contact</button>
      </div>
    </div>
  );
};

export default Questions;
