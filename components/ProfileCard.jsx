"use client";

export default function ProfileCard({ profile, onClick }) {
  return (
    <div
      onClick={() => onClick(profile)}
      className="bg-[var(--card)] text-[var(--foreground)] border border-gray-200 dark:border-gray-700 rounded-xl p-3 cursor-pointer hover:shadow-lg transition transform hover:scale-[1.02] duration-300 h-full flex flex-col justify-between"
    >
      <div>
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-12 h-12 rounded-full mx-auto mb-2 border-2 border-indigo-500/50"
        />
        <h3 className="text-base font-bold text-center truncate">{profile.name}</h3>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-2 truncate">{profile.role}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-1 mt-2">
        {profile.skills.slice(0, 3).map((skill, i) => ( // Limita as skills para 3 no card
          <span
            key={i}
            className="text-[10px] bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2 py-0.5 rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}