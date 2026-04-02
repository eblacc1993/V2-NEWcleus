import AppShell from '@/components/AppShell';
import { users } from '@/lib/data';

export default function AdminUsersPage() {
  return (
    <AppShell title="Admin Users" subtitle="Invite flows, role controls, and access-state governance.">
      <div className="stack">
        {users.map((user) => (
          <div key={user.name} className="card row-between wrap">
            <div>
              <strong>{user.name}</strong>
              <p className="muted small">{user.role} · {user.market}</p>
            </div>
            <span className="badge">{user.state}</span>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
