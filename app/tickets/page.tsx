import { LexShell } from '@/components/lex/LexShell';
import { InfoCard, InternalPage } from '@/components/lex/InternalPage';
import { tickets } from '@/lib/mock-data';
export default function TicketsPage() {
  return (
    <LexShell active="/tickets" title="Tickets" subtitle="Client trouble tickets and service issues">
      <InternalPage question="Are client issues being resolved before they escalate?" prompt="SLA visibility, ownership, and issue queues">
        <section className="lex-grid lex-grid-two">
          <InfoCard title="Open tickets" accent="amber"><div className="mini-stat-row"><strong>9</strong><span>open across matters</span></div><div className="mini-stat-row"><strong>2</strong><span>inside escalation window</span></div></InfoCard>
          <InfoCard title="Ticket board" accent="plain"><div className="table-lite">{tickets.map((row) => <div key={row.id} className="table-lite-row"><strong>{row.title}</strong><span>{row.client} · {row.owner} · {row.sla}</span></div>)}</div></InfoCard>
        </section>
      </InternalPage>
    </LexShell>
  );
}
