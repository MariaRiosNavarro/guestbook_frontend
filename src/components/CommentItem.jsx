const CommentItem = ({ user }) => {
  return (
    <div className="my-0 mx-auto bg-secondary min-w-[15rem] rounded-md">
      <div>
        <div className="p-4">
          <p className="font-bold">{user.firstname}</p>
          <p className="italic">{user.email}</p>
        </div>
        <div className="p-4">
          <p>write:</p>
          <p className="p-4 bg-[#FFFFFF] rounded-sm">{user.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
