const Contact = () => {
  return (
    <div className="wrapper mt-[80px] sm:mt-[120px]">
      <div className="flex justify-start gap-[40px] sm:gap-[70px] items-center flex-col w-full max-w-theme">
        <h2 className="title">Contact Us</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full flex-col justify-start items-start gap-5 sm:gap-[35px]"
        >
          <div className="flex justify-start items-center gap-5 sm:gap-[35px] w-full sm:flex-row flex-col">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[#F4F5F8] rounded-[5px] h-[55px] border-none outline-none pl-5 text-text font-normal text-[20px]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#F4F5F8] rounded-[5px] h-[55px] border-none outline-none pl-5 text-text font-normal text-[20px]"
            />
          </div>
          <div className="flex justify-start items-center gap-5 sm:gap-[35px] w-full sm:flex-row flex-col">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-[#F4F5F8] rounded-[5px] h-[55px] border-none outline-none pl-5 text-text font-normal text-[20px]"
            />
            <select
              type="email"
              placeholder="Select a Product"
              className="w-full bg-[#F4F5F8] rounded-[5px] h-[55px] border-none outline-none pl-5 text-text font-normal text-[20px]"
            >
              <option value="Select a Product">Select a Product</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <textarea
            placeholder="Type your comments"
            className="w-full bg-[#F4F5F8] pt-5 rounded-[5px] h-[195px] resize-none border-none outline-none pl-5 text-text font-normal text-[20px]"
          />
          <button
            className="yellow-btn w-[240px] mt-[20px] sm:mt-[40px] self-center"
            type="submit"
          >
            Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
