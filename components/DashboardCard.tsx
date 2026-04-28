import { ReactNode } from 'react';
export function DashboardCard({ title, value, meta }: { title: string; value: ReactNode; meta?: string }) {
  return (
    <section className="card stat-card">
      <div className="eyebrow">{title}</div>
      <div className="stat-value">{value}</div>
      {meta ? <div className="muted">{meta}</div> : null}
    </section>
  );
}
