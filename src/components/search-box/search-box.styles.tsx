import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  padding: 0.25rem 1rem;
  gap: 0.25rem;
  border-radius: 1rem;
  &:has(input:focus) {
    outline: 2px solid black;
  }
`;

export const SvgIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const Input = styled.input`
  background-color: white;
  border: none;
  width: 16rem;
  height: 1.5rem;
  outline: none;
`;
