import { Link } from "react-router-dom";
import { Session } from "../dummy_sessions";
import { formatDate } from "../util/formatter";

export default function SessionItem({
  date,
  image,
  summary,
  title,
  id,
}: Session) {
  const formattedDate = formatDate(date);

  return (
    <div className="session-item">
      <img src={image} alt={summary} />
      <div className="p-2 flex flex-col flex-1 justify-between">
        <div className="flex flex-1 flex-col items-start">
          <h3 className="text-xl pb-2">{title}</h3>
          <p>{summary}</p>
        </div>
        <div className="flex justify-between items-end m-2">
          <p>{formattedDate}</p>
          <div>
            <Link to={id}>
              <button className="border-2 border-[#b88ef8] bg-[#b88ef8] hover:bg-[#a881e2] rounded-md px-2  text-[#383241]">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
