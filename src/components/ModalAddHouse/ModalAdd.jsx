import "./ModalAdd.css"

const ModalAddHouse = ({ modal, handleClose, children, onClick }) => {
    return (
        <>
            {modal && (
                <div className="modalll">
                    <div onClick={handleClose} className="overlay"></div>
                    <div className="modalll-content">
                        {children}
                        <button className="close-modal" onClick={() => {handleClose(); onClick();}}>
                            AÑADIR
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalAddHouse
