import styled from 'styled-components';

import MainTitle from '../Title';

// criando um novo componente a partir do componente Title de Title.js (herdando os estilos do Title.js) e adicionando ou sobrescrevendo estilos
export const Title = styled(MainTitle)` 
  color: red;
`;