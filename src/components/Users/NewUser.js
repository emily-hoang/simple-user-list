import { useState } from 'react';
import Card from '../UI/Card';
import styles from './NewUser.module.css';
import Button from '../UI/Button';

const NewUser = () => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const addUserNameHandler = event => {
    setEnteredUserName(event.target.value);
  }
  const [enteredUserAge, setEnteredUserAge] = useState('');
  const addUserAgeHandler = event => {
    setEnteredUserName(event.target.value);
  }
  const addUserHandler = event => {
    if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      return;
    }
    if (+enteredUserAge < 1) return;
    // prevent the browser from sending the request -> the page won't reload
    event.preventDefault();
    setEnteredUserName('');
    setEnteredUserAge('');
  }
  return <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
      <label for='userName'>Name</label>
      <input type='text' id='userName' name='userName' value={enteredUserName} onChange={addUserNameHandler}></input>
      <label for='userAge'>Age</label>
      <input type='number' id='userAge' name='userAge' value={enteredUserAge} onChange={addUserAgeHandler}></input>
      <Button type='submit'>Add user</Button>
    </form>
  </Card>
}

export default NewUser;