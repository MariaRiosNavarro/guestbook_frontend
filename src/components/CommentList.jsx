import CommentItem from "./CommentItem";

const CommentList = ({ users }) => {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-[650px] mx-auto my-0">
      {users.map((user) => (
        <CommentItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CommentList;
