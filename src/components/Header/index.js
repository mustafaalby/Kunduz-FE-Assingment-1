import React, { useState } from "react";
import { Box, Text, HeaderMobile } from "components";
const Header = ({ ...props }) => {
  const [isHeaderMobileActive, setHeaderMobileActive] = useState(false);
  return (
    <Box {...props}>
      <Box
        display={{ _: "none", lg: "flex" }}
        justifyContent="center"
        height="60px"
        mb="24px"
        mx={{ _: "unset", lg: "250px" }}
        borderRadius="24px"
        css={`
          box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.3);
        `}
      >
        <Box
          width={1 / 4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="cream3"
          as="a"
          href="/"
          borderRadius="0px 0px 0px 24px"
          borderLeft="1px solid"
          borderBottom="1px solid"
          borderColor="primary"
          css={`
            &:hover {
              background-color: #bec7cc;
            }
            text-decoration: none;
          `}
        >
          <Text
            variant={{ _: "p3", lg: "h3" }}
            color="primary"
            textAlign="center"
          >
            Home
          </Text>
        </Box>
        <Box
          width={1 / 4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="cream3"
          as="a"
          href="/show"
          borderBottom="1px solid"
          borderColor="primary"
          css={`
            &:hover {
              background-color: #bec7cc;
            }
            text-decoration: none;
          `}
        >
          <Text
            variant={{ _: "p3", lg: "h3" }}
            color="primary"
            textAlign="center"
          >
            Show
          </Text>
        </Box>
        <Box
          width={1 / 4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="cream3"
          as="a"
          href="/ask"
          borderBottom="1px solid"
          borderColor="primary"
          css={`
            &:hover {
              background-color: #bec7cc;
            }
            text-decoration: none;
          `}
        >
          <Text
            variant={{ _: "p3", lg: "h3" }}
            color="primary"
            textAlign="center"
          >
            Ask
          </Text>
        </Box>
        <Box
          width={1 / 4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="cream3"
          as="a"
          href="/jobs"
          borderRadius="0px 0px 24px 0px"
          borderRight="1px solid"
          borderBottom="1px solid"
          borderColor="primary"
          css={`
            &:hover {
              background-color: #bec7cc;
            }
            text-decoration: none;
          `}
        >
          <Text
            variant={{ _: "p3", lg: "h3" }}
            color="primary"
            textAlign="center"
          >
            Jobs
          </Text>
        </Box>
      </Box>
      <Box
        display={{ _: "flex", lg: "none" }}
        justifyContent="space-between"
        bg="cream"
        height="60px"
      >
        <Box
          mx="8px"
          width="135px"
          height="50px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="p3" color="primary">
            Hacker News
          </Text>
        </Box>
        <HeaderMobile
          isActive={isHeaderMobileActive}
          onClose={() => setHeaderMobileActive(!isHeaderMobileActive)}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mx="8px"
          onClick={() => setHeaderMobileActive(true)}
        >
          <Box width="24px" height="4px" bg="primary" mb="4px" />
          <Box width="24px" height="4px" bg="primary" mb="4px" />
          <Box width="24px" height="4px" bg="primary" mb="4px" />
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
