export default function SurpriseModal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-4 text-gray-500 text-xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-rose-600 mb-4">
          For You, Margi ❤️
        </h2>

        <p className="text-gray-700 text-lg">
          No matter how many roses I give you, nothing compares to the beauty you bring into my life.
        </p>
      </div>
    </div>
  );
}
