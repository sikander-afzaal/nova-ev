const Service = () => {
  return (
    <div
      id="service"
      className="wrapper py-[80px] xl:py-[100px] m-0 xl:mt-[50px]"
    >
      <div className="w-full xl:flex-row flex-col max-w-theme flex justify-between items-center sm:gap-5">
        <img
          src="/service.png"
          className="object-contain w-full xl:max-w-none max-w-[600px] xl:w-1/2"
          alt=""
        />
        <div className="flex gap-6 sm:items-start justify-start items-center sm:text-left text-center flex-col">
          <h2 className="title">Service</h2>
          <p className="para">
            Our business specializes in installing EV car chargers at customers'
            homes. We have a team of electricians who are trained and
            experienced in installing these chargers and upgrading electrical
            systems as needed.
            <br /> <br />
            Our service includes everything from the initial consultation to
            final testing and commissioning of the charger. We take pride in
            providing high-quality installation services and customer
            satisfaction is our top priority.
            <br /> <br />
            Our team is knowledgeable and can answer any questions customers may
            have about the process or the benefits of owning an EV car charger.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
