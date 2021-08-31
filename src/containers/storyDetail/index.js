import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "context/postContext";
import { Box, CommentBox, Text } from "components";
import { DateHooks } from "hooks";

const StoryDetail = ({ storyDetail, comments }) => {
  const { state, functions } = useContext(PostContext);
  const [currentComments, setCurrentComments] = useState(comments);

  const getSubComment = (kids) => {
    functions.getComments(kids);
  };

  useEffect(() => {
    if (state.allComments) {
      let temp = state.comments.filter(
        (f) => !currentComments.some((c) => c.id == f.id)
      );
      setCurrentComments(currentComments.concat(temp));
    }
  }, [state.allComments]);

  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      bg="cream3"
      mx={{ _: "8px", lg: "200px" }}
      p={{ _: "8px", lg: "32px" }}
      border="1px solid"
      borderColor="cream"
      borderRadius="16px"
      my={{ _: "24px", lg: "48px" }}
      css={`
        box-shadow: 0px 0px 25px 5px #c1c1c1;
        a {
          word-break: break-all;
          text-decoration: none;
        }
        code {
          white-space: break-spaces;
        }
      `}
    >
      <Box>
        <a href={storyDetail.url} target="_blank" rel="noopener noreferrer">
          <Text
            variant={{ _: "p3", lg: "h2" }}
            color="primary"
            textAlign="center"
            css={`
              &:hover {
                color: #658fa0;
              }
            `}
          >
            {storyDetail.title}
          </Text>
        </a>
        <Box display="flex" justifyContent="space-between" py="8px">
          <Text variant={{ _: "p1", lg: "p2" }} color="secondary">
            {DateHooks(storyDetail.time)}
          </Text>
          <Box display="flex">
            <Text
              variant={{ _: "p1", lg: "p2" }}
              borderRight="1px solid"
              borderColor="cream4"
              color="pickle"
              px="4px"
            >
              {storyDetail.score} points
            </Text>
            <Text variant={{ _: "p1", lg: "p2" }} color="primary" px="4px">
              {storyDetail.by}
            </Text>
          </Box>
        </Box>
        {storyDetail.text && (
          <Box bg="cream5" p={{ _: "4px", lg: "16px" }} mb="8px">
            {renderHTML(storyDetail.text)}
          </Box>
        )}
      </Box>
      <Box>
        <Text variant="p3" textAlign="center">
          Comments
        </Text>
        <Box>
          {comments.map((c, i) => {
            return (
              <Box
                key={c.id}
                p="8px"
                border="1px solid"
                borderColor="cream2"
                borderRadius="8px"
                my="16px"
                bg="cream"
              >
                <Box display="flex">
                  <Box pr="16px">
                    <Text>{`${i + 1})`}</Text>
                  </Box>
                  <Box
                    borderBottom="1px solid"
                    borderColor="cream2"
                    pb="8px"
                    mb="8px"
                    width={1}
                  >
                    {renderHTML(c.text)}
                  </Box>
                </Box>
                <Box px="16px" display="flex" justifyContent="space-between">
                  <Box minWidth={{ _: "80px", lg: "280px" }}>
                    {c.kids && c.kids.length && (
                      <Text
                        borderRight="1px solid"
                        variant={{ _: "p1", lg: "p2" }}
                        textAlign="center"
                        color="primary"
                        onClick={() => getSubComment(c.kids)}
                        css={`
                          cursor: pointer;
                        `}
                      >{`${c.kids.length} Comments`}</Text>
                    )}
                  </Box>
                  <Box minWidth={{ _: "80px", lg: "280px" }}>
                    <Text
                      variant={{ _: "p1", lg: "p2" }}
                      borderRight="1px solid"
                      textAlign="center"
                      color="primary"
                    >
                      {DateHooks(c.time)}
                    </Text>
                  </Box>
                  <Box minWidth={{ _: "80px", lg: "280px" }}>
                    <Text
                      variant={{ _: "p1", lg: "p2" }}
                      textAlign="center"
                      color="primary"
                    >{`by ${c.by}`}</Text>
                  </Box>
                </Box>
                {c.kids &&
                  c.kids.length &&
                  currentComments
                    .filter((f) => c.kids.includes(f.id))
                    .map((m) => {
                      return (
                        <Box
                          key={m.id}
                          display="flex"
                          flexDirection="column"
                          pl={{ _: "36px", lg: "48px" }}
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
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
export default StoryDetail;
