import React from "react";
import { Box, Text } from "components";
const HeaderMobile = ({ isActive, onClose, ...props }) => {
  return (
    <Box
      display={isActive ? "block" : "none"}
      css={`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 1);
        z-index: 99;
      `}
      {...props}
    >
      <Box display="flex" justifyContent="flex-end" m="16px" onClick={onClose}>
        <Text variant="p3" color="primary">
          X
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        my="16px"
        css={`
          a {
            text-decoration: none;
          }
        `}
      >
        <Box
          p="8px 16px"
          borderRadius="12px"
          variant="primary"
          bg="cream"
          as="a"
          href="/"
          mb="16px"
        >
          <Text variant="p3">Home</Text>
        </Box>
        <Box
          p="8px 16px"
          borderRadius="12px"
          variant="primary"
          bg="cream"
          as="a"
          href="/show"
          mb="16px"
        >
          <Text variant="p3" color="primary">
            Show
          </Text>
        </Box>
        <Box
          p="8px 16px"
          borderRadius="12px"
          variant="primary"
          bg="cream"
          as="a"
          href="ask"
          mb="16px"
        >
          <Text variant="p3" color="primary">
            Ask
          </Text>
        </Box>
        <Box
          p="8px 16px"
          borderRadius="12px"
          variant="primary"
          bg="cream"
          as="a"
          href="/jobs"
          mb="16px"
        >
          <Text variant="p3" color="primary">
            Jobs
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderMobile;
