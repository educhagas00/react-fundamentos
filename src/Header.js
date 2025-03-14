import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) { // desestruturação de props 
  return (
    <>
      <h1>{props.title}</h1>
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
