import SessionItem from "../components/SessionItem.tsx";
import { SESSIONS } from "../dummy_sessions.ts";

export default function HomePage() {
  return (
    <>
      <div className="my-4">
        <h2 className="text-2xl font-medium  mb-2">Available sessions</h2>
        <p className="font-thin">Here you can find our available sessions!</p>
      </div>
      <div className="grid grid-flow-col auto-cols-fr  auto-rows-fr gap-12 p-4 rounded-lg bg-[#5b5564]">
        {SESSIONS.map((session) => (
          <SessionItem {...session} key={session.id} />
        ))}
      </div>
    </>
  );
}
