import { LexShell } from '@/components/lex/LexShell';
import { InfoCard, InternalPage } from '@/components/lex/InternalPage';
import { tasks } from '@/lib/mock-data';
export default function TasksPage() {
  return (
    <LexShell active="/tasks" title="Tasks" subtitle="Delegated work for lawyers and paralegals">
      <InternalPage question="Is delegated work moving on time?" prompt="Assigned tasks, blockers, and due-soon items">
        <section className="lex-grid lex-grid-two">
          <InfoCard title="Task pressure" accent="red"><div className="mini-stat-row"><strong>38</strong><span>active delegated tasks</span></div><div className="mini-stat-row"><strong>5</strong><span>blocked or slipping</span></div></InfoCard>
          <InfoCard title="Task queue" accent="plain"><div className="table-lite">{tasks.map((row) => <div key={row.id} className="table-lite-row"><strong>{row.title}</strong><span>{row.assignee} · {row.due} · {row.status}</span></div>)}</div></InfoCard>
        </section>
      </InternalPage>
    </LexShell>
  );
}
