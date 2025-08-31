import React, { use, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import { ThemeContext } from '../../context/ThemeContext'; 
import Title from '../Title';

export default function Header(props) { // desestruturação de props 

  const { onToggleTheme } = useContext(ThemeContext); 

  return (
    <>
      <Title>{props.title}</Title>
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
