import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserById, updateUserName } from '../store/usersSlice';
import { RootState, AppDispatch } from '../store/store';

function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const user = useSelector((state: RootState) =>
    selectUserById(state, parseInt(id ?? '0'))
  );
  const [name, setName] = useState(user?.name || '');
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = () => {
    if (user) {
      dispatch(updateUserName({ id: user.id, name }));
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  if (!user) {
    return <h1>Пользователь не найден</h1>;
  }

  return (
    <div>
      <h1>Информация о пользователе</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Имя:</strong></p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleUpdate}
      // внезапный стиль для кнопок
      style={{
        backgroundColor: 'gray',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '10px',
      }}
      >Сохранить</button>
      <button
        onClick={handleBack}
        style={{
          backgroundColor: 'gray',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px',
        }}
      >Назад</button>
    </div>
  );
}

export default UserDetail;
