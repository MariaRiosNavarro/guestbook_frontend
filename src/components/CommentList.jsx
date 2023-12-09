import { v4 as uuidv4 } from "uuid";

import CommentItem from "./CommentItem";

const CommentList = ({ users }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 max-w-[600px] mx-auto my-0">
      {users?.map((user) => (
        <CommentItem key={uuidv4()} user={user} />
      ))}
    </div>
  );
};

export default CommentList;
