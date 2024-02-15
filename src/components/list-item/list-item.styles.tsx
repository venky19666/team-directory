import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    outline: 2px solid black;
  }
`;

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 6rem;
`;

export const Name = styled.p`
  font-size: 1rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
`;

export const EmailId = styled.p`
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  color: ${({ theme }) => theme.fonts.light};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
