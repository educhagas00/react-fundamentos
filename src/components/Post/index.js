import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';
import * as styles from './Post.module.scss'; 

import { Subtitle, Rate } from './styles';

export default function Post(props) {

  return (
      <article 
        className={
          props.post.removed
            ? styles.postDeleted
            : styles.post
        }
      >
        <PostHeader 
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
        />
        
        <Subtitle>{props.post.subtitle}</Subtitle>
        <Rate>Media: {props.post.likes / 2}</Rate>
      </article>
  );
}

Post.propTypes = { // atribuindo propriedade para o objeto Post
   // likes é um número obrigatório
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};