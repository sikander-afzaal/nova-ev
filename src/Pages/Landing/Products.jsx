const Products = () => {
  return (
    <div id="pricing" className="wrapper py-[90px]">
      <div className="flex flex-col w-full max-w-theme justify-center items-center gap-[50px]">
        <h2 className="title">Our Products</h2>
        <div className="flex justify-between xl:flex-row flex-col items-center xl:items-stretch w-full gap-5">
          <div className="flex rounded-2xl max-w-[450px] relative justify-start w-full shadow-product items-center p-[40px] flex-col gap-5 text-center">
            <div className="flex justify-center isolate flex-col items-center relative">
              <h4 className="text-[#31424F] text-[36px] font-bold">40 Amps</h4>
              <h3 className="text-brightYellow font-bold text-title">
                $649-$749
              </h3>
              <img
                src="/dollar.png"
                alt=""
                className="absolute -translate-y-[55%] -bottom-1/2 left-1/2 -z-10 -translate-x-1/2"
              />
            </div>
            <div className="flex justify-start items-start flex-col sm:w-auto w-full gap-5">
              <h4 className="text-darkGreen font-semibold text-[25px] sm:text-[32px]">
                4 Possible Chargers
              </h4>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/juice.png"
                  className="object-contain w-[56px]"
                  alt=""
                />
                <p className="text-black font-normal text-[24px]">Juice Box</p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/point.png"
                  className="object-contain w-[56px]"
                  alt=""
                />
                <p className="text-black font-normal text-[24px]">
                  ChargePoint
                </p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/clipper.png"
                  className="object-contain w-[56px]"
                  alt=""
                />
                <p className="text-black font-normal text-[24px]">
                  Clipper Creek
                </p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/tesla.png"
                  className="object-contain w-[56px]"
                  alt=""
                />
                <p className="text-black font-normal text-[24px]">
                  Tesla Outlet
                </p>
              </div>
            </div>
          </div>
          <div className="flex rounded-2xl max-w-[450px] relative justify-start w-full shadow-product items-center p-[40px] flex-col gap-5 text-center">
            <div className="flex justify-center isolate relative flex-col items-center">
              <h4 className="text-[#31424F] text-[36px] font-bold">48 Amps</h4>
              <h3 className="text-brightYellow font-bold text-title">
                $449-$999
              </h3>{" "}
              <img
                src="/dollar.png"
                alt=""
                className="absolute -translate-y-[55%] -bottom-1/2 left-1/2 -z-10 -translate-x-1/2"
              />
            </div>
            <div className="flex justify-start items-start flex-col sm:w-auto w-full gap-5">
              <h4 className="text-darkGreen font-semibold text-[25px] sm:text-[32px]">
                4 Possible Chargers
              </h4>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/juice.png"
                  className="object-contain w-[56px]"
                  alt=""
                />
                <p className="text-black font-normal text-[24px]">Juice Box</p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/wall.png"
                  className="object-contain w-[56px]"
                  alt=""
                />
                <p className="text-black font-normal text-[24px]">Wallbox</p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/clipper.png"
                  className="object-contain w-[56px]"
                  alt=""
                />
                <p className="text-black font-normal text-[24px]">
                  Clipper Creek
                </p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/tesla-box.png"
                  className="object-contain w-[56px]"
                  alt=""
                />
                <p className="text-black font-normal text-[24px]">
                  Tesla Box Charger
                </p>
              </div>
            </div>
          </div>
          <div className="flex rounded-2xl max-w-[450px] relative justify-start w-full shadow-product items-center p-[40px] flex-col gap-5 text-center">
            <div className="flex justify-center isolate relative flex-col items-center">
              <h4 className="text-[#31424F] text-[36px] font-bold">50 Amps</h4>
              <h3 className="text-brightYellow font-bold text-title">
                $599-$749
              </h3>{" "}
              <img
                src="/dollar.png"
                alt=""
                className="absolute -translate-y-[55%] -bottom-1/2 left-1/2 -z-10 -translate-x-1/2"
              />
            </div>
            <div className="flex justify-start items-start flex-col sm:w-auto w-full gap-5">
              <h4 className="text-darkGreen font-semibold text-[25px] sm:text-[32px]">
                4 Possible Chargers
              </h4>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/autel.png"
                  className="object-contain w-[56px]"
                  alt=""
                />
                <p className="text-black font-normal text-[24px]">
                  Autel Max Charger
                </p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/point.png"
                  className="object-contain w-[56px]"
                  alt=""
                />
                <p className="text-black font-normal text-[24px]">
                  ChargePoint
                </p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/clipper.png"
                  className="object-contain w-[56px]"
                  alt=""
                />
                <p className="text-black font-normal text-[24px]">
                  Clipper Creek
                </p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img
                  src="/tesla.png"
                  className="object-contain w-[56px]"
                  alt=""
                />
                <p className="text-black font-normal text-[24px]">
                  Tesla Outlet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
