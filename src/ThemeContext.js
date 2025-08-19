import React, { useState, createContext } from 'react';

export const ThemeContext = createContext(); // criando um contexto para o tema e com valor inicial 'dark'
// para usar o context, preciso pensar quem vai usar a informação. nesse caso, tanto o Header quanto o Post tem buttons, então deve-se envolver ambos com o ThemeContext.provider

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme((prevState) => (
      prevState === 'dark' 
        ? 'light'
        : 'dark'
    ));
  }

  return (
    <ThemeContext.Provider
      value = {{ 
        theme, 
        onToggleTheme: handleToggleTheme, // passando a função para o contexto 
      }}
    > 
      {props.children} 
    </ThemeContext.Provider>
  );
}

// props.children: seria um encapsulamento dos componentes filhos que estão dentro do ThemeProvider no App.js (nesse caso, Header e Post)