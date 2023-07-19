import React from "react";

export const ListItem = ({ name, key }) => {
  return (
    <li key={key}>
      <h2>{name}</h2>
      <button>EDIT</button>
      <button>DELETE</button>
    </li>
  );
};
