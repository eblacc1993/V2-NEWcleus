export function AlertList({ items }: { items: { title: string; detail: string; severity: string }[] }) {
  return (
    <div className="stack">
      {items.map((item) => (
        <div key={item.title} className="card row-between">
          <div>
            <strong>{item.title}</strong>
            <p className="muted small">{item.detail}</p>
          </div>
          <span className="badge">{item.severity}</span>
        </div>
      ))}
    </div>
  );
}

export function TaskList({ items }: { items: { title: string; team: string; due: string }[] }) {
  return (
    <div className="stack">
      {items.map((item) => (
        <div key={item.title} className="card">
          <strong>{item.title}</strong>
          <p className="muted small">{item.team} · Due {item.due}</p>
        </div>
      ))}
    </div>
  );
}
