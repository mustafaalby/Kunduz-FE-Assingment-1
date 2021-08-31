import React, { useState } from "react";
import { Box, Text } from "components";
import { DateHooks } from "hooks";
const CommentBox = ({
  currentComments,
  kids,
  by,
  text,
  time,
  getSubComment,
  ...props
}) => {
  const renderHTML = (rawHTML) =>
    React.createElement("span", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  const [isActive, setActive] = useState(true);
  return (
    <Box pb="16px" onClick={() => setActive(!isActive)} {...props}>
      <Box>
        <Box
          border="1px solid"
          borderRadius="8px"
          borderColor="cream2"
          p={{ _: "8px", lg: "16px" }}
        >
          <Text>{renderHTML(text)}</Text>
          <Box display="flex" justifyContent="space-between">
            <Box>
              {kids && kids.length && (
                <Box borderRight="1px solid">
                  <Text
                    px="8px"
                    onClick={() => {
                      getSubComment(kids);
                    }}
                    variant={{ _: "p1", lg: "p2" }}
                    css={`
                      cursor: pointer;
                    `}
                  >{`${kids.length} Comments`}</Text>
                </Box>
              )}
            </Box>
            <Box display="flex">
              <Text
                borderRight="1px solid"
                px="8px"
                color="primary"
                variant={{ _: "p1", lg: "p2" }}
              >
                {DateHooks(time)}
              </Text>
              <Text
                variant={{ _: "p1", lg: "p2" }}
                color="primary"
                px="8px"
              >{`by ${by}`}</Text>
            </Box>
          </Box>
        </Box>
        {kids &&
          kids.length &&
          currentComments
            .filter((f) => kids.includes(f.id))
            .map((m) => {
              return (
                <Box
                  key={m.id}
                  display="flex"
                  flexDirection="column"
                  pl={{ _: "12px", lg: "48px" }}
                  pt={{ _: "8px", lg: "24px" }}
                >
                  <CommentBox
                    currentComments={currentComments}
                    getSubComment={getSubComment}
                    kids={m.kids}
                    text={m.text}
                    time={m.time}
                    by={m.by}
                    id={m.id}
                  />
                </Box>
              );
            })}
      </Box>
    </Box>
  );
};

export default CommentBox;
