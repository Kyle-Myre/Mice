import Navbar from "./components/Navbar";
import Values from "./components/Values";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Mice from "./components/Mice";
import Blocks from "./components/Blocks";

export default function App(): React.JSX.Element {
  document.querySelector("body")?.setAttribute("class", "bg-amber-50");
  return (
    <>
      <header className="bg-amber-200 border-b-[1.5px] border-black">
        <Navbar />
        <Hero />
      </header>
      <main className="py-36 scrollbar-hidden">
        <Blocks />
        <Values />
        <Mice />
        <Reviews />
        <FAQ />
      </main>
      <footer></footer>
    </>
  );
}
