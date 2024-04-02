import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import UpcommingItem from "./UpcommingItem";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = "border-b-2";
  let modal: ReactNode;

  function toggleModalHandler() {
    setIsOpen((prevState) => !prevState);
  }

  if (isOpen) {
    modal = (
      <Modal
        isOpen={isOpen}
        onClose={toggleModalHandler}
        title="Upcomming Sessions"
      >
        <UpcommingItem
          title="Test"
          date="04-02-2024"
          summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
        />
      </Modal>
    );
  }

  return (
    <header className="flex justify-between items-center">
      {modal}
      <NavLink to="sessions" end>
        <h1 className="font-bold text-4xl pb-1">Book a Session Manager</h1>
      </NavLink>
      <div className=" flex w-1/2 items-center justify-end ">
        <div className=" flex w-1/2 justify-evenly">
          <NavLink
            to="mission"
            className={({ isActive }) => (isActive ? activeStyle : "")}
            end
          >
            Our Mission
          </NavLink>
          <NavLink
            to="sessions"
            className={({ isActive }) => (isActive ? activeStyle : "")}
            end
          >
            Browse Sessions
          </NavLink>
        </div>

        <div className="flex justify-end ">
          <button onClick={toggleModalHandler}>Upcomming Sessions</button>
        </div>
      </div>
    </header>
  );
}
