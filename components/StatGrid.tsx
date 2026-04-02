export default function StatGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid cols-4">
      {items.map((item) => (
        <section key={item.label} className="card">
          <p className="muted small">{item.label}</p>
          <h3>{item.value}</h3>
        </section>
      ))}
    </div>
  );
}
