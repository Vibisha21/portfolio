import heroImg from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <img
        src={heroImg}
        alt="Vibisha"
        className="w-70 h-100 rounded-full object-cover mb-7"
      />

      <h1 className="text-6xl font-bold">
        Hi, I'm Vibisha
      </h1>

      <p className="mt-4 text-gray-600">
        Scroll to begin the journey
      </p>
    </section>
  );
}