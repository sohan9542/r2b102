import React, { useState } from "react";
import pirates from "../images/Main Dashboard/PIRATES.png";
import dummy from "../images/Main Dashboard/dummy.png";
import head1 from "../images/Main Dashboard/HEADS 1.png";
import close from "../images/Rewards Menu/CLOSE X.png";

const Pirates = ({ showModal }) => {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [active, setactive] = useState(1);
  return (
    <div className="w-full ">
      <div className=" min-h-screen flex items-center justify-center">
        <div className="p-background  pd w-full h-full rounded-3xl">
          <div className="piratrs-bg p-2 rounded-3xl lg:px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
              <div>
                <img src={pirates} alt="" />
              </div>
              <div className="text-center hidden uppercase lg:flex items-center justify-end w-full">
                <h4 className="text-gray-700 font-light">piracy punk #145</h4>
              </div>
              <div className="text-center hidden w-full uppercase lg:flex items-center justify-end">
                <h4 className="text-gray-700 font-light">
                  $doubs: <span className=" bg-purp p-1">1454</span>
                </h4>
              </div>
              <div className="w-full flex items-center justify-end">
                <img
                  onClick={() => showModal(false)}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  className="cursor-pointer"
                  src={close}
                  alt=""
                />
              </div>
            </div>
            <div className="my-2 flex items-center ">
              <div className="text-center lg:hidden uppercase flex items-center justify-end w-full">
                <h4 className="text-gray-700 font-light">piracy punk #145</h4>
              </div>
              <div className="text-center lg:hidden w-full uppercase flex items-center justify-end">
                <h4 className="text-gray-700 font-light">
                  $doubs: <span className=" bg-purp p-1">1454</span>
                </h4>
              </div>
            </div>
            <div className="py-2 grid grid-cols-1 gap-3 lg:gap-0 md:grid-cols-2 items-center lg:grid-cols-5">
              <div className="px-5 flex  flex-col gap-3">
                <div className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-xl px-2 py-2 hover:bg-purp hover:text-white  rounded-md">
                  stake
                </div>
                <div className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-xl px-2 py-2 hover:bg-purp hover:text-white  rounded-md">
                  unstake
                </div>
              </div>
              <div className=" lg:col-span-3 grid  grid-cols-5 gap-x-4">
                {arr.map((item) => (
                  <div
                    className={
                      active === item ? "p-3 rounded-xl bg-gray-300 " : "p-3"
                    }
                  >
                    <img
                      className={
                        active === item
                          ? " cursor-pointer"
                          : " cursor-pointer sw"
                      }
                      onClick={() => setactive(item)}
                      key={item}
                      style={{ height: "100%", width: "100%" }}
                      src={dummy}
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div className="px-5 flex  flex-col gap-3">
                <div className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-xl px-2 py-2 hover:bg-purp hover:text-white  rounded-md">
                  claim
                </div>
                <div className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-xl px-2 py-2 hover:bg-purp hover:text-white  rounded-md">
                  equip
                </div>
              </div>
            </div>
            <div className="py-2 lg:px-5">
              <h4 className=" uppercase">properties</h4>
              <div className="my-3 w-full rounded-2xl px-4  py-2 pd box-white">
                <h4 className=" uppercase font-light py-1">attributes : 6</h4>
                <h4 className=" uppercase font-light py-1">sea legs: 7</h4>
                <h4 className=" uppercase font-light py-1">shanty : 9</h4>
                <h4 className=" uppercase font-light py-1">ferocity : 8</h4>
                <h4 className=" uppercase font-light py-1">plunder : 5</h4>
                <div className="w-full flex items-center justify-end">
                  <div>
                    <img
                      className="h-32"
                      style={{ marginBottom: "-17px" }}
                      src={head1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pirates;
