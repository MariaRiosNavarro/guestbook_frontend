import { useState } from "react";
import placeholder from "../assets/img/placeholder.jpg";

const GuestForm = ({ setRefresh }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const form = new FormData(event.target);

      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/users",
        {
          method: "POST",
          body: form,
        }
      );
      const resJson = await response.json();
      console.log(resJson);
      //toast for validation issues
      if (response.status === 418) {
        setErrorMessage(resJson.message);
        setTimeout(() => {
          setErrorMessage("");
          setRefresh((prev) => !prev);
        }, 4000);
      }
      setRefresh((prev) => !prev);
      event.target.reset();
    } catch (error) {
      console.error("Add error:", error);
      setRefresh((prev) => !prev);
      event.target.reset();
      // setErrorMessage(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 max-w-[650px] mx-auto my-0"
    >
      {errorMessage && (
        <div className="p-5 bg-red-400 text-black font-bold text-center uppercase rounded-md">
          {errorMessage}
        </div>
      )}
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Firstname"
        className="px-4 py-2 rounded-md border-none"
      />
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Lastname"
        className="px-4 py-2 rounded-md border-none"
      />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Your Email"
        className="px-4 py-2 rounded-md border-none"
      />
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Your text"
        className="px-4 py-2 rounded-md border-none"
      />
      <h3 className="px-4">Your Image:</h3>
      <input
        type="file"
        name="img"
        id="id"
        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
      />
      <input type="submit" value="save" className="btn btn-primary" />
    </form>
  );
};

export default GuestForm;
