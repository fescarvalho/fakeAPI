import { User } from "./User";
import { memo } from "react";

function UsersComponent({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <User key={user.id} id={user.id} name={user.name} email={user.email} />
      ))}
    </ul>
  );
}

export const Users = memo(UsersComponent);
