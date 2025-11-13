"use client";

export default function ProfileModal({ profile, onClose }) {
  if (!profile) return null;

  const handleMessage = () => {
    window.open(profile.contactLink, "_blank");
  };

  const handleRecommend = () => {
    alert(`Recomendando ${profile.name}! Link de recomendação: ${profile.recommendLink}`);

  };

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-[var(--card)] text-[var(--foreground)] rounded-2xl p-6 w-full max-w-xl relative shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-gray-500 hover:text-indigo-500 transition-colors text-2xl"
          aria-label="Fechar"
        >
          &times;
        </button>

        <div className="flex flex-col items-center gap-4 border-b pb-4 mb-4">
          <img 
            src={profile.photo} 
            alt={profile.name} 
            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500 shadow-md" 
          />
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">{profile.name}</h2>
            <p className="text-md text-indigo-600 dark:text-indigo-400 font-semibold">{profile.role}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 text-indigo-600 dark:text-indigo-400">Sobre</h3>
          <p className="text-gray-700 dark:text-gray-500 italic">{profile.about}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 text-sm">
          <div>
            <h3 className="font-bold mb-1 flex items-center gap-2 text-gray-800 dark:text-gray-500">
              🎓 Pessoal & Acadêmica
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{profile.academic}</p>
          </div>

          <div>
            <h3 className="font-bold mb-1 flex items-center gap-2 text-gray-800 dark:text-gray-500">
              💻 Habilidades Técnicas
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{profile.tech}</p>
          </div>

          <div>
            <h3 className="font-bold mb-1 flex items-center gap-2 text-gray-800 dark:text-gray-500">
              🤝 Soft Skills & Hobbies
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{profile.soft}</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
          <button 
            onClick={handleRecommend} 
            className="px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md"
          >
            Recomendar profissional
          </button>
          
          <button 
            onClick={handleMessage} 
            className="px-5 py-2 rounded-full border border-gray-300 text-gray-800 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  );
}