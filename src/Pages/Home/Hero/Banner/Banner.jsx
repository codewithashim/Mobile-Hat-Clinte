import React from "react";
import Image1 from "../../../../Assects/slid1.jpg";
import Image2 from "../../../../Assects/slid2.jpg";
import Image3 from "../../../../Assects/slider3.jpg";
import Image4 from "../../../../Assects/slider4.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="carousel w-full"
        style={{ height: "80vh", objectFit: "cover" }}
      >
        <div id="item1" className="carousel-item w-full">
          <img src={Image1} alt="Slide 1" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={Image2} alt="Slide 2" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={Image3} alt="Slide 3" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={Image4} alt="Slide 4" className="w-full" />
        </div>
        {/* <div
          className="px-5"
          style={{
            zIndex: "-99999999",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "1rem",
            borderRadius: "1rem",
            width: "50%",
            height: "50%",
          }}
        >
          <h1>
            <span className="text-3xl font-bold  text-white">
              Hey Welcome to
            </span>{" "}
            <br />
            <span className="text-3xl font-bold text-blue-500">
              Mobile Hat !!
            </span>
          </h1>
          <p className="text-white mt-4">
            Shell Your Phone And Get The Best Price <br /> Form Clinte
          </p>
        </div> */}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Banner;
