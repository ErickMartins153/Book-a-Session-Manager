import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = "border-b-2";
  return (
    <header className="flex justify-between items-center">
      <NavLink to="">
        <h1 className="font-bold text-3xl pb-1">Book a Session Manager</h1>
      </NavLink>
      <div className=" flex w-1/2 items-center justify-end ">
        <div className=" flex w-1/2 justify-evenly">
          <NavLink
            to="mission"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Our Mission
          </NavLink>
          <NavLink
            to="sessions"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Browse Sessions
          </NavLink>
        </div>

        <div className="flex justify-end ">
          <button className="border-2 border-[#b88ef8] bg-[#b88ef8] hover:bg-[#a881e2] rounded-md p-1  text-[#383241] text-[18px]">
            Upcomming Sessions
          </button>
        </div>
      </div>
    </header>
  );
}
