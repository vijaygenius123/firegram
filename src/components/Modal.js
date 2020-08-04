import React from 'react'

const Modal = ({ selectedImg, setSelectedImg }) => {

    return (
        <div className="backdrop" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt="" />
        </div>
    )
}


export default Modal;