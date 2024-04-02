import SessionsList from "../components/SessionsList";
import { SESSIONS } from "../dummy_sessions";

export default function HomePage() {
  return (
    <>
      <SessionsList sessions={SESSIONS} />
    </>
  );
}
