"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Filters, { filterCategories } from "@/components/Filters";
import ProfileCard from "@/components/ProfileCard";
import ProfileModal from "@/components/ProfileModal";
import profiles from "@/data/profiles.json";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({}); 
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleResetFilters = () => {
    setSelectedFilters({});
    setSearchTerm("");
  };

  const handleFilterChange = (key, value) => {
    setSelectedFilters(prevFilters => {
      if (prevFilters[key] === value) {
        const { [key]: _, ...rest } = prevFilters; 
        return rest;
      } else {
       
        return {
          ...prevFilters,
          [key]: value
        };
      }
    });
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const applyFiltersAndSearch = (profile) => {
    const term = searchTerm;
    const activeFilters = Object.keys(selectedFilters).length;

    const matchesSearch = 
      !term ||
      profile.name.toLowerCase().includes(term) ||
      profile.role.toLowerCase().includes(term) ||
      profile.roleCategory.toLowerCase().includes(term) ||
      profile.city.toLowerCase().includes(term) ||
      profile.techHighlight.toLowerCase().includes(term) ||
      profile.skills.some(skill => skill.toLowerCase().includes(term));

    if (!matchesSearch) {
      return false; 
    }

    if (activeFilters === 0) {
      return true; 
    }

    let passesAllFilters = true;

    for (const key in selectedFilters) {
      const filterValue = selectedFilters[key];

      if (key === "tech") {
        if (!profile.skills.some(skill => skill === filterValue)) {
          passesAllFilters = false;
          break;
        }
      } else if (key === "roleCategory") {
        if (profile.roleCategory !== filterValue) {
          passesAllFilters = false;
          break;
        }
      } else if (key === "city") {
        if (profile.city !== filterValue) {
          passesAllFilters = false;
          break;
        }
      }
    }

    return passesAllFilters;
  };

  const filteredProfiles = profiles.filter(applyFiltersAndSearch);


  return (
    <main
      className="min-h-screen transition-colors"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <Header onSearch={handleSearch} />
      <Filters 
        selectedFilters={selectedFilters} 
        onFilterChange={handleFilterChange} 
        onReset={handleResetFilters} 
      />

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((p) => (
            <ProfileCard key={p.name} profile={p} onClick={setSelectedProfile} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-500 dark:text-gray-400 py-10">
            Nenhum profissional encontrado com os critérios de busca/filtro.
          </p>
        )}
      </section>

      <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
    </main>
  );
}