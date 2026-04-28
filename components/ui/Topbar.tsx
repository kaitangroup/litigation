export function Topbar({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Practice operations</p>
        <h1>{title}</h1>
        <p className="muted lead-copy">{subtitle}</p>
      </div>
      <div className="top-actions">
        <a className="button secondary" href="/api/quickbooks/connect">Connect QuickBooks</a>
        <button className="button">New item</button>
      </div>
    </header>
  );
}
