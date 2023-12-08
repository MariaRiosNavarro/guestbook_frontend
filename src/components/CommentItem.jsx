import { Link } from "react-router-dom";

const CommentItem = ({ user }) => {
  console.log(import.meta.env.VITE_BACKEND_URL + "/" + user.img);
  return (
    <div className="card my-0 mx-auto border-2 border-primary w-[100%] rounded-md">
      <figure className="w-[100%] h-[250px]">
        <img
          className="w-[100%]"
          src={import.meta.env.VITE_BACKEND_URL + "/" + user.img}
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
        <div className="flex justify-center items-center m-4">
          <Link className="btn btn-primary" to={"/edit/" + user.id}>
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
