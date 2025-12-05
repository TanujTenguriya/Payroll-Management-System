export default function DashboardCard({ title, description }) {
  return (
    <div
      className="
        bg-white/10 backdrop-blur-xl 
        border border-white/20 
        p-6 rounded-xl shadow-lg 
        transition-all duration-300 
        hover:scale-105 
        hover:bg-gradient-to-br 
        hover:from-purple-500/60 
        hover:to-blue-500/60 
        hover:border-transparent
      "
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-200">{description}</p>
    </div>
  );
}
