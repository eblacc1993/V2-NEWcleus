import AppShell from '@/components/AppShell';
import { crmRecords, ledger } from '@/lib/data';

export default function CRMDetailPage({ params }: { params: { id: string } }) {
  const record = crmRecords.find((item) => item.id === params.id) ?? crmRecords[0];

  return (
    <AppShell title={record.name} subtitle="CRM detail view with profile, relationship history, active opportunities, and financial visibility.">
      <div className="grid cols-2 gap-top">
        <section className="card">
          <h3>Profile</h3>
          <p className="muted small">Type: {record.type}</p>
          <p className="muted small">Market: {record.market}</p>
          <p className="muted small">Owner: {record.owner}</p>
          <p className="muted small">Status: {record.status}</p>
          <p className="muted small">Value: {record.value}</p>
        </section>
        <section className="card">
          <h3>Next Action</h3>
          <p className="muted small">{record.nextAction}</p>
          <div className="top-space"><span className="badge">Open opportunity</span></div>
        </section>
      </div>
      <div className="grid cols-2 gap-top">
        <section>
          <h3 className="section-title">Relationship Timeline</h3>
          <div className="stack">
            <div className="card"><p className="muted small">Initial qualification completed.</p></div>
            <div className="card"><p className="muted small">Commercial structure discussed.</p></div>
            <div className="card"><p className="muted small">Awaiting next approval checkpoint.</p></div>
          </div>
        </section>
        <section>
          <h3 className="section-title">Financial Snapshot</h3>
          <div className="stack">
            {ledger.slice(0, 2).map((item) => (
              <div className="card" key={item.description}>
                <strong>{item.description}</strong>
                <p className="muted small">{item.date} · {item.amount} · {item.status}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
