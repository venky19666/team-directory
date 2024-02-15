import { Container, Input, SvgIcon } from "./search-box.styles";

export const SearchBox = () => {
  return (
    <Container>
      <SvgIcon src="/search.svg" alt="search" />
      <Input placeholder="search" />
    </Container>
  );
};
