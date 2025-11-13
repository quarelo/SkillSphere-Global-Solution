"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Filters from "@/components/Filters";
import ProfileCard from "@/components/ProfileCard";
import ProfileModal from "@/components/ProfileModal";
import profiles from "@/data/profiles.json";

export default function Home() {
  const [selected, setSelected] = useState("all");
  const [selectedProfile, setSelectedProfile] = useState(null);

  const filteredProfiles =
    selected === "all"
      ? profiles
      : profiles.filter((p) => p.category === selected);

  return (
    <main
      className="min-h-screen transition-colors"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <Header />
      <Filters selected={selected} onSelect={setSelected} />

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {filteredProfiles.map((p) => (
          <ProfileCard key={p.name} profile={p} onClick={setSelectedProfile} />
        ))}
      </section>

      <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
    </main>
  );
}