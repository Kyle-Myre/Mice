interface IValue {
  title: string;
  description: string;
}

export default function Value(props: IValue): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl text-center font-sour-gummy font-semibold text-amber-400">
        <span>🧀</span><span>{props.title}</span>
      </h1>
      <p className="text-center font-sour-gummy text-xl">{props.description}</p>
    </div>
  );
}
