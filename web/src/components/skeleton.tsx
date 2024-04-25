export const Skeleton = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-10">
      <div className="w-1/3 h-80 bg-gray-300 rounded-md"></div>

      <div className="w-1/3 flex text-center flex-col items-center gap-4">
        <div className="h-8 w-2/3 bg-gray-300 rounded"></div>
        <div className="h-20 w-2/3 bg-gray-300 rounded"></div>
        <div className="h-20 w-2/3 bg-gray-300 rounded"></div>
      </div>

      <div
        className="w-72 h-14 bg-gray-300 rounded-3xl flex items-center justify-center text-white font-medium text-lg"
      >
      </div>
      <div
        className="w-72 h-14 bg-gray-300 rounded-3xl flex items-center justify-center text-white font-medium text-lg"
      >
      </div>
    </main>
  );
};