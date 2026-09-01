import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signupSchema = z.object({
  name: z
    .string() // name should be a string
    .min(1, "Name is required") // name should not be empty
    .max(100, "Name must be less than 100 characters"), // name should not exceed 100 characters
  email: z.email("Invalid email address"), // email should be a valid email address
  password: z.string().min(8, "Password must be at least 8 characters"), // password should be at least 8 characters
  url: z.url("Invalid URL").optional(), // url should be a valid URL if provided
});

export default function SignupPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(signupSchema), // use zod schema for validation
    mode: "onSubmit", // validate on submit
  });

  console.log(formState.errors); // log form errors to the console

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Create an account
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Sign up to get started.
        </p>

        {/* Error UI placeholder - static for now, hook it up to state later */}

        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </span>
            <input
              {...register("name")}
              name="name"
              type="text"
              placeholder="Jane Doe"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-gray-400"
            />
            {formState.errors["name"] && (
              <div
                role="alert"
                className="mt-6 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300"
              >
                {formState.errors["name"].message}
              </div>
            )}
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </span>
            <input
              {...register("email")}
              name="email"
              type="text"
              placeholder="you@example.com"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-gray-400"
            />
            {formState.errors["email"] && (
              <div
                role="alert"
                className="mt-6 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300"
              >
                {formState.errors["email"].message}
              </div>
            )}
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </span>
            <input
              {...register("password")}
              name="password"
              type="password"
              placeholder="••••••••"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-gray-400"
            />
            {formState.errors["password"] && (
              <div
                role="alert"
                className="mt-6 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300"
              >
                {formState.errors["password"].message}
              </div>
            )}
          </label>

          <button
            type="submit"
            className="mt-2 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Sign up
          </button>
        </form>
      </div>
    </main>
  );
}
