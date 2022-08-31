import "./App.css";

import Todo from "./components/Todos/Todo";

const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn react" />
      <Todo text="Sing Along" />
      <Todo text="Take another javascript course" />
    </div>
  );
};

export default App;
