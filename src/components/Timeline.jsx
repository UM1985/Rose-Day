import { useEffect, useState } from "react";

export default function Timeline() {
  const [offsetY, setOffsetY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    setVisible(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const events = [
    {
      title: "The Day We Met ❤️",
      description:
        "The first time we met, we looked into each other’s eyes and something just felt different. It wasn’t just a meeting — it felt like destiny gently introducing us. We spoke about our dreams, our future goals, and so many little things that slowly turned into something meaningful. In that moment, I didn’t just see you… I saw my future."
    },
    {
      title: "Our First Laugh Together 😊",
      description:
        "I still remember your Kanku Pagla into our home — that beautiful step you took, not just into the house but into my heart. And later, during that car ride, we laughed so freely. That laughter wasn’t just happiness — it was comfort, warmth, and the beginning of countless joyful memories."
    },
    {
      title: "Every Beautiful Moment Since 🌹",
      description:
        "From your cultural program where we went on that peaceful bike ride, to celebrating my birthday and your birthday together… to our Surat trip — every moment has become unforgettable. Every smile, every conversation, every second spent with you is my favorite memory. Life feels more beautiful because you are in it."
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* Parallax Background Glow */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-rose-300 opacity-20 blur-[180px] rounded-full"
        style={{
          transform: `translate(-50%, ${offsetY * 0.2}px)`
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-20 tracking-wide">
          Our Beautiful Journey 🌹
        </h2>

        <div className="relative border-l-[3px] border-rose-400/60 pl-10 space-y-16">

          {events.map((event, index) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Glowing Dot */}
              <div className="absolute -left-[14px] top-2 w-6 h-6 bg-rose-500 rounded-full shadow-[0_0_20px_rgba(244,63,94,0.8)]"></div>

              {/* Glass Card */}
              <div className="backdrop-blur-lg bg-white/60 border border-white/40 p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-500">

                <h3 className="text-2xl md:text-3xl font-semibold text-rose-500 mb-4">
                  {event.title}
                </h3>

                <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide">
                  {event.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
