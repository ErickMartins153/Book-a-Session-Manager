import { motion } from "framer-motion";
import { type Mission } from "../../dummy_mission";

type MissionProps = {
  reversed?: boolean;
} & Mission;

export default function MissionItem({
  img,
  summary,
  title,
  reversed = false,
}: MissionProps) {
  const imageStyle =
    "my-2 w-48 h-48 overflow-hidden rounded-full justify-center items-center shadow-xl border-4";
  return (
    <motion.li
      className="mt-4 mb-2 flex bg-[#494258] px-3 rounded-md items-center"
      initial={{ opacity: 0, x: reversed ? 60 : -60 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, stiffness: 200 },
      }}
    >
      {!reversed && (
        <div className={imageStyle}>
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col mx-4">
        <h3 className=" mb-2 font-semibold text-2xl">{title}</h3>
        <p className="leading-8 text-white">{summary}</p>
      </div>
      {reversed && (
        <div className={imageStyle}>
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </motion.li>
  );
}
