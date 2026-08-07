type Props = {
  children: React.ReactNode;
  /** Set false for the first subheading in a section (no extra top margin). */
  spaced?: boolean;
};

const SubHeading = ({ children, spaced = true }: Props) => (
  <p
    className={`mb-4 text-xs font-semibold uppercase tracking-widest text-neon-cyan ${
      spaced ? "mt-10" : ""
    }`}
  >
    {children}
  </p>
);

export default SubHeading;
