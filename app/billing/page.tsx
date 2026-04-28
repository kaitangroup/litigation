import { LexShell } from '@/components/lex/LexShell';
import { InfoCard, InternalPage } from '@/components/lex/InternalPage';
import { billing } from '@/lib/mock-data';
export default function BillingPage() {
  return (
    <LexShell active="/billing" title="Billing" subtitle="WIP, billed, collected, and A/R">
      <InternalPage question="Are we billing the right amount and collecting on time?" prompt="Matter-level billing signals with collection visibility">
        <section className="lex-grid lex-grid-two">
          <InfoCard title="Billing overview" accent="green"><div className="mini-stat-row"><strong>$46.8k</strong><span>unbilled WIP</span></div><div className="mini-stat-row"><strong>$84.2k</strong><span>A/R outstanding</span></div></InfoCard>
          <InfoCard title="Matter signals" accent="plain"><div className="table-lite">{billing.map((row) => <div key={row.matter} className="table-lite-row"><strong>{row.matter}</strong><span>WIP ${row.wip.toLocaleString()} · A/R ${row.ar.toLocaleString()} · {row.signal}</span></div>)}</div></InfoCard>
        </section>
      </InternalPage>
    </LexShell>
  );
}
