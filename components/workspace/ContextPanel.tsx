import { ReactNode } from 'react';
export function ContextPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="context-panel card">
      <div className="context-panel-header">
        <div>
          <div className="eyebrow">Context panel</div>
          <h3>{title}</h3>
        </div>
        <button className="icon-btn" aria-label="Open actions">⋯</button>
      </div>
      <div className="context-panel-tabs">
        <button className="context-tab active">Details</button>
        <button className="context-tab">Comments</button>
        <button className="context-tab">Checklist</button>
      </div>
      <div className="context-panel-body">{children}</div>
      <div className="context-panel-footer">
        <button className="button secondary">Secondary action</button>
        <button className="button">Primary action</button>
      </div>
    </aside>
  );
}
