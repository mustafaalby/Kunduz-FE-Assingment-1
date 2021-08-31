import { StoryDetail } from "containers";
import { urls } from "context/urls";

StoryDetail.getInitialProps = async ({ query }) => {
  let { id } = query;

  const storyDetail = await fetch(`${urls.getById.replace(":id", id)}`, {
    method: "GET",
  })
    .then((r) => r.json())
    .then((r) => r);

  let comments = [];
  if (storyDetail.kids) {
    for (let index = 0; index < storyDetail.kids.length; index++) {
      let temp = await fetch(
        `${urls.getById.replace(":id", storyDetail.kids[index])}`,
        {
          method: "GET",
        }
      )
        .then((r) => r.json())
        .then((r) => r);
      comments.push(temp);
    }
  }
  return { storyDetail, comments };
};
export default StoryDetail;
