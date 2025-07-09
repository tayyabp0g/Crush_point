import dashlogo from "../../assets/images/dashlogo.png";
import { bottomItems, menuItems } from "../../data";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 bg-white border-r z-30">
      {/* Logo */}
      <img src={dashlogo} alt="Dashboard Logo" className="h-28" />
      {/* Menu */}
      <nav className="flex flex-col gap-1 w-full">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-6 py-2 text-base font-medium w-full rounded-lg transition
              ${
                item.active
                  ? "bg-blue-500 text-white"
                  : "text-gray-800 hover:bg-blue-100"
              }
            `}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      {/* Bottom Options */}
      <div className="flex flex-col gap-1 w-full">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 px-6 py-2 text-base font-medium text-gray-800 hover:bg-blue-100 w-full rounded-lg transition"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
