import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <main className="shell">
      <Sidebar />
      <section className="content">{children}</section>
    </main>
  );
}
