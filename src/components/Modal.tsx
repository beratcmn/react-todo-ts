import Button from "./Button";

interface ModalProps {
  //   isOpen: boolean;
  text: string;
}

function Modal(props: ModalProps) {
  return (
    <div className="z-20 absolute top-0 left-0 w-full h-screen bg-gray-500/50 flex items-center justify-center">
      <div className="z-30 min-w-[30vw] px-5 py-10 h-1/5 bg-white rounded-lg drop-shadow-lg flex flex-col items-center justify-center">
        <p className="text-xl font-medium">{props.text}</p>

        <div className="mt-auto flex flex-row w-3/5 space-x-10 justify-center">
          <Button text="Hayır" type={2} />
          <Button text="Evet" type={1} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
