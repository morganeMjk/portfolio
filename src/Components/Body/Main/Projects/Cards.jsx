import React, { useState } from 'react'

export default function Cards(props) {

    const {Data, showContent, selectedProject, setSelectedProject, setShowModal} = props
    const [click, setClick] = useState(false);

    const handleClick = (id) => {
        if (selectedProject.id === id) {
            setClick(!click);
        } else {
            setSelectedProject(Data.find((project) => project.id === id));
            setClick(true);
        }
    };
    
    return (
        <div>
            <div className={`main__articles__content projects__content ${showContent ? 'show' : ''}`}>
                {Data.map((project) => (
                    <div key={project.id} className='projects__content__card' onClick={() => handleClick(project.id)}>
                        <img src={require(`./../../../../Assets/Projects/${project.thumbnail}`)} alt={`projet ${project.id} - ${project.title} - ${project.date}`} className='projects__content__card__image' />
                        {click && selectedProject.id === project.id ?
                            <div className='projects__content__card__overlay'>
                                <p className='projects__content__card__overlay__title'>- {selectedProject.title} -</p>
                                <p className='overlay-button' onClick={() => setShowModal(true)}>En savoir plus</p>
                            </div>
                            :
                            null
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
