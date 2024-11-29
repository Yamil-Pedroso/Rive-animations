import styled from 'styled-components';

export const LittleBallElem = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #2f4834;
  transition: all 0.3s ease;
  opacity: 0;

  &.active {
    opacity: 1;
  }
`;
