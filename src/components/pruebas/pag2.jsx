import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InactivityPage = () => {
  const navigate = useNavigate(); // obtenemos la función de navegación desde el hook useNavigate

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        navigate('/');
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [navigate]);

  return (
    <div>
      <p>
        Has estado inactivo por un tiempo. Presiona Enter para ir a otra página.
      </p>
    </div>
  );
};

export default InactivityPage;
