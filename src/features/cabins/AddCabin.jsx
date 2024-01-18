import React, { useState } from "react";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CreateTable from "./CabinTable";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//     const [isOpenModal , setisOpenModal] = useState(false);
//   return (
//     <div>
//        <Button onClick={() => setisOpenModal((show) => !show)}>Add new Cabin</Button>
//        {isOpenModal &&
//         <Modal onClose={() => setisOpenModal(false)}>
//            <CreateCabinForm onCloseModel={() => setisOpenModal(false)} />
//         </Modal>}
//     </div>
//   )
// }

export default AddCabin;
