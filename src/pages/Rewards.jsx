import React, { useState } from "react";
import inventory from "../images/Rewards Menu/REWARDS.png";
import close from "../images/Rewards Menu/CLOSE X.png";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import gamestats from "../images/Rewards Menu/CLAIM.png";
import lock from "../images/Rewards Menu/LOCK.png";
import gov from "../images/Rewards Menu/GOVERNANCE.png";
import head2 from "../images/Main Dashboard/HEADS 1.png";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="w-full pd">
          <div className="w-full flex items-center justify-end">
            <img
              onClick={props.onHide}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
              }}
              className="cursor-pointer"
              src={close}
              alt=""
            />
          </div>
          <div className="px-3 pb-3">
            <h4 className="text-2xl font-light uppercase pb-3">
              do you wish to open your gem pouch?{" "}
            </h4>
            <h4 className="text-2xl font-light uppercase pb-1">
              this will cost 250 $doubs
            </h4>
            <h4 className="text-2xl font-light uppercase pb-3">
              you will receive up to 5 gems. you can only hold 10 gems max. at
              any time
            </h4>
          </div>
          <div className="px-3 pb-5 flex items-center justify-around w-full">
            <button className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-xl px-5 py-2 hover:bg-purp hover:text-white  rounded-md">
              Yes
            </button>
            <button className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-xl px-5 py-2 hover:bg-purp hover:text-white  rounded-md">
              no
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
const Rewards = ({showModal}) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="w-full  ">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className=" min-h-screen lg:p-8 flex items-center justify-center">
        <div className="  r-background pd w-full h-full ">
          <div className="reward-bg lg:px-4">
            <div className="grid grid-cols-2  gap-1">
              <div>
                <img
                 
                  
                  className="h-28 reward-logo"
                  src={inventory}
                  alt=""
                />
              </div>

              <div className="w-full flex items-center justify-end">
              
                  <img
                  onClick={()=>showModal(false)}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    className="cursor-pointer"
                    src={close}
                    alt=""
                  />
               
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-1 items-center">
                <div className="uppercase flex items-center justify-end">
                  <h4 className=" text-base pr-2 font-light">
                    stake your pirate nfts to earn $doubs. lock your $doubs to
                    earn $compass rewards
                  </h4>
                </div>
                <div className=" flex items-center pt-4 lg:pt-0 relative pl-0 lg:pl-16">
                  <img
                    className="absolute reward_1"
                  
                    src={gamestats}
                    alt=""
                  />

                  <div className=" w-full sw pd uppercase box-white rounded-2xl py-4">
                    <div className="grid grid-cols-2 items-center lg:grid-cols-5  divide-x divide-purp">
                      <div className="flex flex-col gap-1  items-center justify-center">
                        <h1 className="text-lg text-gray-600">$doubs</h1>
                        <h1 className="text-lg text-font font-bold">310</h1>
                        <button className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-lg px-3 py-1 hover:bg-purp pd hover:text-white  rounded-md">
                          claim
                        </button>
                      </div>
                      <div className="flex flex-col gap-1 items-center justify-center h-100">
                        <h1 className="text-lg text-gray-600">$doubs apr</h1>
                        <h1 className="text-lg text-font font-bold">19%</h1>
                      </div>
                      <div className="flex flex-col gap-1 items-center justify-center h-100">
                        <h1 className="text-lg text-gray-600">$compass</h1>
                        <h1 className="text-lg text-font font-bold">310</h1>
                        <button className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-lg px-3 py-1 hover:bg-purp pd hover:text-white  rounded-md">
                          claim
                        </button>
                      </div>
                      <div className="flex flex-col gap-1 items-center justify-center h-100">
                        <h1 className="text-lg text-gray-600">$compass apr</h1>
                        <h1 className="text-lg text-font font-bold">19%</h1>
                      </div>
                      <div className="flex flex-col gap-1 items-center justify-center h-100">
                        <h1 className="text-lg text-gray-600">$doubs price</h1>
                        <h1 className="text-lg text-font font-bold">$34.10</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uppercase flex items-center justify-end mt-5">
                  <h4 className="text-base pr-2 font-light">
                    lock your $doubs to receive{" "}
                    <span className=" lowercase">$ve</span>Doubs and claim
                    additional rewards in $compass & $weth
                  </h4>
                </div>
                <div className=" flex items-center pt-4 lg:pt-0 relative pl-0 lg:pl-16">
                  <img
                    className="absolute reward_2"
                    
                    src={lock}
                    alt=""
                  />

                  <div className=" w-full sw pd uppercase box-white rounded-2xl py-4">
                    <div className="grid grid-cols-2 items-start lg:grid-cols-4  divide-x divide-purp h-full">
                      <div className="flex flex-col gap-1  items-center justify-center">
                        <h1 className="text-lg text-gray-600">locked $doubs</h1>
                        <h1 className="text-lg text-font font-bold">310</h1>
                        <button className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-lg px-3 py-1 hover:bg-purp pd hover:text-white  rounded-md">
                          lock
                        </button>
                      </div>
                      <div className="flex flex-col gap-1 items-center justify-center">
                        <h1 className="text-lg text-gray-600">locked until</h1>
                        <h1 className="text-lg text-font font-bold">
                          22/11/23
                        </h1>
                        <button className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-lg px-3 py-1 hover:bg-purp pd hover:text-white  rounded-md">
                          extend
                        </button>
                      </div>
                      <div className="flex flex-col gap-1 items-center justify-center">
                        <h1 className="text-lg text-gray-600 uppercase">
                          <span className="lowercase">$ve</span>DOUBS HELD
                        </h1>
                        <h1 className="text-lg text-font font-bold">310</h1>
                        <button className="bg-pr pd uppercase cursor-pointer sw text-center text-xs lg:text-lg px-3 py-1 hover:bg-purp pd hover:text-white  rounded-md">
                          withdraw
                        </button>
                      </div>
                      <div className="flex h-100 flex-col gap-1 items-center justify-center">
                        <h1 className="text-lg text-gray-600">
                          circ. supply locked
                        </h1>
                        <h1 className="text-lg text-font font-bold">69%</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uppercase flex items-center justify-end mt-5">
                  <h4 className="text-base pr-2 font-light">
                    secondary royalties, $doubs reflection & $compass bonuses
                    for voting
                  </h4>
                </div>
                <div className=" flex items-center pt-4 lg:pt-0 relative pl-0 lg:pl-16">
                  <img
                    className="absolute reward_3"
                   
                    src={gov}
                    alt=""
                  />

                  <div className=" w-full sw pd uppercase box-white rounded-2xl py-4">
                    <div className="grid grid-cols-2 items-start lg:grid-cols-3  divide-x divide-purp">
                      <div className="flex flex-col gap-1  items-center justify-center">
                        <h1 className="text-lg text-gray-600">
                          $weth royalties
                        </h1>
                        <h1 className="text-lg text-font font-bold">0.08</h1>
                        <button className="bg-pr pd uppercase cursor-pointer sw text-center pd text-xs lg:text-lg px-3 py-1 hover:bg-purp hover:text-white  rounded-md">
                          claim
                        </button>
                      </div>
                      <div className="flex flex-col gap-1 items-center justify-center">
                        <h1 className="text-lg text-gray-600">
                          $doubs reflections
                        </h1>
                        <h1 className="text-lg text-font font-bold">1758654</h1>
                        <button className="bg-pr pd uppercase cursor-pointer sw pd text-center text-xs lg:text-lg px-3 py-1 hover:bg-purp hover:text-white  rounded-md">
                          claim
                        </button>
                      </div>
                      <div className="flex flex-col gap-1 items-center justify-center">
                        <h1 className="text-lg text-gray-600 uppercase">
                          $compass bonus
                        </h1>
                        <h1 className="text-lg text-font font-bold">1758654</h1>
                        <button className="bg-pr pd uppercase cursor-pointer pd sw text-center text-xs lg:text-lg px-3 py-1 hover:bg-purp hover:text-white  rounded-md">
                          claim
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ paddingTop: "25px" }}
                  className=" w-full h-40 lg:h-24 rounded-md"
                >
                  <div className="w-full flex items-center justify-end">
                    <div className="flex items-center ">
                      <img className="head2"  src={head2} alt="" />
                    </div>
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

export default Rewards;
