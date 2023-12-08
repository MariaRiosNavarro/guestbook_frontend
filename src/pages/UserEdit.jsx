import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import placeholder from "../assets/img/placeholder.jpg";

const UserEdit = () => {
  const [editPost, setEditPost] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [editMessage, setEditMessage] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "/api/users/" + id)
      .then((response) => response.json())
      .then((data) => setEditPost(data));
  }, [refresh]);

  //placeholder for post without Picture
  const imgSrc = user.img
    ? import.meta.env.VITE_BACKEND_URL + "/" + editPost.img
    : placeholder;

  //edit
  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      const form = new FormData(e.target);
      form.append("id", id);

      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/users/",
        {
          method: "PUT",
          body: form,
        }
      );
      const resJson = await response.json();

      if (response.status === 418) {
        setEditMessage(resJson.message);
        setTimeout(() => {
          setEditMessage("");
          setRefresh((prev) => !prev);
        }, 4000);
      }
      setRefresh((prev) => !prev);
    } catch (error) {
      console.error("Edit error:", error.message);
      setRefresh((prev) => !prev);
    }
  };

  const handleConfirmDelete = () => {
    setConfirmDelete((prev) => !prev);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/users/" + id,
        {
          method: "DELETE",
        }
      );
      const resJson = await response.json();
      setDeleteMessage(resJson.message);
    } catch (error) {
      console.error("Failed to delete article:", error.message);
    }
  };

  if (editPost) {
    return (
      <>
        <Header />
        {deleteMessage ? (
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="p-5 bg-red-400 text-black font-bold text-center uppercase rounded-md w-[100%]">
              {deleteMessage}
            </div>
            <Link to="/" className="w-[50%]">
              <input
                type="submit"
                value="BACK"
                className="btn btn-transparent border-4 border-secondary w-[100%]"
              />
            </Link>
          </div>
        ) : (
          <main className="flex flex-col justify-center items-center m-4 gap-4">
            <section className="h-[400px] overflow-hidden w-[100%] max-w-[700px] p-8">
              <img
                className="h-[100%] w-[100%] object-cover"
                src={imgSrc}
                alt=""
              />
            </section>

            <form
              onSubmit={handleEdit}
              className="flex flex-col gap-4 p-4 max-w-[650px] mx-auto my-0"
            >
              {editMessage && (
                <div className="p-5 bg-red-400 text-black font-bold text-center uppercase rounded-md w-[100%]">
                  {editMessage}
                </div>
              )}
              <h4 className="font-bold text-xl">Edit your data:</h4>
              <input
                type="text"
                name="firstname"
                id="firstname"
                defaultValue={editPost.firstname}
                className="px-4 py-2 rounded-md border-none"
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                defaultValue={editPost.lastname}
                className="px-4 py-2 rounded-md border-none"
              />
              <input
                type="text"
                name="email"
                id="email"
                defaultValue={editPost.email}
                className="px-4 py-2 rounded-md border-none"
              />
              <input
                type="text"
                name="text"
                id="text"
                defaultValue={editPost.text}
                className="px-4 py-2 rounded-md border-none"
              />
              <div className="border border-primary p-4 my-4 rounded-md flex justify-center items-center gap-4">
                <label htmlFor="img">Change the Picture?</label>
                <input
                  type="file"
                  name="img"
                  id="id"
                  className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
                />
              </div>
              <div className="flex justify-center items-center gap-4 mb-4">
                <Link to="/" className="w-[50%]">
                  <input
                    type="submit"
                    value="BACK"
                    className="btn btn-transparent border-4 border-secondary w-[100%]"
                  />
                </Link>
                <input
                  type="submit"
                  value="SAVE"
                  className="btn btn-secondary w-[50%]"
                />
              </div>

              {confirmDelete ? (
                <div className="flex flex-col  justify-center items-center gap-4">
                  <p>Are You sure?</p>
                  <div className="flex justify-center items-center gap-4">
                    <button
                      className="btn btn-secondary"
                      onClick={handleConfirmDelete}
                    >
                      CANCEL
                    </button>
                    <button
                      onClick={handleDelete}
                      className="btn bg-red-900 text-yellow-100 border border-red-400"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              ) : (
                <input
                  onClick={handleConfirmDelete}
                  value="DELETE"
                  className="btn btn-primary"
                />
              )}
            </form>
          </main>
        )}
      </>
    );
  } else {
    return (
      <>
        <Header />
        <main>
          <h1>loading</h1>
        </main>
      </>
    );
  }
};

export default UserEdit;
