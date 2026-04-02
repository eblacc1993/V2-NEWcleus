import Link from 'next/link';
import { ReactNode } from 'react';

const nav = [
  { href: '/command', label: 'Command Center' },
  { href: '/crm', label: 'CRM' },
  { href: '/finance', label: 'Finance' },
  { href: '/admin/users', label: 'Admin' },
  { href: '/build/specs', label: 'Build Specs' },
];

export default function AppShell({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-card">
          <p className="eyebrow">V2 Official</p>
          <h1>NEWCLEUS</h1>
          <p className="muted">Command-grade operating system</p>
        </div>
        <nav className="nav-list">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Live product preview</p>
            <h2>{title}</h2>
            {subtitle ? <p className="muted">{subtitle}</p> : null}
          </div>
          <div className="topbar-actions">
            <button className="button button-secondary">Search</button>
            <button className="button">New Record</button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
