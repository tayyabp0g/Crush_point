import {
  FaBox,
  FaCalendarAlt,
  FaCog,
  FaComments,
  FaFileAlt,
  FaHeart,
  FaListUl,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";

export const menuItems = [
  { label: "Dashboard", icon: <FaTachometerAlt />, active: true },
  { label: "Products", icon: <FaBox /> },
  { label: "Accounts", icon: <FaHeart /> },
  { label: "Sales", icon: <FaComments /> },
  { label: "Vouchers", icon: <FaListUl /> },
  { label: "Reports", icon: <FaFileAlt /> },
<<<<<<< HEAD
=======
  { label: "Expense", icon: <FaCalendarAlt /> },
>>>>>>> 537a126e4047cb36f1035904d342dd45854f54ca
];

export const bottomItems = [
  { label: "Settings", icon: <FaCog /> },
  { label: "Logout", icon: <FaSignOutAlt /> },
];
