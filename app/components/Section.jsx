export default function Section({ id, title, description, bg }) {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center px-6 ${bg}`}
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
          {title}
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}