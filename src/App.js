import React from 'react';
import Post from './Post';

const category = "Posts da semana";

function App() {
  return (  // <>  short syntax para React.Fragment. Componente que não renderiza nada, mas serve para agrupar elementos
  <> 
    <h1>JStack's Blog</h1>
    <h2>Posts da Semana</h2>

    <hr />

    <Post
      post={{
        title: "titulo da notícia 01",
        subtitle: "subtitulo da notícia 01",
      }}
    />
  </>  
  ); // componentes irmaos precisam estar dentro de um componente pai (nesse caso, o fragment)
}

export default App;