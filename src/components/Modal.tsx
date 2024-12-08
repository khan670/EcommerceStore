import React, { useEffect, useState } from "react";


interface IProps {
  isOpen?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  const handleOverlayClick = () => {
    handleClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!showModal) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 outline-none overflow-x-hidden overflow-y-auto focus:outline-none bg-neutral-800/70 flex justify-center items-center text-white overflow-auto"
      onClick={handleOverlayClick}
    >
      <div
        className="w-full lg:w-3/5 max-h-screen "
        onClick={handleContentClick}
      >
        <div className="w-4/5 md:w-4/5 mx-auto bg-white text-black rounded-lg py-4 px-4 relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
