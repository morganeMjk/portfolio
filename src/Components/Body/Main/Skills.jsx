import React, { useEffect, useState, useRef } from 'react';
import Data from './../../../Data/Skills'
import DataType from './../../../Data/SkillsTypes'

export default function Skills() {

  const [title, setTitle] = useState("");
  const titleRef = useRef(null);
  const finalTitle = `Technologies utilisées`;
  const [showContent, setShowContent] = useState(false); // État local pour contrôler l'affichage du contenu


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
  
  return (
    <article className='main__articles skills' id='skills'>

      <h3 ref={titleRef} className='main__articles__title'>
        {title}
        <span className={title.length === finalTitle.length ? "cursor active" : "cursor"}>|</span>
      </h3>

      <div className={`main__articles__content skills__content ${showContent ? 'show' : ''}`}>
        {DataType.map(skillType => (
          <div key={skillType.id}>
            <h4 className='main__articles__subtitle skills__category'>{skillType.title}</h4>
            <div className='skills__container'>
              {Data.map(skill => (
                skill.skillsTypeId.includes(skillType.id) && (
                  <div key={skill.id} className='skills__container__logo'>
                    <i className={`${skill.logo} ${skill.classname} skills__container__logo__icon`}></i>
                    <h5 key={skill.id} className='skills__container__logo__name'>{skill.title}</h5>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}