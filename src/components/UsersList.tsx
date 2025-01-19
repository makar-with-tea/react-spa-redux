import { useSelector } from 'react-redux';
import { selectUsers } from '../store/usersSlice';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';

function UsersList() {
  const users = useSelector((state: RootState) => selectUsers(state));

  return (
    <div>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
