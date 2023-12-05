const CommentItem = ({ user }) => {
  return (
    <div className="my-0 mx-auto border-2 border-primary min-w-[15rem] rounded-md">
      <div>
        <div className="p-4">
          <p className="font-bold">{user.firstname}</p>
          <p className="italic">{user.email}</p>
        </div>
        <div className="p-4">
          <p>write:</p>
          <p className="p-4 bg-slate-300 text-black">{user.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
