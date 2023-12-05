import { useState } from "react";
import CommentItem from "./CommentItem";

const CommentList = () => {
  const [users, setUsers] = useState([]);

  return (
    <div>
      {users.map((user) => (
        <CommentItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CommentList;
