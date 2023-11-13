import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root')

const customStyles = {
  content: {
    width: 'fit-content',
    height: '80%',
    margin: '0 auto',
    zIndex: '999',
    borderRadius: '8px',
    padding: '15px',
    border: 'none',
    backgroundColor: 'white',
    boxShadow: '2px 2px 10px rgb(190, 190, 190)',
  },
  overlay: {
    backgroundColor: 'transparent',
    backdropFilter: 'blur(10px)',
    zIndex: '99999',
  }
};

export default function Modal(props) {
  const { showModal } = props;

  // Condition pour définir la largeur en fonction de la taille de l'écran
  if (window.innerWidth >= 769) {
    customStyles.content.width = '60%';
  } else {
    customStyles.content.width = '90%';
    customStyles.content.left = '5%';
  }

  return (
    <ReactModal isOpen={showModal} style={customStyles}>
      {props.children}
    </ReactModal>
  )
}