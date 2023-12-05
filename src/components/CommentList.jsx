import { useState } from "react";
import CommentItem from "./CommentItem";
import { initialMockdata } from "../db/mockdata";

const CommentList = () => {
  const [users, setUsers] = useState(initialMockdata);

  return (
    <div className="grid grid-cols-2 gap-4 max-w-[650px] mx-auto my-0">
      {users.map((user) => (
        <CommentItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CommentList;
