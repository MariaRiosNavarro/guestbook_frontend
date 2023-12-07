const CommentItem = ({ user }) => {
  console.log("http://localhost:9993/" + user.img);
  return (
    <div className="card my-0 mx-auto border-2 border-primary w-[100%] rounded-md">
      <figure>
        <img
          className="max-w-[100%]"
          src={"http://localhost:9993/" + user.img}
          alt={user.lastname}
        />
      </figure>
      <div>
        <div className="p-4">
          <p className="card-title font-bold">{user.firstname}</p>
          <p className="italic">{user.email}</p>
        </div>
        <div className="card-body p-4">
          <p>write:</p>
          <p className="p-4 bg-slate-300 text-black font-[helvetica]">
            {user.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
