import { matters, communications, tasks } from '@/lib/mock-data';
const matter = matters[0];
export function RecordDetail() {
  return (
    <section className="record-detail card">
      <div className="record-detail-header">
        <div>
          <div className="eyebrow">Selected matter</div>
          <h2>{matter.client}</h2>
          <p className="muted">{matter.type} · {matter.stage} · Lead: {matter.leadLawyer}</p>
        </div>
        <div className="detail-actions">
          <button className="button secondary">Add note</button>
          <button className="button">Create task</button>
        </div>
      </div>
      <div className="detail-kpis">
        <div><span className="muted">Next deadline</span><strong>{matter.nextDeadline}</strong></div>
        <div><span className="muted">Next milestone</span><strong>{matter.nextMilestone}</strong></div>
        <div><span className="muted">Open tasks</span><strong>{matter.openTasks}</strong></div>
        <div><span className="muted">A/R</span><strong>${matter.arOutstanding.toLocaleString()}</strong></div>
      </div>
      <div className="detail-section-grid">
        <section className="inner-card">
          <div className="inner-head"><h3>Recent communications</h3></div>
          <div className="stack-list">
            {communications.slice(0, 3).map((item) => (
              <div className="stack-item" key={item.id}>
                <strong>{item.subject}</strong>
                <span className="muted">{item.from} · {item.age}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="inner-card">
          <div className="inner-head"><h3>Delegated tasks</h3></div>
          <div className="stack-list">
            {tasks.slice(0, 3).map((item) => (
              <div className="stack-item" key={item.id}>
                <strong>{item.title}</strong>
                <span className="muted">{item.assignee} · {item.status}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="inner-card notes-card">
        <div className="inner-head"><h3>Manager progress note</h3></div>
        <textarea className="note-area" defaultValue={matter.comment} />
      </section>
    </section>
  );
}
