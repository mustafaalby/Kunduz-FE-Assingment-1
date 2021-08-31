import React from "react";
import { Box, Text } from "components";
import { DateHooks } from "hooks";

const StoryBox = ({ by, descendants, id, score, time, title }) => {
  return (
    <Box
      display="flex"
      px={{ _: "4px", lg: "16px" }}
      py="4px"
      borderBottom="1px solid"
      borderColor="cream4"
      href={`/story-detail/${id}`}
      as="a"
      css={`
        cursor: pointer;
        text-decoration: none;
        &:nth-child(odd) {
          background-color: #e9e9e9;
        }
        &:hover {
          background-color: #d3dfe6;
        }
        &:last-child {
          border: none;
        }
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        justifyContent="center"
        borderRight="1px solid"
        borderColor="cream4"
        pr={{ _: "8px", lg: "16px" }}
      >
        <Text variant={{ _: "p2", lg: "p3" }} color="pickle">
          {score}
        </Text>
        <Text variant={{ _: "p1", lg: "p2" }} color="pickle">
          points
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width={1}
        pl={{ _: "8px", lg: "16px" }}
      >
        <Box
          pb="8px"
          css={`
            a {
              text-decoration: none;
            }
          `}
        >
          <Text variant={{ _: "p1", lg: "p3" }} color="primary">
            {title}
          </Text>
        </Box>
        <Box display="flex">
          <Text
            variant={{ _: "p1", lg: "p2" }}
            pr={{ _: "4px", lg: "16px" }}
            borderRight="1px solid"
            borderColor="cream4"
            color="secondary"
          >{`${descendants || 0} comments`}</Text>
          <Text
            variant={{ _: "p1", lg: "p2" }}
            px={{ _: "4px", lg: "16px" }}
            borderRight="1px solid"
            borderColor="cream4"
            color="primary"
          >
            {DateHooks(time)}
          </Text>
          <Text
            variant={{ _: "p1", lg: "p2" }}
            color="primary"
            px={{ _: "4px", lg: "16px" }}
          >{`by ${by}`}</Text>
        </Box>
      </Box>
    </Box>
  );
};
export default StoryBox;
