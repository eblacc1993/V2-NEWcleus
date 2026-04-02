import AppShell from '@/components/AppShell';
import StatGrid from '@/components/StatGrid';
import { AlertList, TaskList } from '@/components/CardList';
import { alerts, commandStats, tasks } from '@/lib/data';

export default function CommandPage() {
  return (
    <AppShell title="Command Center" subtitle="Executive overview of pipeline, risk, operations, and cash movement.">
      <StatGrid items={commandStats} />
      <div className="grid cols-2 gap-top">
        <section>
          <h3 className="section-title">Priority Queue</h3>
          <AlertList items={alerts} />
        </section>
        <section>
          <h3 className="section-title">Today's Execution</h3>
          <TaskList items={tasks} />
        </section>
      </div>
    </AppShell>
  );
}
