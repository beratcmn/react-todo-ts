import Header from "./components/Header";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Navbar />
      <Modal text="Are you sure?" />
      <div className="max-w-7xl mx-auto min-h-fit py-10 px-10 flex flex-col gap-y-10">
        <Header />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <Todo
            title="Todo 1"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptatibus?"
          />
          <Todo
            title="Todo 2"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptatibus?"
          />{" "}
          <Todo
            title="Todo 3"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptatibus?"
          />{" "}
          <Todo
            title="Todo 4"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptatibus?"
          />
        </div>
      </div>
    </>
  );
}

export default App;
