import styled from 'styled-components';

export const Container = styled.article`
  margin-bottom: 24px;

  opacity: ${(props) => props.removed ? 0.7 : 1};
  color: ${(props) => props.removed ? 'red' : '#fff'};
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;