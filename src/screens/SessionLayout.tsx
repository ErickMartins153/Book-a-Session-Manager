import { Outlet } from "react-router-dom";

export default function SessionLayout() {
  return (
    <>
      <div className="p-4 rounded-lg bg-[#5b5564]">
        <Outlet />
      </div>
    </>
  );
}
