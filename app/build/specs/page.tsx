import AppShell from '@/components/AppShell';
import { schema } from '@/lib/data';

export default function BuildSpecsPage() {
  return (
    <AppShell title="Build Specs" subtitle="Schema, route plan, and deployment blueprint for developers.">
      <div className="stack">
        {schema.map(([table, columns]) => (
          <div key={table} className="card">
            <strong>{table}</strong>
            <p className="muted small">{columns}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
