export default function Section({title, children}:{title: string; children:React.ReactNode}) {
  // Completed component - use as is
  return (
    <section className="content-card">
      <h2>{title}</h2>  
      {children}
    </section>
  );
}
