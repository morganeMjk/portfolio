import React, { useState } from 'react'

export default function Carousel(props) {

    const { Data, selectedProject, setShowModal, setSelectedProject } = props
    const [index, setIndex] = useState(0)


    const previous = () => {
        if (index === 0) {
            setIndex(Data.length - 1)


        } else {
            setIndex(index - 1)
        }
    }

    const next = () => {
        if (index === Data.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <div className='projects__content'>
                <i class="fa-solid fa-circle-arrow-left carousel-button " onClick={previous}></i>

            <div className='projects__content__card-hover'>
                <img src={require(`./../../../../Assets/Projects/${Data[index].thumbnail}`)} className='projects__content__card__image' alt="" />
                <div className='projects__content__card__overlay-hover'>
                    <p className='projects__content__card__overlay-hover__title'>- {Data[index].title} -</p>
                    <p className='overlay-hover-button' onClick={() => { setShowModal(true); setSelectedProject(Data[index]) }}>En savoir plus</p>
                </div>
            </div>

            <i class="fa-solid fa-circle-arrow-right carousel-button " onClick={next}></i>
        </div>
    )
}
