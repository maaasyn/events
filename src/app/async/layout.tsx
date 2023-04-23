export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1>Async</h1>
      {children}
    </main>
  );
}
