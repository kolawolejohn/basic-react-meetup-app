import { useState } from "react";
import Modal from "../Modal/Modal";
import Backdrop from "../Backdrop/Backdrop";

const Todo = ({ text }) => {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const deleteHandler = () => {
    setModalIsOpened(true);
  };

  const cancelHandler = () => {
    setModalIsOpened(false);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpened && <Modal onClick={cancelHandler} />}
      {modalIsOpened && <Backdrop onCancel={cancelHandler} />}
    </div>
  );
};

export default Todo;
