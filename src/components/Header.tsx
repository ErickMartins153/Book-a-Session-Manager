import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = "border-b-2";
  return (
    <header className="flex justify-between items-center">
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
          <button>Upcomming Sessions</button>
        </div>
      </div>
    </header>
  );
}
