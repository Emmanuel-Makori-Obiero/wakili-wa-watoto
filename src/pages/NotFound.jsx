import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="bg-[#FAF7F1] py-24 dark:bg-[#0E1626]">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h1 className="font-serif text-4xl font-medium text-[#16233F] dark:text-[#F5F1E8]">
          Page not found
        </h1>
        <p className="mt-4 text-stone-600 dark:text-stone-300">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-[#16233F] px-7 py-3.5 text-sm font-medium text-[#FAF7F1] hover:bg-[#1F2F52] dark:bg-[#C6902E] dark:text-[#16233F] dark:hover:bg-[#D6A143]"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
