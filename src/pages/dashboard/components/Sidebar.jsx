import { FaChevronDown } from "react-icons/fa";
import { useAuth } from "../../../contexts/authContext";
import Image from "../../../assets/images/profile-image.jpg";
import { doSignOut } from "../../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../contexts/toastContext";
import Swal from "sweetalert2";

export default function Sidebar({ activeMenu, setActiveMenu }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();
  const handleLogout = async () => {
    try {
      await doSignOut();
      //   currentUser(null);
      navigate("/sign-in");
      showSuccess("User Logged out successfully");
      console.log("User logged out successfully!");
    } catch (error) {
      showError("Logout failed", error.message);
      console.error("Logout failed:", error);
    }
  };

  const confirmLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to log out from your account. Are you sure you want to Log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Log out!",
      cancelButtonText: "Close",
      reverseButtons: false,
      customClass: {
        confirmButton:
          "bg-[#E33629] text-white py-2 px-4 rounded-md hover:bg-[#E33629] mr-8",
        cancelButton:
          "bg-transparent border-2 border-[#E33629] text-[#E33629] py-2 px-6 rounded-md",
        text: "text-lg",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout();
      }
    });
  };

  const menuItems = [
    "Dashboard",
    "Courses",
    "Upload Courses",
    "Income",
    "Promote",
    "Help",
  ];

  return (
    <aside className="w-60 bg-white shadow-md flex flex-col justify-between p-4">
      <div>
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <nav className="space-y-4">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveMenu(item)}
              className={`w-full text-left px-4 py-2 rounded-lg cursor-pointer ${
                activeMenu === item
                  ? "bg-custom-blue text-white font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">
        <button
          onClick={confirmLogout}
          className="w-full bg-gradient-to-r from-custom-pink to-custom-blue text-white py-2 rounded-lg shadow cursor-pointer"
        >
          Log out
        </button>
        <div className="flex items-center mt-6 space-x-3">
          <img
            src={currentUser?.photoUrl || Image}
            className="w-10 h-10 bg-gray-300 rounded-full"
          />
          <div>
            <p className="font-medium">
              {currentUser.displayName
                ? currentUser.displayName
                : currentUser.email || "Admin"}
            </p>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
