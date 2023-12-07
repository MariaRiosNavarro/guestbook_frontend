import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const UserEdit = () => {
  const [editPost, setEditPost] = useState(null);
  //   const [refresh, setRefresh] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:9993/api/users/" + id)
      .then((response) => response.json())
      .then((data) => setEditPost(data));
  }, []);

  const handleEdit = (e) => {
    e.preventDefault;
    const form = new FormData(e.target);
    form.append("id", id);
    fetch("http://localhost:9993/api/users/", {
      method: "PUT",
      body: form,
    }).then((response) => setRefresh((prev) => !prev));
  };

  if (editPost) {
    return (
      <>
        <Header />
        <main className="flex flex-col justify-center items-center m-4">
          <section className="h-[400px] overflow-hidden w-[100%] max-w-[700px] p-8">
            <img
              className="h-[100%] w-[100%]"
              src={"http://localhost:9993/" + editPost.img}
              alt=""
            />
          </section>
          <form
            onSubmit={handleEdit}
            className="flex flex-col gap-4 p-4 max-w-[650px] mx-auto my-0"
          >
            <h4 className="font-bold text-xl">Edit your data:</h4>
            {errorMessage && (
              <div className="p-5 bg-red-400 text-black font-bold text-center uppercase rounded-md">
                {errorMessage}
              </div>
            )}
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
              placeholder={editPost.email}
              className="px-4 py-2 rounded-md border-none"
            />
            <input
              type="text"
              name="text"
              id="text"
              defaultValue={editPost.text}
              className="px-4 py-2 rounded-md border-none"
            />
            <div className="border border-primary p-4 rounded-md flex justify-center items-center gap-4">
              <label htmlFor="img">Change the Picture?</label>
              <input
                type="file"
                name="img"
                id="id"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
            </div>
            <input type="submit" value="SAVE" className="btn btn-primary" />
          </form>
        </main>
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
