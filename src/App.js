import React from 'react';
import Post from './Post';
import Header from './Header';

const posts = [
  { title: 'Title#01', subtitle: 'Sub#01' , likes: 20 },
  { title: 'Title#02', subtitle: 'Sub#02' , likes: 10 },
  { title: 'Title#03', subtitle: 'Sub#03' , likes: 50 },
];

function App() {
  return (  // <>  short syntax para React.Fragment. Componente que não renderiza nada, mas serve para agrupar elementos
  <> 
    <Header title="Dudu's Blog">
      <h2>Posts da Semana</h2>
    </ Header>  

    <hr />

    {posts.map(post => (    
      <Post
        key={post.title}
        likes={post.likes}
        post={{
          title: post.title,
          subtitle: post.subtitle,
        }} 
      />
    ))}
  </>  
  ); // componentes irmaos precisam estar dentro de um componente pai (nesse caso, o fragment)
}

export default App;