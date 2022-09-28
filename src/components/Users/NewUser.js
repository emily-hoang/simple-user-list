import { useState } from 'react';
import Card from '../UI/Card';
import styles from './NewUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const NewUser = props => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const addUserNameHandler = event => {
    setEnteredUserName(event.target.value);
  }
  const [enteredUserAge, setEnteredUserAge] = useState('');
  const addUserAgeHandler = event => {
    setEnteredUserAge(event.target.value);
  }
  const [error, setError] = useState();
  const addUserHandler = event => {
    event.preventDefault();
    if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid inputs (non-empty)!"
      })
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age (> 0)!"
      })
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName('');
    setEnteredUserAge('');
  }
  const errorHandler = () => {
    setError(null);
  }
  return <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
    <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor='userName'>Name</label>
      <input type='text' id='userName' name='userName' value={enteredUserName} onChange={addUserNameHandler}></input>
      <label htmlFor='userAge'>Age</label>
      <input type='number' id='userAge' name='userAge' value={enteredUserAge} onChange={addUserAgeHandler}></input>
      <Button type='submit'>Add user</Button>
    </form>
  </Card>
  </div>
  
}

export default NewUser;