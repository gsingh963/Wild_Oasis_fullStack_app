import { useState } from "react";
import Button from "../../ui/Button";

import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        {!isOpenModal ? "Add New Cabin" : "Close Form"}
      </Button>
      {isOpenModal && <Modal />}
    </div>
  );
}

export default AddCabin;
