import { useState } from 'react';
import './App.css';
import NewUser from './components/Users/NewUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUserList(previousUserList => {
      return [
        ...previousUserList,
        {
        name: userName,
        age: userAge,
        id: Math.random().toString()}];
    })
  }
  return (
    <div>
      <NewUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
} 

export default App;
