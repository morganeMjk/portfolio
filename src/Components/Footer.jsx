import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

export default function Footer() {

  const location = useLocation();

  const [isContactRoute, setIsContactRoute] = useState(false);

  useEffect(() => {
    setIsContactRoute(location.pathname.startsWith('/contact'));
  }, [location.pathname]);



  return (
    <footer className={isContactRoute ? 'footer-fixed' : 'footer'}  >
      <p>© 2023 Morgane Majchrzak</p>
      <p>Tous droits réservés</p>
    </footer>
  )
}
