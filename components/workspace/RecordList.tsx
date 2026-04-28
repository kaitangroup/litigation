import { matters } from '@/lib/mock-data';
export function RecordList() {
  return (
    <section className="record-list card">
      <div className="record-list-head">
        <div>
          <div className="eyebrow">Matters</div>
          <h2>Open portfolio</h2>
        </div>
        <button className="button secondary">Filters</button>
      </div>
      <div className="record-search-row">
        <input className="search-input" placeholder="Search matter, client, or owner" />
        <button className="icon-btn" aria-label="Saved views">☰</button>
      </div>
      <div className="record-table-wrap">
        <table>
          <thead>
            <tr><th>Client</th><th>Lead</th><th>Deadline</th><th>Risk</th></tr>
          </thead>
          <tbody>
            {matters.map((matter, index) => (
              <tr key={matter.id} className={index === 0 ? 'selected-row' : ''}>
                <td>
                  <div className="cell-title">{matter.client}</div>
                  <div className="cell-subtitle">{matter.matterNumber}</div>
                </td>
                <td>{matter.leadLawyer}</td>
                <td>{matter.nextDeadline}</td>
                <td><span className={`pill ${matter.risk.toLowerCase()}`}>{matter.risk}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
