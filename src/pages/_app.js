import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Theme } from "components";
import { Layout } from "containers";
import { ContextWrap } from "context/provider";
const GlobalStyle = createGlobalStyle`
body{
  margin: 0px;  
  
  background-color: #264653;
  }
`;
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ContextWrap>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextWrap>
    </ThemeProvider>
  );
}

export default MyApp;
