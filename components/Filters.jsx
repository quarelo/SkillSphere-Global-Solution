"use client";

export const filterCategories = [
  {
    label: "Área de Atuação",
    key: "roleCategory",
    options: ["Development", "Design", "Data Science", "Product Mgt", "Marketing", "HR/People", "Finance"]
  },
  {
    label: "Cidade",
    key: "city",
    options: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Porto Alegre", "Remoto"]
  },
  {
    label: "Tecnologia",
    key: "tech",
    options: ["React", "Python", "Figma", "AWS", "SQL", "Spring Boot", "DevOps", "Illustrator", "Angular", "GoLang"]
  },
];

export default function Filters({ selectedFilters, onFilterChange, onReset }) {

  const renderFilterGroup = (category) => {
    const groupClass = `filter-group-${category.key}`;

    return (
      <div
        key={category.key}
        className={`p-4 bg-[var(--card)] rounded-xl shadow-sm border border-gray-100 dark:border-gray-400 mr-4 flex-shrink-0 min-w-[280px] sm:min-w-[320px] ${groupClass}`}
      >
        <h4 className="text-sm font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{category.label}</h4>
        <div className="flex flex-wrap gap-2">
          {category.options.map((option) => {
            const isSelected = selectedFilters[category.key] === option;
            return (
              <button
                key={option}
                onClick={() => onFilterChange(category.key, option)}
                className={`px-3 py-1 text-xs rounded-full transition duration-150 ${isSelected
                    ? "bg-indigo-500 text-white dark:bg-indigo-300 dark:text-indigo-900 font-medium shadow-sm hover:shadow-md transition"
                    : "bg-gray-50 dark:bg-indigo-600 text-gray-700 dark:text-indigo-100 hover:bg-gray-100 dark:hover:bg-indigo-400 transition"
                  }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col p-6 max-w-7xl mx-auto">
      <div className="mb-4">
        <button
          onClick={onReset}
          className="px-4 py-2 rounded-full text-sm transition bg-gray-50 dark:bg-indigo-600 text-gray-700 dark:text-indigo-100 hover:bg-gray-100 dark:hover:bg-indigo-400"
        >
          Limpar Filtros ({Object.keys(selectedFilters).length > 0 ? Object.keys(selectedFilters).length : 0} ativos)
        </button>
      </div>

      <div
        id="horizontal-filters"
        className="flex overflow-x-auto pb-4 gap-4"
      >
        {filterCategories.map(renderFilterGroup)}
      </div>

      <style jsx global>{`
        #horizontal-filters::-webkit-scrollbar {
          height: 8px; /* Altura da barra horizontal */
        }

        #horizontal-filters::-webkit-scrollbar-track {
          background: transparent; 
          border-radius: 10px;
        }

        #horizontal-filters::-webkit-scrollbar-thumb {
          background-color: #a3a3a3;
          border-radius: 10px;
        }

        #horizontal-filters::-webkit-scrollbar-thumb:hover {
          background-color: #737373;
        }

        [style*="--background: #1a1a1a"] #horizontal-filters::-webkit-scrollbar-track {
          background: transparent
        }

        [style*="--background: #1a1a1a"] #horizontal-filters::-webkit-scrollbar-thumb {
          background-color: #4b5563;
        }

        [style*="--background: #1a1a1a"] #horizontal-filters::-webkit-scrollbar-thumb:hover {
          background-color: #6b7280;
        }

        #horizontal-filters {
          scrollbar-width: thin;
          scrollbar-color: #a3a3a3 rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
}