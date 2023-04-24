import { FiMapPin, FiUsers } from "react-icons/fi";

export default function IdSkeleton() {
  return (
    <div className="flex flex-col items-center w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
      <div className="w-full md:w-2/3">
        <div className="h-80 bg-slate-700 rounded-md animate-pulse"></div>
      </div>

      <div className="flex flex-col justify-between p-4 w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white my-2 animate-pulse">
          <div className="h-8 w-48 bg-slate-700 rounded-md animate-pulse"></div>
        </h1>
        <div className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
          <div className="h-4 w-64 bg-slate-700 rounded-md animate-pulse"></div>
        </div>

        <div className="flex items-center my-2 animate-pulse">
          <FiUsers className="text-gray-600 dark:text-gray-400 mr-2" />
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <div className="h-4 w-24 bg-slate-700 rounded-md animate-pulse"></div>
          </div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 animate-pulse">
          <div className="h-4 w-32 bg-slate-700 rounded-md animate-pulse"></div>
        </div>

        <div className="flex items-center my-2 animate-pulse">
          <FiMapPin className="text-gray-600 dark:text-gray-400 mr-2" />
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <div className="h-4 w-40 bg-slate-700 rounded-md animate-pulse"></div>
          </div>
        </div>

        <div className="flex items-center my-2 animate-pulse">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <div className="h-8 w-8 rounded-full bg-slate-700"></div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 ml-2 animate-pulse">
            <div className="h-4 w-24 bg-slate-700 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full bg-gray-100 dark:bg-gray-900 p-4">
        <h2 className="text-m text-gray-800 dark:text-white mr-4">
          <div className="h-4 w-20 bg-slate-700 rounded-md animate-pulse"></div>
        </h2>
        <h2 className="text-m text-gray-800 dark:text-white mr-4">
          <div className="h-4 w-16 bg-slate-700 rounded-md animate-pulse"></div>
        </h2>
        <h2 className="text-m text-gray-800 dark:text-white mr-4">
          <div className="h-4 w-24 bg-slate-700 rounded-md animate-pulse"></div>
        </h2>
        <h2 className="text-m text-gray-800 dark:text-white mr-4">
          <div className="h-4 w-28 bg-slate-700 rounded-md animate-pulse"></div>
        </h2>
        <h2 className="text-m text-gray-800 dark:text-white mr-4">
          <div className="h-4 w-28 bg-slate-700 rounded-md animate-pulse"></div>
        </h2>
        <h2 className="text-m text-gray-800 dark:text-white mr-4">
          <div className="h-4 w-28 bg-slate-700 rounded-md animate-pulse"></div>
        </h2>
      </div>
      <div className="p-4 md:w-2/3">
        <div className="bg-white dark:bg-gray-800">
          <div className="prose dark:prose-invert max-w-none">
            <div className="h-6 bg-slate-700 rounded-md animate-pulse mb-4"></div>
            <div className="h-6 bg-slate-700 rounded-md animate-pulse mb-4"></div>
            <div className="h-6 bg-slate-700 rounded-md animate-pulse mb-4"></div>
            <div className="h-6 bg-slate-700 rounded-md animate-pulse mb-4"></div>
            <div className="h-6 bg-slate-700 rounded-md animate-pulse mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
