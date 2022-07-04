import Button from "./Button";

interface TodoProps {
  title: string;
  description: string;
}

function Todo(props: TodoProps) {
  return (
    <div className="w-full min-h-[12rem] bg-gray-200 rounded-xl drop-shadow-2xl hover:outline hover:outline-green-500 hover:-translate-y-5 transition-transform duration-300">
      <div className="w-full h-full px-10 py-5 flex flex-col gap-y-5">
        <h2 className="font-semibold text-2xl text-gray-700">{props.title}</h2>
        <p className="text-gray-600">{props.description}</p>
        <Button text="Tamamla" type={1} />
      </div>
    </div>
  );
}

export default Todo;
