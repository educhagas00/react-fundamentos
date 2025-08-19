import React, { use, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import { ThemeContext } from './App'; 

export default function Header(props) { // desestruturação de props 

  const { onToggleTheme } = useContext(ThemeContext); 

  return (
    <>
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {props.children} 
    </>
  );
}

// children é uma propriedade especial do React que permite renderizar o conteúdo que está dentro do componente
// children vai receber tudo que esta dentro do componente/tag Header

Header.propTypes = { 
  title: PropTypes.string, 
  children: PropTypes.node, 
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
