import { useState } from "react";

const GuestForm = ({ setRefresh }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    try {
      let res = await fetch("http://localhost:9993/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let resJson = await res.json();

      if (res.ok) {
        console.log("Server response:", resJson);
        setRefresh((prev) => !prev);
        event.target.reset();
      } else {
        setErrorMessage(resJson.message);
        console.log(resJson);
      }
    } catch (err) {
      console.log(err);
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
      <input type="submit" value="save" className="btn btn-primary" />
    </form>
  );
};

export default GuestForm;
