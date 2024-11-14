export default function Hero(): JSX.Element {
  return (
    <section className="py-24 lg:px-16 px-6 flex lg:flex-row flex-col items-center gap-4">
      <section className="flex-1 flex justify-center">
        <img
          src="/images/hero.jpg"
          className="lg:w-[30rem] w-[25rem] rounded-[15rem] shadow-lg border-[1.5px] border-black"
        />
      </section>
      <section className="flex flex-col gap-8 flex-1 font-sour-gummy">
        <h1 className="text-6xl lg:text-start text-center">Adpot Your First Mouse</h1>
        <p className="lg:text-justify text-center lg:text-xl">
          Welcome to a world of small wonders, where you’ll find adorable pet
          mice ready to bring joy and companionship into your life. These tiny
          friends are playful, low-maintenance, and full of personality, making
          them the ideal pet for homes of any size. Whether you're looking for a
          fun-loving friend or a gentle snuggler, our selection of pet mice is
          sure to make you smile. Start your journey to find the perfect furry
          friend today!
        </p>
        <form className="flex gap-2 font-sour-gummy text-xl">
          <input
            className="py-4 px-4 border-[1.2px] border-black outline-none w-full"
            placeholder="Enter your email"
            type="email"
          />
          <input
            type="submit"
            className="py-4 px-6 bg-amber-400 border-[1.2px] border-black"
          />
        </form>
      </section>
    </section>
  );
}
