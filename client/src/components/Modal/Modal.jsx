import style from "./Modal.module.css"

const Modal = ({isOpen, onRequestClose, children}) =>{

    //Aqui verificamos el estado de si el modal deve mostrarse o no.
    if(!isOpen){
        return null;
    }

    //Si isOpen es true devolvemos lo que se debe mostrar en el modal. 
    return (
        <div className={style.modalOverlay} onClick={onRequestClose}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={style.closeButton} onClick={onRequestClose}>X</button>
                {children}
            </div>
        </div>
    )

}



export default Modal;