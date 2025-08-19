import React, { useState, createContext } from 'react';
import Post from './Post';
import Header from './Header';

export const ThemeContext = createContext(); // criando um contexto para o tema e com valor inicial 'dark'
// para usar o context, preciso pensar quem vai usar a informação. nesse caso, tanto o Header quanto o Post tem buttons, então deve-se envolver ambos com o ThemeContext.provider

function App() {

  // useState é um hook do React que permite adicionar estado a componentes funcionais. Ele retorna um array com duas posições: a primeira é o estado atual e a segunda é uma função para atualizar esse estado. O useState recebe um argumento que é o valor inicial do estado.
  // const [state, setState] = useState(initialState); // sintaxe do hook useState
  
  // O useState resolve esse problema ao fornecer uma forma explícita de gerenciar o estado e notificar o React quando algo muda, permitindo que ele atualize a interface de forma eficiente.

  const [theme, setTheme] = useState('dark');
 
  const [posts, setPosts] = useState([ // colocar entre '[ ]' para se referir a primeira posição do array (propriedade js)(se n colocar, o .map nao saberia se ia ser a primeira ou segunda posição do array)
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01' , likes: 20, read: false },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02' , likes: 10, read: true },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03' , likes: 50, read: false },
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

  function handleToggleTheme() {
    setTheme((prevState) => (
      prevState === 'dark' 
        ? 'light'
        : 'dark'
    ));
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  }
  
  return (  // <>  short syntax para React.Fragment. Componente que não renderiza nada, mas serve para agrupar elementos
  <ThemeContext.Provider 
    value = {{ 
      theme, 
      onToggleTheme: handleToggleTheme, // passando a função para o contexto 
    }}
  > 
    <Header title="Dudu's Blog">
      <h2>
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
  </ThemeContext.Provider>  
  ); // componentes irmaos precisam estar dentro de um componente pai (nesse caso, o fragment)
}

export default App;