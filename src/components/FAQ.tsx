const FAQ = ({ items }: { items: { q: string; a: string }[] }) => (
  <div className="space-y-3">
    {items.map((item, i) => (
      <details key={i} className="group border border-border rounded-lg overflow-hidden">
        <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-sans font-semibold text-foreground hover:bg-surface transition-colors">
          {item.q}
          <span className="ml-4 text-primary transition-transform group-open:rotate-45 text-xl">+</span>
        </summary>
        <div className="px-5 pb-4 text-muted-foreground leading-relaxed font-sans">
          {item.a}
        </div>
      </details>
    ))}
  </div>
);

export default FAQ;
