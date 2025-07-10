export default function DashboardCard({
  title,
  value,
  icon,
  status,
  statusColor,
  statusText,
  linkText,
  linkColor,
  iconBgColor,
  iconColor,
  iconType,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-2 w-[300px] max-w-[250px] font-nunito">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-500">{title}</span>
        {iconType === "special" ? (
          <span
            className="rounded-xl p-4 flex items-center justify-center"
            style={{ background: "#ffe4ec" }}
          >
            {icon}
          </span>
        ) : (
          <span
            className="rounded-full p-2 text-2xl"
            style={{ background: iconBgColor, color: iconColor }}
          >
            {icon}
          </span>
        )}
      </div>
      <div className="font-bold text-2xl mb-1">{value}</div>
      {status && (
        <div
          className="flex items-center text-sm"
          style={{ color: statusColor }}
        >
          <span className="mr-1">{status}</span>
          <span className="text-gray-500">{statusText}</span>
        </div>
      )}
      {linkText && (
        <div className="mt-1">
          <span className={`text-sm font-medium`} style={{ color: linkColor }}>
            {linkText}
          </span>
        </div>
      )}
    </div>
  );
}
