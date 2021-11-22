
import '../assets/main.css'
import '../assets/chrome-bug.css'
import React, { FC, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import { Layout } from '../components/common'
import { createGlobalStyle } from 'styled-components'
import { AppContextProvider } from "../contexts/AppContext";
import { UserContextProvider } from "../contexts/UserContext";
import { parseCookies } from "nookies";
import { NextPageContext } from "next";
import { me } from "../pages/api";
import { AppProps } from "next/app";


const GlobalStyle = createGlobalStyle`
html{
  overflow-y: hidden;
}
 body {
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -webkit-tap-highlight-color: transparent;
   -moz-osx-font-smoothing: grayscale;
   overflow-x: hidden;
   width: 100%;
   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow-y: auto !important;
  max-height: 100vh;
  
 }

 h1 {
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 0.05rem;
  padding: 0px 0px 20px 0px;
}
 h3 {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.05rem;
}
h4 {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.03rem;
  padding-bottom: 10px;
}
h5{
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0.03rem;
  padding: 20px 0px 10px 0px;
}
p {
  
  font-size: 15px;
  font-weight: 300;
  padding: 10px 0px 5px 0px;
  line-height: 30px;
  letter-spacing: 0.03rem;
}

.fa-xs {
  padding-right: 5px;
}
`

MyApp.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  const cookies = parseCookies(ctx);

  const { authToken } = cookies;

  let user = undefined;

  if (authToken) {
    try {
      const response = await me(authToken);

      if (response.status === 200) {
        user = response.data;
      }
    } catch (error) {
      // console.error(error, error.response);
    }
  }

  return {
    user: user,
  };
};

interface ExtendedAppProps extends AppProps {
  user?: User;
}


export default function MyApp({ Component, pageProps, user }: ExtendedAppProps) {

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  return (
    <>

    <React.Fragment>
    <UserContextProvider user={user}>
    <ThemeProvider>
      <Layout pageProps={pageProps}>
       <Component {...pageProps} />
       <GlobalStyle />
       </Layout>

    </ThemeProvider>
    </UserContextProvider>
    </React.Fragment>
    </>
  )
 
}
MyApp.Layout = Layout

