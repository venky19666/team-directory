import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1.5rem;
`;

export const ListContainer = styled.div`
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  display: grid;
  row-gap: 1rem;
  column-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ListHeader = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.fonts.light};
`;

export const NotFoundMessages = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
`;
