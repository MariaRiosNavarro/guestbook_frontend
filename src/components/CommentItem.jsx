const CommentItem = ({ user }) => {
  return (
    <div>
      <div>
        <p>{user.name}</p>
        <p>{user.lastname}</p>
      </div>
      <div>
        <p>write:</p>
        <p>{user.text}</p>
      </div>
    </div>
  );
};

export default CommentItem;
