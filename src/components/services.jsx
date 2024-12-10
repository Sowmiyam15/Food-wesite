import React from "react";

const Services = () => {
  return (
    <div>
      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold m-6 lg:m-[100px] text-center">
        GENERAL CONTRACTORS AND RETAIL CUSTOMERS
      </h1>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 lg:gap-11 mb-10">
        <div className="bg-yellow-600 p-3 rounded-xl text-center w-[250px] lg:w-auto">
          CC/CONSTRUCTION
        </div>
        <div className="bg-yellow-600 p-3 rounded-xl text-center w-[250px] lg:w-auto">
          RETAIL/HOME PAYING
        </div>
      </div>

      {/* Section Heading */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl m-6 lg:m-[100px]">
        CC/CONSTRUCTION: The construction need help to meet demand
      </h1>

      {/* Services Grid */}
      <div className="flex flex-wrap justify-center">
        {Array(6).fill(0).map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] lg:w-[400px] bg-zinc-100 h-auto m-4 p-6 rounded-3xl"
          >
            <img
              className="w-full h-[200px] object-cover rounded-xl"
              src="/src/assets/5.jpg"
              alt="Service"
            />
            <h1 className="m-4 font-semibold">MILLING RESOURCING</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis laborum unde! Saepe expedita illo mollitia ad? Quisquam
              autem repellendus, dolor, deserunt iusto tempore consequatur
              repudiandae cum blanditiis quas ut.
            </p>
            <div className="flex justify-end mt-4">
              <a className="rounded-lg p-2 text-xs text-blue-500" href="#">
                LEARN MORE
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <p className="font-bold text-xl sm:text-2xl p-3 m-6 lg:m-11">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam rem temporibus numquam perferendis eveniet id adipisci aspernatur accusamus, velit officiis atque expedita itaque animi excepturi rerum.
      </p>

      {/* Why Choose Us Section */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold ml-6 lg:ml-11">
        WHY CHOOSE US:
      </h1>
      <div className="flex flex-col mt-6 ml-6 lg:ml-[100px] bg-zinc-100 p-6 lg:p-10 w-full lg:w-[1300px] rounded-3xl">
        <p className="font-bold p-3">
          DIVERSE EXPERTISE:
          <span className="p-3 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            deleniti vitae facere, iste harum deserunt sed architecto aliquid
            perferendis.
          </span>
        </p>
        <p className="font-bold p-3">
          TRUST AND RELIABILITY:
          <span className="font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            corrupti ullam eligendi repellat quod repudiandae accusantium
            perspiciatis.
          </span>
        </p>
        <p className="font-bold p-3">
          EXPERT GUIDANCE:
          <span className="font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
            provident tempore ex alias, sunt iure praesentium ipsum
            exercitationem impedit.
          </span>
        </p>
      </div>


      <footer className="bg-zinc-100 mt-6 flex flex-col lg:flex-row items-center lg:justify-between p-5 lg:p-9">
    <p className="flex-1 font-bold text-xl lg:text-3xl mb-5 lg:mb-0 p-2 lg:p-5 text-center lg:text-left">
        LOOKING FOR A QUALITY PAVING AND <br /> CONCRETE EXPERT FOR YOUR NEXT PROJECT?
    </p>
    <p className="m-5 lg:m-10 text-center lg:text-left">
        <button className=" text-black  font-bold py-2 px-4 rounded hover:bg-blue-600 transition-all">
            Request an Estimate
        </button>
    </p>
   
</footer>

<div className="text-xl m-5 flex gap-4 justify-center lg:justify-start">
    <i className="fab fa-facebook bg-black text-white p-2 rounded-full"></i>
    <i className="fab fa-youtube bg-black text-white p-2 rounded-full"></i>
    <i className="fab fa-linkedin bg-black text-white p-2 rounded-full"></i>
    <i className="fab fa-twitter bg-black text-white p-2 rounded-full"></i>
</div>

    </div>
  );
};

export default Services;
