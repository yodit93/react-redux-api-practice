const UserList = ({first, last}) => {
  console.log('UserList')
  return ( 
    <li className="user-list">
      <span className="name">{first} {last}</span>
    </li>
  );
}

export default UserList;