import React, { useEffect, useState } from "react";
import { Box, Pagination, StoryBox } from "components";
import Select from "react-select";
const Show = ({ stories, pageCount, page, take }) => {
  const [currentTake, setCurrentTake] = useState(take);

  useEffect(() => {
    if (take != currentTake) {
      window.location = `/?page=${parseInt(page) + 1}&take=${currentTake}`;
    }
  }, [currentTake]);

  return (
    <Box display="flex" justifyContent="center" mb="24px">
      <Box mx="8px">
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection="row"
          py={{ _: "12px", lg: "24px" }}
        >
          <Pagination
            next={`/?page=${parseInt(page) + 1}&take=${parseInt(currentTake)}`}
            prev={`/?page=${parseInt(page) - 1}&take=${parseInt(currentTake)}`}
            pageCount={pageCount}
            page={page}
          />
          <Box minWidth={{ _: "125px", lg: "250px" }}>
            <Select
              placeholder="Amount of story per page "
              instanceId="takeSelect"
              options={[
                { label: "10", value: 10 },
                { label: "15", value: 15 },
                { label: "20", value: 20 },
                { label: "25", value: 25 },
                { label: "30", value: 30 },
              ]}
              onChange={(e) => setCurrentTake(e.value)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          p={{ _: "8px", lg: "16px" }}
          border="1px solid"
          borderColor="cream"
          borderRadius="16px"
          bg="cream3"
          css={`
            box-shadow: 0px 0px 25px 5px #c1c1c1;
          `}
        >
          {stories.map((s) => {
            return (
              <StoryBox
                key={s.id}
                id={s.id}
                by={s.by}
                title={s.title}
                score={s.score}
                time={s.time}
                descendants={s.descendants}
                url={s.url}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
export default Show;
