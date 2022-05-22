import React from "react";
import './modalforgallery.scss';
import sliderarrowL from '../../image/ArrowL.svg';
import sliderarrowR from '../../image/ArrowR.svg';


interface ModalProps {
    visible: boolean
    content: string
    onClose: () => void
    onRight: () => void
    onLeft: () => void
}

export const ModalForGallery = ({
                visible = false,
                content = '',
                onClose,
                onRight,
                onLeft,
            }: ModalProps) => {

    const onKeydown = ({key}: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                onClose()
                break
            case 'ArrowRight':
                onRight()
                break
            case 'ArrowLeft':
                onLeft()
                break
            default:
                break
        }
    }
    React.useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    if (!visible) return null

    return (
        <div className='modal no-select' onClick={onClose}>
            <div className='modal__content' onClick={event => event.stopPropagation()}>
                {/*<img className='modal__cross' src={cross} alt=""/>*/}
                <div className="arrow arrow__left" onClick={onLeft}><img className='arrow__img' src={sliderarrowL} alt=""/></div>
                <img className='img' src={content} alt=""/>
                <div className="arrow arrow__right" onClick={onRight}><img className='arrow__img' src={sliderarrowR} alt=""/></div>
            </div>
            <div></div>
        </div>
    )
}
