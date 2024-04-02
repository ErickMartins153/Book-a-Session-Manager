import { type Session } from "../dummy_sessions";
import SessionItem from "./SessionItem";

type SessionsListProps = {
  sessions: Session[];
};

export default function SessionsList({ sessions }: SessionsListProps) {
  return (
    <div>
      <div className="my-4">
        <h2 className="text-2xl font-medium  mb-2">Available sessions</h2>
        <p className="font-thin">Here you can find our available sessions!</p>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-[#5b5564]">
        {sessions.map((session) => (
          <SessionItem {...session} key={session.id} />
        ))}
      </div>
    </div>
  );
}
