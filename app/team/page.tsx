import { LexShell } from '@/components/lex/LexShell';
import { InfoCard, InternalPage } from '@/components/lex/InternalPage';
import { teamCapacity } from '@/lib/mock-data';
export default function TeamPage() {
  return (
    <LexShell active="/team" title="Capacity" subtitle="Weekly planning and workload balance">
      <InternalPage question="Does the team have the capacity to stay ahead?" prompt="Planned utilization and manager view of workload concentration">
        <section className="lex-grid lex-grid-two">
          <InfoCard title="Capacity pressure" accent="blue"><div className="table-lite">{teamCapacity.map((person) => <div key={person.name} className="capacity-row"><strong>{person.name}</strong><div className="capacity-track"><span style={{ width: `${person.utilization}%` }} /></div><em>{person.utilization}%</em></div>)}</div></InfoCard>
          <InfoCard title="Manager notes" accent="plain"><div className="note-panel"><p>One lawyer is above 90% planned utilization.</p><p>Two paralegal-heavy matters should be rebalanced before next week.</p><textarea className="note-area" defaultValue="Weekly staffing note..." /></div></InfoCard>
        </section>
      </InternalPage>
    </LexShell>
  );
}
