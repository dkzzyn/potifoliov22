
import styled from "styled-components";

export const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`;


export const Wrapper = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  background: linear-gradient(38.73deg, rgba(122, 107, 255, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
