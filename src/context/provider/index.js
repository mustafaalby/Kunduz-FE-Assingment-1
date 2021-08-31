import { PostState } from "context/postContext";

export const ContextWrap = ({ children }) => {
  return (
    <>
      <PostState>{children}</PostState>
    </>
  );
};
