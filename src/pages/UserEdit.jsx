import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserEdit = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:9993/api/users" + id)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  if (user) {
    return (
      <main>
        <section>
          <img src={"http://localhost:9993/" + user.img} alt="" />
        </section>
      </main>
    );
  } else {
    return (
      <main>
        <h1>loading</h1>
      </main>
    );
  }
};

export default UserEdit;
