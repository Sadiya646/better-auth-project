import Link from "next/image";

export default function Home() {
  return (
     <main className="flex min-h-screen items-center justify-center bg-[#f7f7ff] px-4">

      <div className="text-center">

        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Our Website!
        </h1>

        <p className="mt-4 text-gray-500">
          Manage your account easily and securely.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <a
            href="/sign-in"
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600"
          >
            Sign In
          </a>

          <a
            href="/sign-up"
            className="rounded-xl border border-violet-600 px-6 py-3 font-semibold text-violet-600 transition hover:bg-violet-50"
          >
            Sign Up
          </a>

        </div>

      </div>

    </main>
  );
}
