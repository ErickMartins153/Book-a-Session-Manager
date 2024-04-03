import { useNavigate } from "react-router-dom";
import { Session } from "../../dummy_sessions";
import { formatDate } from "../../util/formatter";
import { motion } from "framer-motion";

export default function SessionItem({
  date,
  image,
  summary,
  title,
  id,
}: Session) {
  const navigate = useNavigate();
  const formattedDate = formatDate(date);

  function toDetailsPageHandler() {
    window.scrollTo(0, 0);
    navigate(id);
  }

  return (
    <motion.li
      className="session-item"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring" }}
    >
      <img src={image} alt={summary} />
      <div className="p-2 flex flex-col flex-1 justify-between">
        <div className="flex flex-1 flex-col items-start">
          <h3 className="text-xl pb-2">{title}</h3>
          <p>{summary}</p>
        </div>
        <div className="flex justify-between items-end m-2">
          <p>{formattedDate}</p>
          <div>
            <motion.button
              className="border-2 border-[#b88ef8] bg-[#b88ef8] hover:bg-[#a881e2] rounded-md px-2  text-[#383241]"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 600 }}
              onClick={toDetailsPageHandler}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
