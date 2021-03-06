import React, { useState } from "react";
import inventory from "../images/Main Dashboard/INVENTORY.png";
import dummy from "../images/Main Dashboard/gems.png";
import head1 from "../images/Main Dashboard/HEADS 1.png";
import close from "../images/Rewards Menu/CLOSE X.png";
import { Link, NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Rum from "./Rum";
import Items from "./Items";
import Pouches from "./Pouches";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="w-full bg-white pd ">
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
              do you wish to burn your gem?{" "}
            </h4>
            <h4 className="text-2xl font-light uppercase pb-3">
              {" "}
              you can only hold 10 gems max. at any time{" "}
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

const Inventory1 = ({ showModal }) => {
  const history = useHistory();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [showpage, setShowpage] = useState(2);
  const [selecteItem, setSelecteItem] = useState([1]);
  const saveActivitem = (item) => {
    const newarr = [item, ...selecteItem];
    setSelecteItem(newarr);
  };
  const removeSelect = (item) => {
    const newarr = selecteItem.filter((i) => i !== item);
    setSelecteItem(newarr);
  };
  const goBack = () => {
    history.push("/");
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
    { showpage === 2 && <div className="w-full  ">
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <div className=" min-h-screen lg:p-8 flex items-center justify-center">
          <div className="  p-background pd w-full h-full ">
            <div className="inventory-bg  lg:px-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                <div>
                  <img style={{
                      width: "100%",
                      height: "95px",
                      objectFit: "cover",
                    }} src={inventory} alt="" />
                </div>
                <div className="hidden lg:block"></div>
                <div className="hidden lg:block"></div>
                <div className="w-full flex items-center justify-end">
                  <img
                    onClick={showpage ? () => showModal(false) : () => goBack()}
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
              <div className=" py-10 lg:py-24 grid grid-cols-1 gap-3 lg:gap-0 md:grid-cols-2 items-center lg:grid-cols-5">
                <div className="px-3 lg:px-5  flex  flex-col uppercase">
                  <div
                    onClick={() => {
                      setShowpage(2);
                    }}
                    className={
                      showpage === 2 ? "blk text-2xl cursor-pointer" : "text-2xl cursor-pointer text-gray-800"
                    }
                  >
                    Gems
                  </div>
                  <div
                    onClick={() => {
                      setShowpage(6);
                    }}
                    className={
                      showpage === 6 ? "blk text-2xl cursor-pointer" : "text-2xl cursor-pointer text-gray-800"
                    }
                  >
                    rum
                  </div>
                  <div
                    onClick={() => {
                      setShowpage(7);
                    }}
                    className={
                      showpage === 7 ? "blk text-2xl cursor-pointer" : "text-2xl cursor-pointer text-gray-800"
                    }
                  >
                    items
                  </div>
                  <div
                    onClick={() => {
                      setShowpage(8);
                    }}
                    className={
                      showpage === 8 ? "blk text-2xl cursor-pointer" : "text-2xl cursor-pointer text-gray-800"
                    }
                  >
                    gem pouches
                  </div>
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
                            ? () => removeSelect(item)
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

                <div className="px-5 flex flex-col items-center">
                  <div
                    onClick={() => setModalShow(true)}
                    className="bg-pr pd w-24 uppercase cursor-pointer sw text-center text-xs lg:text-xl px-2 py-2 hover:bg-purp hover:text-white  rounded-md"
                  >
                    burn
                  </div>
                </div>
              </div>
              <div className="py-2 px-3 lg:px-5">
                <h4 className=" uppercase">properties</h4>
                <div className="my-3 w-full rounded-2xl px-4  py-2 pd box-white">
                  <h4 className=" uppercase font-light py-1">
                    item : sapphire
                  </h4>
                  <h4 className=" uppercase font-light py-1">grade : clear</h4>

                  <div className="w-full flex items-center justify-end">
                    <div>
                    <img
                      className="h-32 botom_head"
                      

                      style={{ objectFit:"contain" }}
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
      </div>}
    { showpage === 6 && <Rum showModal={showModal} showpage={showpage} setShowpage={setShowpage}/>}
    { showpage === 7 && <Items showModal={showModal} showpage={showpage} setShowpage={setShowpage}/>}
    { showpage === 8 && <Pouches showModal={showModal} showpage={showpage} setShowpage={setShowpage}/>}
    </>
  );
};

export default Inventory1;
