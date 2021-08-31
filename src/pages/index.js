import { Home } from "containers";
import { urls } from "context/urls";

Home.getInitialProps = async ({ query }) => {
  let page = query.page || 1;
  let take = query.take || 10;

  const allStoryIds = await fetch(`${urls.newStories}`, {
    method: "GET",
  })
    .then((r) => r.json())
    .then((r) => r);

  let pageCount = Math.ceil(allStoryIds.length / take);
  let storyIds = allStoryIds.slice((page - 1) * take, page * take);
  let stories = [];

  for (let index = 0; index < storyIds.length; index++) {
    let temp = await fetch(`${urls.getById.replace(":id", storyIds[index])}`, {
      method: "GET",
    })
      .then((r) => r.json())
      .then((r) => r);
    stories.push(temp);
  }

  return { storyIds, stories, pageCount, page, take };
};
export default Home;
