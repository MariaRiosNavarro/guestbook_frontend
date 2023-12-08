import Header from "../components/Header";
import GuestForm from "../components/GuestForm";
import CommentList from "../components/CommentList";
import { useEffect, useState } from "react";
import { initialMockdata } from "../db/mockdata";

const Home = () => {
  const [users, setUsers] = useState([initialMockdata]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "/api/users")
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => setUsers(data));
  }, [refresh]);

  return (
    <article>
      <Header />
      <GuestForm setRefresh={setRefresh} />
      <CommentList users={users} />
    </article>
  );
};

export default Home;
