import { useState } from "react";
import Hero from "./components/Hero";
import HeartPhoto from "./components/HeartPhoto";
import MessageSection from "./components/MessageSection";
import Timeline from "./components/Timeline";
import SurpriseModal from "./components/SurpriseModal";
import Footer from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      
      <Hero />
      <HeartPhoto />
      <MessageSection />
      <Timeline />

      <div className="flex justify-center my-12">
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 bg-rose-500 text-white rounded-full shadow-lg hover:scale-110 transition duration-300"
        >
          Click for a Surprise ❤️
        </button>
      </div>

      <SurpriseModal open={open} setOpen={setOpen} />
      <Footer />
    </div>
  );
}

export default App;
