import Header from "@/components/Header";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Header />
      <section className="p-6">
        <h2 style={{ color: "var(--foreground)" }}>Conteúdo</h2>
        <p className="text-muted">Aqui vai a listagem de perfis em próximos passos.</p>
      </section>
    </main>
  );
}
