import React, { useState, Fragment } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.css';

const Componente1 = () => <div>Texto del Componente 1</div>;
const Componente2 = () => <div>Texto del Componente 2</div>;

const componentes = [Componente1, Componente2];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const toggleSlide = () => {
    if (currentIndex === 0) {
      setDirection('next');
      setCurrentIndex(1);
    } else {
      setDirection('prev');
      setCurrentIndex(0);
    }
  };

  const ComponenteActual = componentes[currentIndex];

  return (<Fragment>
    <div className={`slider-container ${direction}`}>
      <TransitionGroup className="transition-group">
        <CSSTransition key={currentIndex} timeout={500} classNames="slide">
          <div className="slide-content">
            <ComponenteActual />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
    <button onClick={toggleSlide}>Cambiar Componente</button>
  </Fragment>
  );
};

export default Slider;