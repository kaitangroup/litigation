import Link from 'next/link';
const items = [
  ['/', 'Overview'],
  ['/communications', 'Communications'],
  ['/tickets', 'Client tickets'],
  ['/tasks', 'Delegated tasks'],
  ['/billing', 'Billing'],
  ['/team', 'Team planning'],
  ['/workspace', 'Workspace view']
];
export function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="logo-mark">LC</div>
        <div className="brand-block">
          <div className="brand-title">Litigation Command Center</div>
          <div className="muted">Practice operations OS</div>
        </div>
      </div>
      <nav className="nav-block">
        {items.map(([href, label]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </nav>
      <div className="side-note">Original implementation inspired by modern admin workspaces, built for litigation operations.</div>
    </aside>
  );
}
