import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Get in touch"
        description="Questions, partnership ideas, or a school that wants a visit — reach out and a member of the team will respond."
      />

      <section className="bg-white py-16 dark:bg-[#0B111F]">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 sm:grid-cols-2">
          <div>
            <h3 className="font-serif text-lg font-medium text-[#16233F] dark:text-[#F5F1E8]">
              Address
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
              School of Law, University of Nairobi
              <br />
              Parklands Campus, Nairobi, Kenya
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium text-[#16233F] dark:text-[#F5F1E8]">
              Email
            </h3>
            <a
              href="mailto:info@wakiliwawatoto.org"
              className="mt-2 inline-block text-sm text-stone-600 hover:text-[#16233F] dark:text-stone-300 dark:hover:text-[#F5F1E8]"
            >
              info@wakiliwawatoto.org
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
