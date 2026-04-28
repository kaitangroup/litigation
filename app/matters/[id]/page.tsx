import { notFound } from 'next/navigation';
import { matters } from '@/lib/mock-data';

export default async function MatterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const matter = matters.find((m) => m.id === id);
  if (!matter) return notFound();

  return (
    <main className="detail-shell">
      <a href="/" className="back-link">← Back to dashboard</a>
      <section className="card detail-card">
        <p className="eyebrow">Matter overview</p>
        <h1>{matter.client}</h1>
        <div className="detail-grid">
          <div><span className="muted">Matter no.</span><strong>{matter.matterNumber}</strong></div>
          <div><span className="muted">Type</span><strong>{matter.type}</strong></div>
          <div><span className="muted">Stage</span><strong>{matter.stage}</strong></div>
          <div><span className="muted">Lead lawyer</span><strong>{matter.leadLawyer}</strong></div>
          <div><span className="muted">Next deadline</span><strong>{matter.nextDeadline}</strong></div>
          <div><span className="muted">Next milestone</span><strong>{matter.nextMilestone}</strong></div>
          <div><span className="muted">Risk</span><strong>{matter.risk}</strong></div>
          <div><span className="muted">Comment</span><strong>{matter.comment}</strong></div>
        </div>
      </section>
    </main>
  );
}
