import React from "react";

const AddUser = (props) => {
    const addUserHandler = (e) => {
        e.preventDefault();
    }

    return (
      <div>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input id="username" type="text" />
          <label htmlFor="age"> Age(Years)</label>
          <input id="age" type="text" />
          <button type="submit">Add user</button>
        </form>
      </div>
    );
};

export default AddUser;