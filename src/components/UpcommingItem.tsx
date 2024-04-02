import { formatDate } from "../util/formatter";

type UpcommingItemProps = {
  title: string;
  summary: string;
  date: string;
};

export default function UpcommingItem({
  title,
  summary,
  date,
}: UpcommingItemProps) {
  const formattedDate = formatDate(date);

  return (
    <div className="bg-[#3a3446] rounded-xl p-2 flex justify-between min-w-64">
      <div>
        <h2 className="whitespace-normal break-words font-bold text-xl">
          {title}
        </h2>
        <p className="whitespace-normal break-words text-white">{summary}</p>
        <p className="whitespace-normal break-words text-white font-thin mt-4">
          {formattedDate}
        </p>
      </div>
      <div className="mx-8 my-4">
        <button className="bg-transparent border-0 text-[#b88ef8] hover:bg-transparent hover:border-b rounded-none p-0 m-2">
          Cancel
        </button>
      </div>
    </div>
  );
}
