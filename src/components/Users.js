import { useDispatch, useSelector } from "react-redux";
import UserList from "./UserList";
import { fetchUsers } from "../store/users/usersSlice";
import { useEffect } from "react";

const Users = () => {
  const {users, isLoading, error} = useSelector((store) => store.users);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);
  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <ul className="users">
        {users.map(user => (
          <UserList key={user.id} first={user.first} last={user.last} />
        ))}
      </ul>
    </>
  );
}
 
export default Users;