import features from "../constants/features.json";
import Value from "./Value";

export default function Values(): JSX.Element {
  return (
    <section className="py-36 lg:px-16 px-4 flex flex-col gap-6">
      <h1 className="text-6xl text-center font-sour-gummy">Values</h1>
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        {features.map((feature, index) => {
          return (
            <Value
              title={feature.title}
              description={feature.description}
              key={index}
            />
          );
        })}
      </section>
    </section>
  );
}
