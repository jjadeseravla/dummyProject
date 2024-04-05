import React from "react";
import Card from "../UI/Card";

const UsersList = props => {

  return (
    <Card>
        {props.users.length === 0 && (
        <div style={{ textAlign: 'center', color: 'green' }}>
          <h2>there are no posts yet</h2>
          <p>Start adding some</p>
        </div>
      )}
    <ul>
      {props.users.map((user, index) => {
        return (
          <li key={index}>
            {user.name}
            ({user.age} years old)
          </li>
        )
      })}
      </ul>
      </Card>
  )
}

export default UsersList;