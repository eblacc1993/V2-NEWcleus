import AppShell from '@/components/AppShell';
import { ledger } from '@/lib/data';

export default function FinancePage() {
  return (
    <AppShell title="Finance Control" subtitle="Invoices, collections, approvals, commissions, and payout logic.">
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ledger.map((row) => (
              <tr key={`${row.date}-${row.description}`}>
                <td>{row.date}</td>
                <td>{row.type}</td>
                <td>{row.description}</td>
                <td>{row.amount}</td>
                <td><span className="badge">{row.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
