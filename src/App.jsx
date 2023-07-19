import "./App.css";
import { List } from "./Components/List/List";
import { ListItem } from "./Components/ListItem/ListItem";
import { useState } from "react";

function App() {
  const localData = JSON.parse(localStorage.getItem("todo")) || [];
  const [todo, setTodo] = useState(localData);

  const count = 0;

  const handleTodo = (evt) => {
    if (evt.target.value) {
      if (evt.keyCode == 13) {
        const user = {
          id: count + 1,
          text: evt.target.value,
          isComplated: false,
        };

        setTodo([user, ...todo]);
        localStorage.setItem("todo", JSON.stringify([user, ...todo]));
        evt.target.value = "";
      }
    }
  };

  console.log(todo);
  return (
    <div>
      <input onKeyUp={handleTodo} type="text" placeholder="Text writing!" />

      {todo.map((item) => (
        <List>
          <ListItem name={item.text} key={item.id} />
        </List>
      ))}
    </div>
  );
}

export default App;
