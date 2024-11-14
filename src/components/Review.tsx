interface IReview {
  name: string;
  rating: string;
  review: string;
}

export default function Review(props: IReview): JSX.Element {
  return (
    <div className="flex flex-col gap-2 shadow-md border-[1.5px] border-black p-1">
      <h1 className="text-3xl font-sour-gummy font-semibold text-amber-400 text-center">
        {props.name}
      </h1>
      <div className="text-2xl text-center">
        <p>{props.rating}</p>
      </div>
      <q className="font-sour-gummy text-center text-xl">{props.review}</q>
    </div>
  );
}
