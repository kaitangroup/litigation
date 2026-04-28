import { LexShell } from '@/components/lex/LexShell';
import { InternalPage, InfoCard } from '@/components/lex/InternalPage';
import { matters, communications, tasks } from '@/lib/mock-data';
const matter = matters[0];
export default function WorkspacePage() {
  return (
    <LexShell active="/workspace" title="Cases" subtitle="Split-pane matter workspace">
      <InternalPage question="Can we review one matter without losing firm context?" prompt="Selected matter, related work, and supporting detail in one workspace">
        <section className="workspace-lex-grid">
          <InfoCard title="Open portfolio" accent="plain">
            <div className="table-lite">{matters.map((m, i) => <div key={m.id} className={`table-lite-row ${i===0?'selected-lite-row':''}`}><strong>{m.client}</strong><span>{m.matterNumber} · {m.leadLawyer} · {m.nextDeadline}</span></div>)}</div>
          </InfoCard>
          <InfoCard title={matter.client} accent="red">
            <div className="detail-kpi-strip"><div><span>Deadline</span><strong>{matter.nextDeadline}</strong></div><div><span>Milestone</span><strong>{matter.nextMilestone}</strong></div><div><span>Risk</span><strong>{matter.risk}</strong></div></div>
            <div className="workspace-columns"><div className="table-lite">{communications.slice(0,3).map((c) => <div key={c.id} className="table-lite-row"><strong>{c.subject}</strong><span>{c.from} · {c.status}</span></div>)}</div><div className="table-lite">{tasks.slice(0,3).map((t) => <div key={t.id} className="table-lite-row"><strong>{t.title}</strong><span>{t.assignee} · {t.status}</span></div>)}</div></div>
          </InfoCard>
          <InfoCard title="Context panel" accent="blue">
            <div className="note-panel"><p>Checklist: 9 of 12 complete.</p><p>Billing issue remains open.</p><p>Discovery response due in 5 days.</p><textarea className="note-area" defaultValue="Matter context note..." /></div>
          </InfoCard>
        </section>
      </InternalPage>
    </LexShell>
  );
}
