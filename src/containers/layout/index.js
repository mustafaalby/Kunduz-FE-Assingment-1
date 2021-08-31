import React from "react";
import { Box, Header } from "components";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box position="relative">{children}</Box>
    </>
  );
};
export default Layout;
