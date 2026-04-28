export function ThresholdSection({ title, fields }: { title: string; fields: { label: string; value: string; help: string }[] }) {
  return (
    <section className="threshold-card">
      <h3>{title}</h3>
      <div className="threshold-grid">
        {fields.map((field) => (
          <div key={field.label} className="threshold-field">
            <label>{field.label}</label>
            <div className="days-input-row"><input defaultValue={field.value} /><span>days</span></div>
            <p>{field.help}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export function SimpleListCard({ title, rows }: { title: string; rows: string[] }) {
  return (
    <section className="threshold-card">
      <h3>{title}</h3>
      <div className="simple-list">{rows.map((row) => <div key={row} className="simple-list-row">{row}</div>)}</div>
    </section>
  );
}
