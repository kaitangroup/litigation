import { ReactNode } from 'react';
export function InternalPage({ question, prompt, children }: { question: string; prompt: string; children: ReactNode }) {
  return (
    <>
      <section className="lex-question-row">
        <div className="question-badge">1</div>
        <div>
          <h2>{question}</h2>
          <p>{prompt}</p>
        </div>
      </section>
      {children}
    </>
  );
}
export function InfoCard({ title, children, accent = 'plain' }: { title: string; children: ReactNode; accent?: 'plain' | 'red' | 'green' | 'amber' | 'blue' }) {
  return (
    <section className={`lex-card lex-card-compact accent-${accent}`}>
      <div className="lex-card-head"><h3>{title}</h3><span className="chev">›</span></div>
      <div className="internal-card-body">{children}</div>
    </section>
  );
}
