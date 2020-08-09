import React from "react"
import ReactModal from "react-modal"

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    padding: "0"
  }
}

function Modal(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <button onClick={openModal} className="modal-button">
        Open Modal
      </button>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <button onClick={closeModal}>close</button>
        {props.children}
      </ReactModal>
    </>
  )
}

export default Modal
