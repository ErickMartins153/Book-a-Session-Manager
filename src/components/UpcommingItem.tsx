import { useSessionsDispatch } from "../store/hooks";
import { cancelSession } from "../store/sessions-slice";
import { formatDate } from "../util/formatter";

type UpcommingItemProps = {
  title: string;
  summary: string;
  date: string;
  id: string;
  onClick: (id: string) => void;
};

export default function UpcommingItem({
  title,
  summary,
  date,
  id,
  onClick,
}: UpcommingItemProps) {
  const dispatch = useSessionsDispatch();
  const formattedDate = formatDate(date);

  function cancelHandler() {
    dispatch(cancelSession({ id: id }));
  }

  return (
    <div className="bg-[#3a3446] rounded-xl p-2 flex justify-between min-w-64 my-1 shadow-md">
      <div>
        <button
          className="noStyle whitespace-normal break-words font-bold text-xl"
          onClick={onClick.bind(null, id)}
        >
          {title}
        </button>
        <p className="whitespace-normal break-words text-white">{summary}</p>
        <p className="whitespace-normal break-words text-white font-thin mt-4">
          {formattedDate}
        </p>
      </div>
      <div className="mx-8 my-4">
        <button
          className="bg-transparent border-0 text-[#b88ef8] hover:bg-transparent hover:border-b rounded-none p-0 m-2"
          onClick={cancelHandler}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
