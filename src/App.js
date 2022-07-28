import { Task } from "./Task";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Task title="Title 1" description="Description 1" lastCompletionDate="7/26/2022" priority="6" />
        <Task title="Title 2" description="Description 2" lastCompletionDate="7/22/2022" priority="2" />
        <Task title="Title 3" description="Description 3" lastCompletionDate="7/23/2022" priority="3" />
        <Task title="Title 4" description="Description 4" lastCompletionDate="7/24/2022" priority="4" />
      </header>
    </div>
  );
}

export default App;
