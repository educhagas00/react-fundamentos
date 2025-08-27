import React, { use, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import * as styles from './Header.module.scss'; // importando o css do Header. quando se usa css modules, o nome do arquivo deve ser nomeado

import { ThemeContext } from './ThemeContext'; 

export default function Header(props) { // desestruturação de props 

  const { onToggleTheme } = useContext(ThemeContext); 

  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
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
