import { PropsWithChildren } from "react";

export const SectionHeader = ({ children }: PropsWithChildren) => (
  <p className="mt-16 mb-4 font-mono text-shadow text-neutral-400 dark:text-neutral-600 text-2xl opacity-75">
    {children}
  </p>
);

export const WithArrow = ({ children }: PropsWithChildren) => (
  <p className="relative pl-7 text-neutral-600 dark:text-neutral-400 text-xl before:content-['↳'] before:text-neutral-300 dark:before:text-neutral-600 before:absolute before:block before:left-0 before:top-1/2 before:-translate-y-1/2">
    {children}
  </p>
);
