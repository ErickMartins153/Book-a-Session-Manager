import SessionsList from "../components/session/SessionsList";
import { SESSIONS } from "../dummy_sessions";

export default function SessionsPage() {
  return <SessionsList sessions={SESSIONS} />;
}
