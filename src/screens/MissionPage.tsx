import { motion } from "framer-motion";
import MissionItem from "../components/mission/MissionItem";
import { MISSIONS } from "../dummy_mission";

export default function MissionPage() {
  return (
    <div className="my-8 flex flex-col flex-1 px-44">
      <div className="flex flex-col flex-1">
        <h2>Our Mission: Your Success</h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { staggerChildren: 1.2, duration: 1 },
          }}
        >
          {MISSIONS.map((mission, index) => (
            <MissionItem {...mission} reversed={index % 2 !== 0} />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
