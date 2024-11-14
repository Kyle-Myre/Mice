import faq      from "../constants/faq.json";
import Question from "./Question";

export default function FAQ(): JSX.Element {
  return (
    <section className="py-28 lg:px-16 px-2 flex flex-col gap-12">
      <h1 className="text-6xl text-center font-sour-gummy">FAQ</h1>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {faq.map((question, index) => {
          return (<Question question={question.question} answer={question.answer} key={index}/>);
        })}
      </section>
    </section>
  );
}
