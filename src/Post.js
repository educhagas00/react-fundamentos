import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
        <button onClick={() => props.onRemove(props.post.id)}>
          Remover
        </button>
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Media: {props.likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = { // atribuindo propriedade para o objeto Post
  likes: PropTypes.number.isRequired, // likes é um número obrigatório
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};