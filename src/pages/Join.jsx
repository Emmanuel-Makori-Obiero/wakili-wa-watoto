import { useState } from "react";
import PageHeader from "../components/PageHeader";

const ROLES = ["Volunteer", "Member", "Partner organization"];

export default function Join() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="Put your legal training to work"
        description="Whether you're a University of Nairobi law student or a partner organization, there's a place for you at Wakili Wa Watoto."
      />

      <section className="bg-white py-16 dark:bg-[#0B111F]">
        <div className="mx-auto max-w-2xl px-6">
          {submitted ? (
            <div className="rounded-2xl border border-stone-200 bg-[#FAF7F1] p-8 text-center dark:border-stone-800 dark:bg-white/5">
              <h2 className="font-serif text-xl font-medium text-[#16233F] dark:text-[#F5F1E8]">
                Thank you for reaching out
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                A member of our team will follow up with next steps by email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-[#16233F] dark:text-[#F5F1E8]">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-transparent px-4 py-2.5 text-sm text-[#16233F] outline-none focus:border-[#16233F] dark:border-stone-700 dark:text-[#F5F1E8] dark:focus:border-[#C6902E]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#16233F] dark:text-[#F5F1E8]">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-transparent px-4 py-2.5 text-sm text-[#16233F] outline-none focus:border-[#16233F] dark:border-stone-700 dark:text-[#F5F1E8] dark:focus:border-[#C6902E]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#16233F] dark:text-[#F5F1E8]">
                  I'm interested in joining as a
                </label>
                <div className="mt-2 flex flex-wrap gap-3">
                  {ROLES.map((role) => (
                    <label
                      key={role}
                      className="flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-600 dark:border-stone-700 dark:text-stone-300"
                    >
                      <input type="radio" name="role" value={role} required />
                      {role}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#16233F] dark:text-[#F5F1E8]">
                  Tell us a bit about yourself
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-transparent px-4 py-2.5 text-sm text-[#16233F] outline-none focus:border-[#16233F] dark:border-stone-700 dark:text-[#F5F1E8] dark:focus:border-[#C6902E]"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#16233F] px-7 py-3.5 text-sm font-medium text-[#FAF7F1] transition-colors hover:bg-[#1F2F52] dark:bg-[#C6902E] dark:text-[#16233F] dark:hover:bg-[#D6A143]"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
