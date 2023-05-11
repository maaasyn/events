// // import { redirect } from "next/navigation";
// // import { cookies } from "next/headers";
// // import { cookies } from "next/";
// import { revalidatePath } from "next/cache";
// import { zact } from "zact/server";
// import { z } from "zod";

// const handleSubmit = zact(
//   z.object({ name: z.string().min(2), email: z.string().email() })
// )(async (input) => {
//   "use server";
//   return { message: `hello ${input.email}` };
// });

// export default async function Page(props) {
//   console.log({ props });
//   return (
//     <form action={handleSubmit} className="flex flex-col space-y-4">
//       <div className="flex flex-col space-y-1">
//         <label htmlFor="name" className="text-sm font-medium leading-none">
//           Name
//         </label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           className="border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent"
//         />
//       </div>
//       <div className="flex flex-col space-y-1">
//         <label htmlFor="email" className="text-sm font-medium leading-none">
//           Email
//         </label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           className="border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent"
//         />
//         <button
//           type="submit"
//           className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
//           Save
//         </button>
//       </div>
//     </form>
//   );
// }

export default function Page() {
  return null;
}
