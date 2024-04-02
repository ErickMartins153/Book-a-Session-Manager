import { Session } from "../dummy_sessions";

export default function SessionItem({ date, image, summary, title }: Session) {
  return (
    <div className="session-item">
      <img src={image} alt={summary} />
      <div className="p-2 flex flex-col flex-1 justify-between">
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <div className="flex flex-1 justify-between items-end m-2">
          <p>{date}</p>
          <div>
            <button className="border-2 border-[#b88ef8] bg-[#b88ef8] hover:bg-[#a881e2] rounded-md px-2  text-[#383241]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
