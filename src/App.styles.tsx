import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TopHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0rem 2rem;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primary};
`;

export const Sections = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 2rem;
`;

export const LogoText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  color: white;
`;

export const SectionSeparator = styled.hr`
  height: 1px;
  background-color: ${({ theme }) => theme.fonts.light};
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoadingText = styled.p``;
