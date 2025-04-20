import { SectionHeader, WithArrow } from "@/components/atoms";
import socials from "@/lib/socials";


export default function Home() {
  return (
    <>
      <section>
        <SectionHeader>/me</SectionHeader>
        <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text mb-2.5">
          Luis Reche
        </h1>
        <p className="text-2xl text-black dark:text-white mb-3 container-ch">
          Data Analyst
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-xl leading-7">
          Currently studying in DataCamp and preparing for PL-300 and AZ-900 certificates
        </p>
      </section>
      <section>
        <SectionHeader>/elsewhere</SectionHeader>
        <p className="flex flex-wrap text-lg gap-4 text-black dark:text-white mb-3 container-ch">
          {socials.map(({ name, href }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer">
              {name}
            </a>
          ))}
        </p>
      </section>
      <section>
        <SectionHeader>/now</SectionHeader>
        <WithArrow>Learning while working on small side projects.</WithArrow>
        <br />
        <WithArrow>
          Growing as an analyst doing courses in the{" "}
          <a href="https://www.mooc.fi/en/" target="_blank" rel="noreferrer">
            University of Helsinki 🦄
          </a>
          .
        </WithArrow>
      </section>
      <section>
        <SectionHeader>/before</SectionHeader>
        <WithArrow>
          Pharmacist on{" "}
          <a href="https://farmaciaportals.es/" target="_blank" rel="noreferrer">
            Farmacia Portals ☄️
          </a>
          .
        </WithArrow>
        <br />
        <WithArrow>
        Carrying out direct sales to customers and specializing in generating product listings using SQL language. ✳️.
        </WithArrow>
        <br />
        <WithArrow>
        Automating routine processes with Python. {" "}
        </WithArrow>
      </section>
      <section>
        <SectionHeader>/projects</SectionHeader>
        <p className="flex flex-wrap text-lg gap-4 mb-3 container-ch">
          
        </p>
      </section>
    </>
  );
}
