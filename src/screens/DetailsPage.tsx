import { useParams } from "react-router-dom";
import { useSessionsSelector } from "../store/hooks";
import { formatDate } from "../util/formatter";
import { type ReactNode, useState } from "react";
import Modal from "../components/Modal";
import Form from "../components/Form";
import Input from "../components/Input";

type Params = {
  id: string;
};

export default function DetailsPage() {
  const [isOpen, setIsOpen] = useState(false);
  let modal: ReactNode;
  const { id } = useParams<Params>();
  const sessionDetails = useSessionsSelector((state) =>
    state.upcommingSessions.sessions.find((session) => session.id === id)
  );

  if (!sessionDetails) {
    return;
  }

  function toggleModalHandler() {
    setIsOpen((prevState) => !prevState);
  }

  if (isOpen) {
    modal = (
      <Modal isOpen title="Book Session" onClose={toggleModalHandler}>
        <Form>
          <Input label="name" />
          <Input label="E-mail" />
        </Form>
      </Modal>
    );
  }
  const formattedDate = formatDate(sessionDetails.date);
  return (
    <div className="flex flex-1 flex-col px-8">
      {modal}
      <div className="flex">
        <div className="flex w-1/3 max-h-52 my-6 rounded-xl overflow-hidden shadow-xl">
          <img src={sessionDetails.image} alt={sessionDetails.summary} />
        </div>
        <div className="mx-6 my-8 flex flex-col justify-between">
          <div className="flex flex-col">
            <h2 className="text-3xl mb-4 font-bold text-white">
              {sessionDetails.title}
            </h2>
            <p>{formattedDate}</p>
            <p className="pt-6">
              Total duration: {sessionDetails.duration} Hour(s)
            </p>
          </div>
          <button
            className="text-[#cacaca] font-semibold"
            onClick={toggleModalHandler}
          >
            Book Session
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-1  rounded-xl p-6 bg-[#383241] shadow-lg mb-8">
          <p className=" whitespace-pre-line text-white">
            {sessionDetails.description}
          </p>
        </div>
      </div>
    </div>
  );
}
