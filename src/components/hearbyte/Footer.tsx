const Footer = () => (
  <footer className="relative mt-12 border-t border-border/60 bg-background/60 px-6 py-10">
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
      <div className="font-display text-lg font-black tracking-wide">
        <span className="text-glow-magenta">HEART</span>
        <span className="text-neon-cyan text-glow-cyan">BYTE</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Tips for the best listening experience from your headphones &amp; earbuds.
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} HearByte
      </p>
    </div>
  </footer>
);

export default Footer;