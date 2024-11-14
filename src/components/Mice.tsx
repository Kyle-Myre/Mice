import mice from "../constants/mice.json";
import Mouse from "./Mouse";

export default function Mice(): JSX.Element {
  return (
    <div className="py-36 lg:px-16 px-2 flex flex-col gap-6">
      <h1 className="text-6xl text-center font-sour-gummy">Our Mice</h1>
      <section className="flex lg:flex-row flex-col gap-2 items-center justify-center">
        {mice.map((mouse, index) => {
          return <Mouse key={index} img={mouse.img} name={mouse.name} />;
        })}
      </section>
    </div>
  );
}
