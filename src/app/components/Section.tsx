export default function Section({title, children}:{title: string; children:React.ReactNode}) {
  // Completed component - use as is
  return (
    <section>
      <h2>{title}</h2>  
      {children}
    </section>

  );
}
