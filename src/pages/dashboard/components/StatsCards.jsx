import { FaDesktop, FaUserFriends, FaUsers } from "react-icons/fa";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Customers",
      value: "5,423",
      change: "+16% this month",
      icon: <FaUsers />,
      positive: true,
    },
    {
      title: "Members",
      value: "1,893",
      change: "-1% this month",
      icon: <FaUserFriends />,
      positive: false,
    },
    {
      title: "Active Now",
      value: "189",
      change: "",
      icon: <FaDesktop />,
      positive: true,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-6 my-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow flex items-center space-x-4"
        >
          <div className="text-2xl text-custom-green">{stat.icon}</div>
          <div>
            <h3 className="text-gray-500 text-sm">{stat.title}</h3>
            <p className="text-xl font-bold">{stat.value}</p>
            <span
              className={`text-sm ${
                stat.positive ? "text-custom-green" : "text-red-500"
              }`}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
