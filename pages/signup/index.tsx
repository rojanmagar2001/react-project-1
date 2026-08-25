import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validate = (): boolean => {
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return true;
    }

    // Add more validation logic here if needed (e.g., email format, password strength)

    if (name.length < 2) {
      setError("Name must be at least 2 characters long.");
      return true;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return true;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return true;
    }

    setError(null);
    return false;
  };

  const handleSubmit = () => {
    const validation = validate();

    if (validation) {
      return;
    }

    alert(
      `Form submitted with name: ${name}, email: ${email}, password: ${password}`,
    );
  };

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
        {error && (
          <div
            role="alert"
            className="mt-6 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300"
          >
            {error}
          </div>
        )}

        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </span>
            <input
              name="name"
              type="text"
              placeholder="Jane Doe"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-gray-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </span>
            <input
              name="email"
              type="text"
              placeholder="you@example.com"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </span>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
