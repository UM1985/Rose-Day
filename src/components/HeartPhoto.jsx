import margi from "../assets/margi.jpeg";

export default function HeartPhoto() {
  return (
    <section className="flex flex-col items-center my-16 px-4">
      <div className="relative w-64 h-64 md:w-80 md:h-80 group">
        
        {/* Heart Shape */}
        <div
          className="w-full h-full overflow-hidden shadow-2xl transition duration-500 group-hover:scale-105"
          style={{
            clipPath:
              "polygon(50% 90%, 90% 50%, 75% 20%, 50% 35%, 25% 20%, 10% 50%)",
          }}
        >
          <img
            src={margi}
            alt="Margi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <p className="mt-6 text-xl md:text-2xl text-rose-600 font-semibold text-center">
        The most beautiful rose in my life 🌹
      </p>
    </section>
  );
}
