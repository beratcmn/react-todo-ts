interface ButtonProps {
  text: string;
  type: number; //? 1 Primary, 2 Secondary
}

function Button(props: ButtonProps) {
  const color =
    props.type === 1
      ? "bg-green-500"
      : props.type === 2
      ? "bg-white"
      : "bg-red-500";

  const textColor =
    props.type === 1
      ? "text-white"
      : props.type === 2
      ? "text-green-500"
      : "text-red-500";

  return (
    <button
      className={
        color +
        " rounded-lg drop-shadow-lg w-fit px-5 py-2 place-self-end transition-transform duration-300 hover:scale-110 focus:scale-90"
      }
      onClick={() => {
        console.log("Task Completed!");
      }}
    >
      <p className={textColor + " font-medium"}>{props.text}</p>
    </button>
  );
}

export default Button;
