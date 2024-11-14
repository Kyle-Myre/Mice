import { useState } from "react";
import { FaBars as BackDrop } from "react-icons/fa";

export default function Navbar(): JSX.Element {
  const [show, setShow] = useState(false);
  return (
    <nav className="py-4 lg:px-12 fixed w-full bg-amber-300">
      <section className="flex flex-row items-center font-sour-gummy ">
        <section className="flex-1 text-4xl">
          <h1 className="font-semibold lg:text-start text-center">
            <span>🧀</span>Mice
          </h1>
        </section>
        <section className="flex-2 gap-4 text-2xl lg:flex hidden">
          <a className="py-2 px-4" href="#about">
            About
          </a>
          <a className="py-2 px-4" href="#features">
            Features
          </a>
          <a className="py-2 px-4" href="#reviews">
            Reviews
          </a>
          <a
            className="bg-amber-400 py-2 px-6 border-[1.5px] border-black"
            href="#FAQ"
          >
            FAQ
          </a>
        </section>
        <section className="lg:hidden px-4">
          <button onClick={() => setShow(!show)}>
            <BackDrop className="w-8 h-8" />
          </button>
        </section>
      </section>
      {show ? (
        <section className="flex flex-col text-2xl font-sour-gummy lg:hidden bg-amber-300">
          <a className="py-4 px-4 border-b-[1.5px] border-t-[1.5px] border-black" href="#about">
            About
          </a>
          <a
            className="py-4 px-4 border-b-[1.5px] border-black"
            href="#features"
          >
            Features
          </a>
          <a
            className="py-4 px-4 border-b-[1.5px] border-black"
            href="#reviews"
          >
            Reviews
          </a>
          <a className="py-4 px-6 border-b-[1.5px] border-black" href="#FAQ">
            FAQ
          </a>
        </section>
      ) : null}
    </nav>
  );
}
