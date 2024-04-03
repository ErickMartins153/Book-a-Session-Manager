import { ReactNode, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import UpcommingItem from "./UpcommingItem";
import { useSessionsSelector } from "../store/hooks";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const upcommingSessions = useSessionsSelector(
    (state) => state.upcommingSessions.savedSessions
  );

  const activeStyle = "border-b-2";
  let modal: ReactNode;

  function toggleModalHandler() {
    setIsOpen((prevState) => !prevState);
  }

  function visitPageHandler(id: string) {
    navigate(`/sessions/${id}`);
    toggleModalHandler();
  }

  if (isOpen) {
    modal = (
      <Modal
        isOpen={isOpen}
        onClose={toggleModalHandler}
        title="Upcomming Sessions"
        mode="UPCOMMING"
      >
        {upcommingSessions.length <= 0 && (
          <p className="text-white text-lg font-light">
            You have no booked session at the moment
          </p>
        )}
        {upcommingSessions.map((session) => (
          <UpcommingItem
            title={session.title}
            date={session.date}
            summary={session.summary}
            id={session.id}
            key={session.id}
            onClick={visitPageHandler}
          />
        ))}
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
