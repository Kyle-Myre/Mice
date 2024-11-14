interface IMouse {
  img: string;
  name: string;
}

export default function Mouse(props: IMouse): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={props.img}
        className="w-[60rem] border-[1.5px] border-black transition-transform hover:scale-90 delay-50 ease-in"
      />
      <h1 className="text-2xl text-center font-sour-gummy font-semibold text-black">
        <span>
          <span>
            <span>{props.name}</span>
          </span>
        </span>
      </h1>
    </div>
  );
}
