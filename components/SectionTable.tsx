import { ReactNode } from 'react';
export function SectionTable({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card table-card">
      <div className="section-head">
        <h2>{title}</h2>
      </div>
      <div className="table-wrap">{children}</div>
    </section>
  );
}
