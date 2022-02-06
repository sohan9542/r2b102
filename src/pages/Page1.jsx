import React, { useState } from "react";
import logo from "../images/Main Dashboard/logo.png";
import head1 from "../images/Main Dashboard/HEADS 2.png";
import head2 from "../images/Main Dashboard/HEADS 1.png";
import { Link, NavLink } from "react-router-dom";
import doubs from "../images/Main Dashboard/DOUBS.png";
import pirates from "../images/Main Dashboard/PIRATES.png";
import vdoubs from "../images/Main Dashboard/VEDOUBS.png";
import rumrut from "../images/Main Dashboard/RUM RATIONS.png";
import compass from "../images/Main Dashboard/COMPASS.png";
import inventory from "../images/Main Dashboard/INVENTORY.png";
import gamestats from "../images/Main Dashboard/GAME STATS.png";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Pirates from "./Pirates";
import Inventory1 from "./Inventory";
import Rewards from "./Rewards";
import Store from "./Store";

const Page1 = () => {
  const history = useHistory();
  const [showpage, setShowpage] = useState(null);
  const goToHome = () => {
    history.push("/");
  };
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        {showpage === 1 &&   <Pirates showModal={setModalShow}/>}
        {showpage === 2 &&   <Inventory1 showpage={showpage}  showModal={setModalShow}/>}
        {showpage === 3 &&   <Rewards showModal={setModalShow}/>}
        {showpage === 4 &&   <Store showModal={setModalShow}/>}
        
      </Modal>
    );
  }
 
  return (
    <div className="background min-h-screen w-full">
      <MyVerticallyCenteredModal
        show={modalShow}
        fullscreen={true}
        onHide={() => setModalShow(false)}
      />
      <div className=" min-h-screen w-full container pt-3">
        <div className=" w-full box-white sw h-36 lg:h-20 pd rounded-md">
          <div className="w-full flex items-center h-full justify-center flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-center ">
              <img
                onClick={goToHome}
                className="logo cursor-pointer"
                src={logo}
                alt=""
              />
              <img className="head1" src={head1} alt="" />
            </div>
            <div
              style={{ marginTop: "-16px" }}
              className="flex items-center pl-0 lg:pl-24 justify-center w-full"
            >
              <div className=" grid items-center uppercase gap-1 lg:gap-3 grid-cols-4">
                <div
                  onClick={() => {
                    setModalShow(true)
                    setShowpage(1)
                  }}
                  className="  bg-pr pd cursor-pointer text-center sw text-gray-700 text-xs lg:text-base px-2 py-2  pd hover:bg-purp hover:text-white  rounded-md"
                >
                  pirates
                </div>
                <div
                  onClick={() => {
                    setModalShow(true)
                    setShowpage(2)
                  }}
                  className=" bg-pr cursor-pointer pd text-center sw text-gray-700 text-xs lg:text-base  px-2 py-2  pd hover:bg-purp hover:text-white  rounded-md"
                >
                  inventory
                </div>
                <div
                  onClick={() => {
                    setModalShow(true)
                    setShowpage(3)
                  }}
                  className=" bg-pr pd cursor-pointer text-center sw text-gray-700 text-xs lg:text-base  px-2 py-2  pd hover:bg-purp hover:text-white  rounded-md"
                >
                  rewards
                </div>
                <div
                  onClick={() => {
                    setModalShow(true)
                    setShowpage(4)
                  }}
                  className=" bg-pr cursor-pointer pd text-center sw text-gray-700 text-xs lg:text-base  px-2 py-2  pd hover:bg-purp hover:text-white  rounded-md"
                >
                  store
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-end">
          <div className="flex items-center uppercase gap-2">
            <div className=" cursor-pointer text-center text-sm lg:text-base  py-2 ">
              connect
            </div>
            <div className=" cursor-pointer text-center text-sm lg:text-base   py-2  ">
              wallet
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 mt-3">
          <div className=" flex items-center relative pl-0 lg:pl-16">
            <img
              className="absolute"
              style={{
                width: "40%",
                height: "50px",
                objectFit: "cover",
                top: "-27px",
                left: "-50px",
              }}
              src={doubs}
              alt=""
            />
            <div className=" w-full sw pd uppercase box-white rounded-md py-2">
              <div className="grid grid-cols-4 divide-x divide-purp">
                <div className="flex flex-col gap-1  items-center justify-center">
                  <h1 className="text-lg text-gray-600">wallet</h1>
                  <h1 className="text-lg text-font font-bold">15027</h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">earned</h1>
                  <h1 className="text-lg text-font font-bold">1143</h1>
                </div>
                <div className="flex flex-col gap-1  items-center justify-center">
                  <h1 className="text-lg text-gray-600">apr%</h1>
                  <h1 className="text-lg text-font font-bold">119%</h1>
                </div>
                <div className="flex flex-col gap-1  items-center justify-center">
                  <h1 className="text-lg text-gray-600">locked</h1>
                  <h1 className="text-lg text-font font-bold">124536</h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center relative pl-0 lg:pl-16">
            <img
              className="absolute"
              style={{
                width: "40%",
                height: "50px",
                objectFit: "cover",
                top: "-32px",
                left: "-50px",
              }}
              src={pirates}
              alt=""
            />
            <div className=" w-full sw  bd uppercase box-white rounded-md py-2">
              <div className="grid grid-cols-4 divide-x divide-red-500">
                <div className="flex flex-col gap-1  items-center justify-center">
                  <h1 className="text-lg text-gray-600">wallet</h1>
                  <h1 className="text-lg text-font font-bold">15027</h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">staked</h1>
                  <h1 className="text-lg text-font font-bold">1143</h1>
                </div>
                <div className="flex flex-col gap-1  items-center justify-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 mt-14">
          <div className=" flex items-center relative pl-0 lg:pl-16">
            <img
              className="absolute"
              style={{
                width: "40%",
                height: "50px",
                objectFit: "cover",
                top: "-32px",
                left: "-42px",
              }}
              src={vdoubs}
              alt=""
            />
            <div className=" w-full  pd  sw uppercase box-white rounded-md py-2">
              <div className="grid grid-cols-3 divide-x divide-purp">
                <div className="flex flex-col gap-1  items-center justify-center">
                  <h1 className="text-lg text-gray-600">wallet</h1>
                  <h1 className="text-lg text-font font-bold">15027</h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">unlock date</h1>
                  <h1 className="text-lg text-font font-bold">22/12/24</h1>
                </div>
                <div className="flex flex-col gap-1  items-center justify-center"></div>
              </div>
            </div>
          </div>
          <div className=" flex items-center relative pl-0 lg:pl-16">
            <img
              className="absolute"
              style={{
                width: "40%",
                height: "50px",
                objectFit: "cover",
                top: "-32px",
                left: "-15px",
              }}
              src={rumrut}
              alt=""
            />
            <div className=" w-full  bd sw uppercase box-white rounded-md py-2">
              <div className="grid grid-cols-4 divide-x divide-red-500">
                <div className="flex flex-col gap-1  items-center justify-center">
                  <h1 className="text-lg text-gray-600">wallet</h1>
                  <h1 className="text-lg text-font font-bold">15027</h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">staked</h1>
                  <h1 className="text-lg text-font font-bold">1143</h1>
                </div>
                <div className="flex flex-col gap-1  items-center justify-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 mt-14">
          <div className=" flex items-center relative pl-0 lg:pl-16">
            <img
              className="absolute"
              style={{
                width: "40%",
                height: "50px",
                objectFit: "cover",
                top: "-32px",
                left: "-42px",
              }}
              src={compass}
              alt=""
            />
            <div className=" w-full sw  pd uppercase box-white rounded-md py-2">
              <div className="grid grid-cols-4 divide-x divide-purp">
                <div className="flex flex-col gap-1  items-center justify-center">
                  <h1 className="text-lg text-gray-600">wallet</h1>
                  <h1 className="text-lg text-font font-bold">15027</h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">earned</h1>
                  <h1 className="text-lg text-font font-bold">1123</h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">apr%</h1>
                  <h1 className="text-lg text-font font-bold">119%</h1>
                </div>
                <div className="flex flex-col gap-1  items-center justify-center"></div>
              </div>
            </div>
          </div>
          <div className=" flex items-center relative pl-0 lg:pl-16">
            <img
              className="absolute"
              style={{
                width: "40%",
                height: "50px",
                objectFit: "cover",
                top: "-32px",
                left: "-43px",
              }}
              src={inventory}
              alt=""
            />
            <div className=" w-full sw bd uppercase box-white rounded-md py-2">
              <div className="grid grid-cols-4 divide-x divide-red-500">
                <div className="flex flex-col gap-1  items-center justify-center">
                  <h1 className="text-lg text-gray-600">gems</h1>
                  <h1 className="text-lg text-font font-bold">15027</h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">gold</h1>
                  <h1 className="text-lg text-font font-bold">1143</h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">steel</h1>
                  <h1 className="text-lg text-font font-bold">119%</h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">items</h1>
                  <h1 className="text-lg text-font font-bold">123453</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-5 mt-14">
          <div className=" flex items-center relative pl-0 lg:pl-16">
            <img
              className="absolute gameStates"
              style={{
                width: "40%",
                height: "90px",
                objectFit: "contain",
                top: "-48px",
              }}
              src={gamestats}
              alt=""
            />
            <div className=" w-full sw rd uppercase box-white rounded-2xl py-2">
              <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-blue-500">
                <div className="flex flex-col gap-1  items-center justify-center">
                  <h1 className="text-lg text-gray-600">pirates minted</h1>
                  <h1 className="text-lg text-font font-bold">15027</h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">$pirates staked</h1>
                  <h1 className="text-lg text-font font-bold">15027</h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">$doubs price</h1>
                  <h1 className="text-lg text-blue-700 font-bold  rd rounded-full px-4 py-0">
                    $4.32
                  </h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">doubs CIRCULATING</h1>
                  <h1 className="text-lg text-font font-bold">15027</h1>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h1 className="text-lg text-gray-600">$doubs locked</h1>
                  <h1 className="text-lg text-font font-bold">15027</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full page1Bottom h-40 lg:h-24 rounded-md">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
            <div className="flex items-center ">
              <img className="head2" src={head2} alt="" />
            </div>
            <div className="flex items-center justify-center w-full">
              <div className=" grid items-center divide-x-2 divide-gray-600 uppercase gap-3 grid-cols-4">
                <Link
                  to="/pirates"
                  className="  text-gray-700 w-full text-center text-sm lg:text-base py-2  "
                >
                  docs
                </Link>
                <Link
                  to="/inventory"
                  className=" text-gray-700 w-full pl-4 text-center text-sm lg:text-base  py-2"
                >
                  medium
                </Link>
                <Link
                  to="/rewards"
                  className=" text-gray-700 pl-4  text-center text-sm lg:text-base  py-2  "
                >
                  discord
                </Link>
                <Link
                  to="/store"
                  className=" text-gray-700  pl-4 text-center text-sm lg:text-base   py-2 "
                >
                  website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
