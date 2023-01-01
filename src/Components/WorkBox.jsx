const WorkBox = ({ img, name, desc }) => {
  return (
    <div className="bg-white shadow-work w-full xl:h-auto h-full min-h-[450px] xl:min-h-[520px] max-w-[450px] flex justify-center items-center">
      <div className="w-[90%] h-[90%] isolate py-7 px-5 border-[1px] flex-col text-center border-solid border-[#D9D9D9] flex justify-center xl:justify-start items-center gap-2 xl:gap-5 relative">
        <img src={img} alt="" className="object-contain w-[82px]" />
        <h3 className="text-black capitalize text-[28px] font-bold">{name}</h3>
        <p className="text-black font-normal text-base  sm:text-xl">{desc}</p>
        <div className="absolute bg-[#d9d9d9] -z-10 rounded-tl-full w-[60px] h-[60px] bottom-0 right-0"></div>
      </div>
    </div>
  );
};

export default WorkBox;
