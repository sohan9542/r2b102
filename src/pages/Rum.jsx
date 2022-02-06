import React, { useState } from "react";
import inventory from "../images/Main Dashboard/INVENTORY.png";
import dummy from "../images/Main Dashboard/rum.png";
import head1 from "../images/Main Dashboard/HEADS 1.png";
import close from "../images/Rewards Menu/CLOSE X.png";
import { Link, NavLink } from "react-router-dom";
const Rum = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selecteItem, setSelecteItem] = useState([1]);
  const saveActivitem = (item) => {
    const newarr = [item, ...selecteItem];
    setSelecteItem(newarr)
  };
  const removeSelect = (item) => {
    const newarr = selecteItem.filter((i) => i !== item);
    setSelecteItem(newarr)

  };
  
  return (
    <div className="w-full  ">
      <div className=" min-h-screen container p-8 flex items-center justify-center">
        <div className="  p-background pd w-full h-full rounded-3xl">
          <div className="rum-bg rounded-3xl lg:px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
              <div>
                <img src={inventory} alt="" />
              </div>
              <div className="hidden lg:block"></div>
              <div className="hidden lg:block"></div>
              <div className="w-full flex items-center justify-end">
                <Link to="/">
                  <img
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    className="cursor-pointer"
                    src={close}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="py-16 grid grid-cols-1 gap-3 lg:gap-0 md:grid-cols-2 items-center lg:grid-cols-5">
              <div className="px-3 lg:px-5 flex  flex-col uppercase">
                <NavLink
                  to="/inventory"
                  activeClassName="blk"
                  className="text-2xl text-gray-800"
                >
                  Gems
                </NavLink>
                <NavLink
                  to="/rum"
                  activeClassName="blk"
                  className="text-2xl text-gray-800"
                >
                  rum
                </NavLink>
                <NavLink
                  to="/items"
                  activeClassName="blk"
                  className="text-2xl text-gray-800"
                >
                  items
                </NavLink>
                <NavLink
                  to="/gem-pouches"
                  activeClassName="blk"
                  className="text-2xl text-gray-800"
                >
                  gem pouches
                </NavLink>
              </div>
              <div className=" lg:col-span-3 grid  grid-cols-5 gap-x-4 gap-y-2">
                {arr.map((item) => (
                  <div
                    className={
                      selecteItem.find((i) => i === item)
                        ? "p-3 rounded-xl bg-gray-300 "
                        : "p-3"
                    }
                  >
                    <img
                      className={
                        selecteItem.find((i) => i === item)
                          ? " cursor-pointer"
                          : " cursor-pointer sw"
                      }
                      onClick={
                        selecteItem.find((i) => i === item)
                          ? ()=> removeSelect(item)
                          : () => saveActivitem(item)
                      }
                      key={item}
                      src={dummy}
                      style={{ height: "100%", width: "100%" }}
                      alt=""
                    />
                  </div>
                ))}
              </div>
              
              <div className="px-5  flex flex-col gap-3 ">
               
               
                  <div className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-xl px-2 py-2 hover:bg-purp hover:text-white  rounded-md">
                    stake
                  </div>
                  <div className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-xl px-2 py-2 hover:bg-purp hover:text-white  rounded-md">
                    unstake
                  </div>
               
              </div>
            </div>
            <div className="py-2 px-3 lg:px-5">
              <h4 className=" uppercase">properties</h4>
              <div className="my-3 w-full rounded-2xl px-4  py-2 pd box-white">
                <h4 className=" uppercase font-light py-1">item : rum rations</h4>
                <h4 className=" uppercase font-light py-1">level : 5</h4>
                
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

export default Rum;
