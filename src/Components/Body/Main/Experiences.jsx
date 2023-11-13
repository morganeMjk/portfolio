
import React, { useEffect, useState, useRef } from 'react';
import Data from '../../../Data/Experiences';


export default function Experiences() {
  const finalTitle = "Mon parcours";
  const [title, setTitle] = useState("");
  const titleRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

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
      threshold: 1, // Définissez le seuil pour déclencher l'animation lorsque l'article est à moitié visible.
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

  const sortedData = Data.sort((a, b) => b.id - a.id);

  return (
    <article className='main__articles experiences' id='experiences'>

      <h3 ref={titleRef} className='main__articles__title'>
        {title}
        <span className={title.length === finalTitle.length ? "cursor active" : "cursor"}>|</span>
      </h3>

      <div className={`main__articles__content experiences__content ${showContent ? 'show' : ''}`}>
        {sortedData.map((experience) => {
          return (
            <div key={experience.title} className='experiences__content__bloc'>
              {experience.startDate ?
                <div className='experiences__content__bloc__date'>
                  <p>{experience.startDate}</p>
                  <p>{experience.endDate}</p>
                </div>
                :
                <div className='experiences__content__bloc__date'>
                  {experience.endDate}
                </div>
              }

              <div className='experiences__content__bloc__detail'>
                {experience.title}
                {experience.content && experience.content.length > 0 ? (
                  <div>
                    {experience.content.map((content, index) => (
                      <p key={index}>{content}</p>
                    ))}
                  </div>
                ) : null}
              </div>

            </div>

          );
        })}
      </div>
    </article>
  )
}