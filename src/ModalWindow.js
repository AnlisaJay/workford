import React, { useState, useEffect } from "react";
import './ModalWindow.css'; 

const ModalWindow = ({ show, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      const timer = setTimeout(() => {
        onClose();
      }, 800); // Задержка перед закрытием модального окна
      return () => clearTimeout(timer);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, onClose]);

  // Обработчик клика по тёмному фону
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal-backdrop ${show ? 'show' : ''}`} onClick={handleBackdropClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-button" aria-label="Close modal">X</button>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
