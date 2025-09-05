import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";
import AdminUpload from "../profile/adminUpload";
import UploadedCourses from "../profile/UploadedCourses";
import { IoArrowBackCircle } from "react-icons/io5";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <StatsCards />;
      case "Courses":
        return <UploadedCourses />;
      case "Upload Courses":
        return <AdminUpload />;
      case "Income":
        return (
          <div className="p-6 bg-white rounded-xl shadow">Income Component</div>
        );
      case "Promote":
        return (
          <div className="p-6 bg-white rounded-xl shadow">
            Promote Component
          </div>
        );
      case "Help":
        return (
          <div className="p-6 bg-white rounded-xl shadow">Help Component</div>
        );
      default:
        return <StatsCards />;
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className="flex-1 p-6">
        <a href="/" className="flex items-center mb-4 cursor-pointer">
          <IoArrowBackCircle className="mr-2 text-2xl" /> back
        </a>
        <Header />
        {/* Dynamic content */}
        {renderContent()}
      </main>
    </div>
  );
}
