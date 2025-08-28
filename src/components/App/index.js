import React, { useState } from 'react';

import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext'; 

import * as styles from './App.module.scss'; 


function App() {

  // useState é um hook do React que permite adicionar estado a componentes funcionais. Ele retorna um array com duas posições: a primeira é o estado atual e a segunda é uma função para atualizar esse estado. O useState recebe um argumento que é o valor inicial do estado.
  // const [state, setState] = useState(initialState); // sintaxe do hook useState
  
  // O useState resolve esse problema ao fornecer uma forma explícita de gerenciar o estado e notificar o React quando algo muda, permitindo que ele atualize a interface de forma eficiente.
 
  const [posts, setPosts] = useState([ // colocar entre '[ ]' para se referir a primeira posição do array (propriedade js)(se n colocar, o .map nao saberia se ia ser a primeira ou segunda posição do array)
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01' , likes: 20, read: false, removed: true },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02' , likes: 10, read: true, removed: false },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03' , likes: 50, read: false, removed: false },
  ]); // [state, setState]: estado atual e função para atualizar o estado

  console.log({ posts });

  // função que irá realizar a atualização do estadocom o hook useState (setPosts) para o react fazer o re-render da interface. ele irá executar App de novo com o novo estado atualizado
  function handleRefresh() {

    // quando o estado novo depende do estado anterior, é preciso passar uma função prevState para o setState, que apenas acessa o estado anterior quando a função é executada de fato. prevState é responsável por garantir que o estado atual é realmente o estado mais atualizado (evita problemas de inconsistência de interface). Se usássemos o estado (setposts) diretamente, estaríamos acessando um estado antigo, que poderia estar desatualizado (que era o estado no momento em que clicamos) (obg vmigu).
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState, // spread operator para copiar o array posts atual (propriedade js)
        {
          id: Math.random(),
          title: `Title#0${prevState.length + 1}`, 
          subtitle: `Sub#0${prevState.length + 1}`,
          likes: 50,
        },
      ]);
    }, 2000); 
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => post.id === postId 
        ? { ...post, removed: true } // se o id do post for igual ao id do post que quero remover, retorna o post com a propriedade removed como true
        : post // se n for igual, retorna o post original
    ));
  }
  
  return (  // <>  short syntax para React.Fragment. Componente que não renderiza nada, mas serve para agrupar elementos
  <ThemeProvider> 
    <Header title="Dudu's Blog">
      <h2 className={styles.title}>
        Posts da Semana
        <button onClick={handleRefresh}>Atualizar</button>
        </h2>
    </ Header>  

    <hr />

    {/* renderizando lista */}
    {posts.map(post => (    
      <Post // para cada post, renderiza um componente Post
        key={post.id} // key é obrigatório para listas, para o React identificar cada elemento (id foi escolhido por cada id ser único)
        likes={post.likes}
        onRemove={handleRemovePost} // passando a função de remover post para o componente Post (de pai para filho)
        post={post} 
      />
    ))}
  </ThemeProvider>  
  ); // componentes irmaos precisam estar dentro de um componente pai (nesse caso, o fragment)
}

export default App;