"use client";

import useModalStore from "@/stores/useModalStore";
import DeleteDetailSessionModal from "./DeleteDetailSessionModal";

const ModalManager = () => {
  const { currentModal } = useModalStore();

  switch (currentModal) {
    case "deleteDetailSession":
      return <DeleteDetailSessionModal />;

    default:
      return null;
  }
};

export default ModalManager;
