import Link from 'next/link';
import AppShell from '@/components/AppShell';
import { crmRecords } from '@/lib/data';

export default function CRMPage() {
  return (
    <AppShell title="CRM Workspace" subtitle="Clients, operators, dealers, and enterprise relationships in one system.">
      <div className="stack">
        {crmRecords.map((record) => (
          <Link href={`/crm/${record.id}`} key={record.id} className="card link-card">
            <div className="row-between wrap">
              <div>
                <strong>{record.name}</strong>
                <p className="muted small">{record.type} · {record.market} · Owner: {record.owner}</p>
              </div>
              <div className="align-right">
                <div className="badge">{record.status}</div>
                <p className="muted small">{record.value}</p>
              </div>
            </div>
            <p className="muted small top-space">Next action: {record.nextAction}</p>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
