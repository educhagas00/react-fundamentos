import React from 'react';
import Post from './Post';
import Header from './Header';

function App() {
  return (  // <>  short syntax para React.Fragment. Componente que não renderiza nada, mas serve para agrupar elementos
  <> 
    <Header title="Dudu's Blog">
      <h2>Posts da Semana</h2>
    </ Header>  

    <hr />

    <Post
      likes={20}
      post={{
        title: "titulo da notícia 01",
        subtitle: "subtitulo da notícia 01",
      }}
    />

    <Post
      likes={10}
      post={{
        title: "titulo da notícia 02",
        subtitle: "subtitulo da notícia 02",
      }}
    />

    <Post
    likes={50}
      post={{
        title: "titulo da notícia 03",
        subtitle: "subtitulo da notícia 03",
      }}
    />
  </>  
  ); // componentes irmaos precisam estar dentro de um componente pai (nesse caso, o fragment)
}

export default App;