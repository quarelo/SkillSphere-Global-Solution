"use client";

const filters = [
  { label: "All", value: "all" },
  { label: "Design", value: "design" },
  { label: "Development", value: "dev" },
  { label: "Marketing", value: "marketing" },
  { label: "Data Science", value: "data" },
  { label: "Product Mgt", value: "product" },
  { label: "HR/Recruitment", value: "hr" },
  { label: "Finance", value: "finance" },
];

export default function Filters({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 p-4 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onSelect(filter.value)}
          className={`px-4 py-2 rounded-full border text-sm transition ${
            selected === filter.value
              ? "bg-indigo-600 text-white font-medium border-indigo-600 shadow-md"
              : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}