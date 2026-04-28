import { LexShell } from '@/components/lex/LexShell';
import { InfoCard, InternalPage } from '@/components/lex/InternalPage';
import { communications } from '@/lib/mock-data';
export default function CommunicationsPage() {
  return (
    <LexShell active="/communications" title="Communications" subtitle="Inbox and response tracking">
      <InternalPage question="Are client and opposing counsel messages being handled?" prompt="Triage, ownership, aging, and response status across active matters">
        <section className="lex-grid lex-grid-two">
          <InfoCard title="Messages needing action" accent="red">
            <div className="mini-stat-row"><strong>14</strong><span>untriaged items</span></div>
            <div className="mini-stat-row"><strong>6</strong><span>awaiting response</span></div>
          </InfoCard>
          <InfoCard title="Inbox queue" accent="blue">
            <div className="table-lite">{communications.map((row) => <div key={row.id} className="table-lite-row"><strong>{row.subject}</strong><span>{row.from} · {row.age} · {row.status}</span></div>)}</div>
          </InfoCard>
        </section>
      </InternalPage>
    </LexShell>
  );
}
