import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto min-h-fit py-10 flex flex-col gap-y-10">
        <Header />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;
