import React, { useEffect, useRef, useState } from 'react';
import Data from './../../../Data/Projects';
import SkillsData from './../../../Data/Skills';
import Modal from './Projects/Modal';
import Carousel from './Projects/Carousel';
import Cards from './Projects/Cards';

export default function Projects() {
  const finalTitle = "Mes projets";
  const [title, setTitle] = useState("");
  const titleRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  const [screenResolution, setScreenResolution] = useState({ width: window.innerWidth });
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const animateTitle = (index) => {
    if (index <= finalTitle.length) {
      setTitle(finalTitle.slice(0, index));
      setTimeout(() => {
        animateTitle(index + 1);
      }, 200);
    }
  };

  useEffect(() => {
    const options = {
      threshold: 0.5, // Définissez le seuil pour déclencher l'animation lorsque l'article est à moitié visible.
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!showContent) {
            // Démarrez l'animation du titre lorsque l'article devient visible.
            animateTitle(1);
          }
          setShowContent(true);
        }
      });
    }, options);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Nettoyez l'observateur lorsque le composant est démonté.
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, [showContent]);

  useEffect(() => {
    function handleResize() {
      setScreenResolution({ width: window.innerWidth });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <article className='main__articles projects' id='projects'>
      <h3 ref={titleRef} className='main__articles__title'>
        {title}
        <span className={title.length === finalTitle.length ? "cursor active" : "cursor"}>|</span>
      </h3>

      {screenResolution.width >= 1280 ?
        <Carousel Data={Data} selectedProject={selectedProject} setShowModal={setShowModal} setSelectedProject={setSelectedProject} />
        :
        <Cards Data={Data} showContent={showContent} selectedProject={selectedProject} setSelectedProject={setSelectedProject} setShowModal={setShowModal} />
      }

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className='modal'>
          <i className="fa-solid fa-square-xmark close-button" onClick={() => setShowModal(false)}></i>
          <div className='modal__content'>
            <h4 className='modal__content__title'>- {selectedProject.title} -</h4>
            <p className='modal__content__date'>{selectedProject.date}</p>
            <div className='modal__content__skills'>
              {selectedProject.skillsId && SkillsData.map(skill => (
                selectedProject.skillsId.includes(skill.id) && (
                  <i key={skill.id} className={`${skill.logo} modal__content__skills__icon `}>
                    <p className='modal__content__skills__title'>{skill.title}</p>
                  </i>
                )
              ))}
            </div>
            <div className='modal__content__detail'>
              {selectedProject.content && selectedProject.content.map((contentItem, index) => (
                <p key={index} >{contentItem}</p>
              ))}
            </div>
            <a className='modal__content__link' href={selectedProject.link}>{selectedProject.visit}</a>
          </div>
        </div>
      </Modal>
    </article>
  );
}