const UserList = ({user}) => {
  return ( 
    <li className="user-list">
      <span className="name">{user.first} {user.last}</span>
    </li>
  );
}

export default UserList;