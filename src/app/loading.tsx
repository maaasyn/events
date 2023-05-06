import { FiMapPin, FiUsers } from "react-icons/fi";

const LandingLoader = () => {
  const array = Array.from(Array(20).keys());
  return (
    <main className="px-4 xl:px-8 2xl:px-24 dark:text-white">
      <h1 className="text-2xl font-bold mt-4">Feed</h1>
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
        {array.map((_, idx) => (
          <li key={idx}>
            <div className="flex flex-col w-full md:w-fit p-2 rounded-lg bg-white dark:bg-gray-800 animate-pulse">
              <div className="w-full rounded-t-lg bg-slate-700 h-48 md:h-60 lg:h-64"></div>
              <div className="flex flex-row justify-between items-center mt-4">
                <div className="h-4 w-24 bg-slate-700 rounded-md"></div>
                <div className="flex items-center gap-2">
                  <FiUsers className="text-gray-600 dark:text-gray-400" />
                  <div className="h-4 w-8 bg-slate-700 rounded-md"></div>
                </div>
              </div>
              <h2 className="text-xl font-bold mt-2 text-gray-800 dark:text-white">
                <div className="h-8 w-56 bg-slate-700 rounded-md"></div>
              </h2>
              <div className="text-sm text-gray-600 mt-2 dark:text-gray-400">
                <div className="h-4 w-full bg-slate-700 rounded-md"></div>
                <div className="h-4 w-4/5 mt-2 bg-slate-700 rounded-md"></div>
                <div className="h-4 w-3/4 mt-2 bg-slate-700 rounded-md"></div>
                <div className="h-4 w-1/2 mt-2 bg-slate-700 rounded-md"></div>
              </div>
              <div className="flex items-center mt-2">
                <FiMapPin className="text-gray-600 dark:text-gray-400 mr-2" />
                <div className="h-4 w-32 bg-slate-700 rounded-md"></div>
              </div>
              <div className="flex items-center mt-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden bg-slate-700"></div>
                <div className="h-4 w-20 ml-2 bg-slate-700 rounded-md"></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default LandingLoader;
