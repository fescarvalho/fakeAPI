import { memo } from "react";

function UserComponent({ id, name, email }) {
  return (
    <li>
      Id:{id} | Name:{name} | Email:{email}
    </li>
  );
}

export const User = memo(UserComponent, (previousProps, currentProps) => {
  return Object.is(previousProps.users, currentProps.users);
});

/* 
  1- Components que nao recebem props
  2- Components que renderizam muito frequetemente
  3- Components que renderizam com as mesmas props
  4- Components grandes
 */
