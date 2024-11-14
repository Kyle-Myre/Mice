interface IQuestion {
  question: string;
  answer: string;
}

export default function Question(props: IQuestion): JSX.Element {
  return (
    <div className="flex flex-col gap-2 shadow-md border-[1.5px] border-black p-1">
      <h1 className="text-3xl font-sour-gummy text-center font-semibold text-amber-400">
        {props.question}
      </h1>
      <q className="font-sour-gummy text-center text-xl">{props.answer}</q>
    </div>
  );
}
