import Link from 'next/link';
import { ReactNode } from 'react';
const items = [
  ['/', 'Today', '57', '◔'],
  ['/milestones', 'Milestones', '', '⌘'],
  ['/workspace', 'Cases', '', '▣'],
  ['/team', 'Capacity', '', '◌'],
  ['/calendar', 'Calendar', '', '◫'],
  ['/communications', 'Communications', '85', '✉'],
  ['/tickets', 'Tickets', '8', '◎'],
  ['/tasks', 'Tasks', '', '☑'],
  ['/court-watch', 'Court watch', '', '↗'],
  ['/potentials', 'Potentials', '', '✦'],
  ['/marketing', 'Marketing', '', '⌁'],
  ['/billing', 'Billing', '', '$'],
  ['/ar-aging', 'A/R aging', '', '$'],
  ['/financials', 'Financials', '', '$'],
  ['/team-directory', 'Team', '', '◔'],
  ['/templates', 'Templates', '', '▤'],
  ['/settings', 'Settings', '', '⚙']
] as const;
export function LexShell({ title, subtitle, children, active, actionLabel = 'Save changes' }: { title: string; subtitle: string; children: ReactNode; active: string; actionLabel?: string }) {
  return (
    <main className="lex-shell">
      <aside className="lex-sidebar">
        <div className="lex-sidebar-scroll">
          <nav className="lex-nav compact-nav">
            {items.map(([href, label, count, icon]) => (
              <Link key={href} className={active === href ? 'active' : ''} href={href}>
                <span className="nav-item-left"><i className="nav-icon" aria-hidden="true">{icon}</i><b>{label}</b></span>
                {count ? <em>{count}</em> : null}
              </Link>
            ))}
          </nav>
          <div className="sidebar-avatar">N</div>
        </div>
      </aside>
      <section className="lex-content-frame">
        <div className="lex-content-scroll settings-style-scroll no-top-gap">
          <header className="lex-header internal-header action-header compact-header">
            <div>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
            <button className="save-btn">{actionLabel}</button>
          </header>
          {children}
        </div>
      </section>
    </main>
  );
}
