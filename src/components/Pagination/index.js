import React from "react";
import { Box, Text } from "components";
const Pagination = ({ next, prev, page, pageCount, ...props }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      minWidth={{_:'100px',lg:"150px"}}
      {...props}
    >
      {page > 1 && (
        <Box
          href={prev}
          as="a"
          p="8px"
          border="1px solid"
          borderRadius="8px"
          color="primary"
          bg="cream"
          css={`
            cursor: pointer;
            text-decoration: none;
          `}
        >
          <Text variant="p3">Prev</Text>
        </Box>
      )}
      {pageCount >= page && (
        <Box
          href={next}
          as="a"
          p="8px"
          border="1px solid"
          borderRadius="8px"
          color="primary"
          bg="cream"
          css={`
            cursor: pointer;
            text-decoration: none;
          `}
        >
          <Text variant="p3">Next</Text>
        </Box>
      )}
    </Box>
  );
};
export default Pagination;
