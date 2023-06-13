import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // States
  const [enterName, setEnterName] = useState("");
  const [enterAge, setEnterAge] = useState("");

  // handlers
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enterAge, enterName);
    setEnterAge("");
    setEnterName("");
  };
  const nameHandler = (event) => {
    setEnterName(event.target.value);
  };
  const ageHandler = (event) => {
    setEnterAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username"> Username</label>
        <input
          id="username"
          type="text"
          value={enterName}
          onChange={nameHandler}
        />
        <label htmlFor="age"> Age(Years)</label>
        <input id="age" type="number" value={enterAge} onChange={ageHandler} />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
