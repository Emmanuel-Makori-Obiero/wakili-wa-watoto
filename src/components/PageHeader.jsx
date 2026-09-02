export default function PageHeader({ title, description }) {
  return (
    <section className="border-b border-stone-200 bg-[#FAF7F1] py-16 dark:border-stone-800 dark:bg-[#0E1626]">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-serif text-4xl font-medium leading-tight text-[#16233F] sm:text-[2.75rem] dark:text-[#F5F1E8]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
