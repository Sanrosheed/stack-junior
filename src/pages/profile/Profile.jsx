import { FaBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useAuth } from "../../contexts/authContext";
import Image from "../../assets/images/profile-image.jpg";
import NavBar from "../homePage/components/NavBar";
import { doSignOut } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../contexts/toastContext";
import Swal from "sweetalert2";

export default function Profile() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Welcome,{" "}
            {currentUser.displayName
              ? currentUser.displayName
              : currentUser.email || "User"}
          </h1>
          <p className="text-sm text-gray-400">
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <IoSearchOutline className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg bg-gray-100 text-sm focus:outline-none"
            />
          </div>
          {/* Bell */}
          <FaBell className="text-gray-500 w-5 h-5 cursor-pointer" />
          {/* Avatar */}
          <img
            src={currentUser?.photoUrl || Image}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Banner gradient */}
      {/* <div className="h-28 w-full bg-custom-blue" /> */}
      {/* <div className="h-28 w-full bg-gradient-to-r from-[#0063a4] via-[#ff0b80] to-[#fcba4d]" /> */}

      {/* Profile Card */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex justify-between items-start">
          {/* Profile Info */}
          <div className="flex items-center gap-4">
            <img
              src={currentUser?.photoUrl || Image}
              alt="Alexa Rawles"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                {currentUser.displayName || "User Name"}
              </h2>
              <p className="text-sm text-gray-500">
                {currentUser.email || "Email"}
              </p>
            </div>
          </div>
          <button className="bg-custom-pink text-white px-8 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Save Details
          </button>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <label className="text-sm text-gray-500">Full Name</label>
            <input
              type="text"
              placeholder="Your First Name"
              value={currentUser.displayName || ""}
              readOnly
              className="w-full mt-1 p-3 bg-gray-50 border rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Nick Name</label>
            <input
              type="text"
              placeholder="Your Nick Name"
              className="w-full mt-1 p-3 bg-gray-50 border rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Gender</label>
            <select className="w-full mt-1 p-3 bg-gray-50 border rounded-lg text-sm text-gray-700 focus:outline-none">
              <option>Select a Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-500">Country</label>
            <input
              type="text"
              placeholder="Your Country"
              className="w-full mt-1 p-3 bg-gray-50 border rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Language</label>
            <input
              type="text"
              placeholder="Your Language"
              className="w-full mt-1 p-3 bg-gray-50 border rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Time zone</label>
            <input
              type="text"
              placeholder="Your Time Zone"
              className="w-full mt-1 p-3 bg-gray-50 border rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Email Section */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 mb-3">My email Address</h3>
          <div className="flex items-center gap-3 bg-gray-50 border rounded-lg p-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
              <span className="text-blue-600 font-bold">✉</span>
            </div>
            <div>
              <p className="text-sm text-gray-800">
                {currentUser.email || "Email"}
              </p>
              <p className="text-xs text-gray-400">1 month ago</p>
            </div>
          </div>
          <button className="mt-4 text-blue-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition">
            + Add Email Address
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="max-w-5xl mx-auto p-6">
        <button
          onClick={confirmLogout}
          className="text-red-600 border border-red-600 text-sm font-medium px-6 py-2 rounded-lg hover:bg-red-500 hover:text-white transition cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
