const GuestForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // console.log(data);
    // console.log(data.get("firstname"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 max-w-[700px] mx-auto my-0"
    >
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
        type="email"
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
