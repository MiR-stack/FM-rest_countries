import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Text } from "../components/ui/text.styled";
import { Wraper } from "../components/utils/utils.styled";
import { Appbar, Container, ModeButton, Moon, Sun } from "./pageLayout.styled";

function PageLayout({dark,handleMode, children }) {

  const theme = {
    dark: dark,
    colors: {
      darkText: "hsl(0, 0%, 100%)",
      darkEl: "hsl(209, 23%, 22%)",
      darkBg: "hsl(207, 26%, 17%)",
      lightText: "hsl(200, 15%, 8%)",
      lightEl: "hsl(0, 0%, 100%)",
      lightBg: "hsl(0, 0%, 98%)",
      lightInp: "hsl(0, 0%, 52%)",
    },
    css:{
        shadow: "2px 2px 4px rgba(0,0,0,.1)",
    }
  };

  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Appbar>
          <Wraper>
            <Text as="h2" variant="appTitle">
              {" "}
              Where in the world?
            </Text>
            {dark ? (
              <ModeButton onClick={handleMode}>
                <Sun />
                <Text variant="bold">Light Mode </Text>
              </ModeButton>
            ) : (
              <ModeButton onClick={handleMode}>
                <Moon />
                <Text variant="bold">Dark Mode </Text>
              </ModeButton>
            )}
          </Wraper>
        </Appbar>
        <Wraper> {children}</Wraper>
      </Container>
    </ThemeProvider>
  );
}

export default PageLayout;
