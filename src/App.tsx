import React, { useCallback, useEffect, useState } from "react";
import { Theme, ThemeProvider } from "@emotion/react";
import { List } from "./components/list/list";
import {
  Container,
  LoadingText,
  LoadingContainer,
  LogoText,
  SectionSeparator,
  Sections,
  TopHeader,
} from "./App.styles";
import { SearchBox } from "./components/search-box/search-box";

export interface Member {
  first_name: string;
  last_name: string;
  email: string;
  img: string;
  role: "member" | "admin";
}

function App() {
  const [members, updateMembers] = useState<Member[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(
        "https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098"
      );
      updateMembers(await response.json());
    } catch (error) {}
    setLoading(false);
  }, []);
  console.log(members);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const theme: Theme = {
    primary: "#84A3F6",
    background: "#F9F9FB",
    fonts: {
      light: "#9E9E9E",
    },
  };

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingText>LOADING...</LoadingText>
      </LoadingContainer>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TopHeader>
          <LogoText>Team</LogoText>
          <SearchBox />
        </TopHeader>
        <Sections>
          <List
            headerMessage="Administrators"
            items={members?.filter((member) => member.role === "admin")}
          />
          <SectionSeparator />
          <List
            headerMessage="Developers"
            items={members?.filter((member) => member.role === "member")}
          />
        </Sections>
      </Container>
    </ThemeProvider>
  );
}

export default App;
