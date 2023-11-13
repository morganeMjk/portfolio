import React, { useEffect, useState, useRef } from 'react';

export default function Introduction() {

  const finalTitle = "Présentation";
  const [title, setTitle] = useState("");
  const titleRef = useRef(null);
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
    <article className="main__articles introduction" id='introduction'>
      <h3 ref={titleRef} className='main__articles__title'>
        {title}
        <span className={title.length === finalTitle.length ? "cursor active" : "cursor"}>|</span>
      </h3>
      <p className={`main__articles__content introduction__content ${showContent ? 'show' : ''}`}>Bonjour ! Je m'appelle Morgane Majchrzak, je suis développeuse Web & Mobile. Après plusieurs années à travailler en tant que professionnelle des Ressources Humaines, j'ai fait le choix de me reconvertir dans le domaine du web. Ce sont mes expériences professionnelles et personnelles qui m'ont amenées vers cette voie. "Tu es de nature facilitatrice", c'est ce qu'une de mes responsables hiérarchiques a inscrit dans mon rapport d'entretien professionnel en début de carrière. <em>Facilitatrice ?</em> J'aime mettre mon temps à disposition des personnes qui m'entourent pour leur en faire gagner. La mise en place d'outils ergonomiques et simples d'utilisation n'a jamais été une perte de temps, même si parfois elle relève du casse-tête ! ... mais après tout, c'est ce qu'on aime le plus dans la programmation, non ?</p>
    </article>
  )
}
